// All word banks offered in a function that randomizes word order in list
function ransomizeWordLists() {
let words1 = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"]; //english
let words2 = ["ella", "Mira", "hora", "podría", "personas", "parte", "larga/largo", "hizo", "en", "ellas/ellos", "yo", "estas/estos", "dijo", "entonces", "número", "No", "si"]; //spanish
let words3 = ["ela", "Veja", "Tempo", "poderia", "pessoas", "parte", "longa/longo", "fez", "em", "eles", "Eu", "estes", "disse", "tão", "número", "não", "sim"]; //portuguese
let words4 = ["elle", "Regardez", "temps", "pourrait", "gens", "partie", "longue/long", "fait", "sur", "elles/ils", "je", "celles-ci/ceux-ci", "m'a dit", "alors", "nombre", "non", "Oui"];//french
let words5 = ["lei", "Guarda", "tempo", "poteva", "persone", "parte", "lunga/lungo", "fatta/fatto", "spora", "esse/essi", "io", "queste/questi", "disse", "così", "numero", "no", "sì"]; //italian
let words6 = ["sie", "aussenhen", "Zeit", "könnten", "Menschen", "Teil", "lange", "tat", "auf", "Sie", "ich", "diese", "sagte", "so", "Nummer", "Nein", "Ja"]; //german
var  nRNG = [];
wordsEnglish = [];
wordsSpanish = [];
wordsPortuguese = [];
wordsFrench = [];
wordsItalian = [];
wordsGerman = [];
// random number generator that creates randoms in decending order
    for(i=17; i>0; i-- ){
        nRNG = (Math.floor(Math.random()*i));
        wordsEnglish.push(words1.splice(nRNG, 1));
        wordsSpanish.push(words2.splice(nRNG, 1));
        wordsPortuguese.push(words3.splice(nRNG, 1));
        wordsFrench.push(words4.splice(nRNG, 1));
        wordsItalian.push(words5.splice(nRNG, 1));
        wordsGerman.push(words6.splice(nRNG, 1));
    }
}

// Object constructor for foreign word (fLanguage) calling
function Language(english, spanish, portuguese, french, italian, german) {  
    this.english = english;
    this.spanish = spanish;
    this.portuguese = portuguese;
    this.french = french;
    this.italian = italian;
    this.german = german;
}

// Object for applying background to face and back of card
let cardIndex = ["cardFaceTypeIndex", "cardBackTypeIndex"]
let cardFun = ["cardFaceTypeFun", "cardBackTypeFun"]
function CardStyle(index, fun) {
    this.index = index;
    this.fun = fun;
}

// ----- https://developer.mozilla.org/en-US/docs/Web/API/Document/height MDN height
fullScreenHeight = document.documentElement.scrollHeight;       // makes background take up entire screen
document.getElementById("playing-board").style.minHeight = (fullScreenHeight + 50) + "px";

//global variables and object callers
let importCardStyle = new CardStyle (cardIndex, cardFun)        // builds card face and back for calling
let fLanguage = new Language(wordsEnglish, wordsSpanish, wordsPortuguese, wordsFrench, wordsItalian, wordsGerman);      // Sets Global variable and sets foundation for foreign language object for string calling later in code
var clickRecord = [];       // up to two cards player currently selected
var rNG = [];               // first half is indexes that need to be used -- second half is randomized index list to pull first half with  
var playerPoints = 0;       //  total matched pairs by player
var MaxPlayerPoints = 0;    // total allowed pairs for winning game
var timeDelay = null;       // for difficulty adjustment -- addes a click delay between card selection
var globalDifficulty;       // user selection for difficulty
var globalLanguage0;        //user selection for langauge
var globalLanguage1;        //user selection for langauge
var globalCardType;         //user selection for card type
var wordsEnglish = [];      //sets global array for english
var wordsSpanish = [];      //sets global array for spanish
var wordsPortuguese = [];   //sets global array for portuguese
var wordsFrench = [];       //sets global array for french
var wordsItalian = [];      //sets global array for italian
var wordsGerman = [];       //sets global array for german

//removed correctly paired cards from gameboard and displays current player matched pairs (points)
function removingCorrectPair(clickRecord){  
    setTimeout(function() {
        document.getElementById(clickRecord[0]).parentElement.classList.add("cardRemove");
        document.getElementById(clickRecord[1]).parentElement.classList.add("cardRemove");
    },1500);

    //adds a point to player score and updates in game point display
    playerPoints++;
    document.getElementById("timer-frame").getElementsByTagName("p")[1].textContent = "Player has " + playerPoints + " points";
}

//flips incorrectly paired cards back over
function unflipWrongPair(clickRecord) {     
    setTimeout(function(){
        document.getElementById(clickRecord[0]).parentElement.classList.remove("flipCard");
        document.getElementById(clickRecord[1]).parentElement.classList.remove("flipCard");
    },1500);
}

// generates total indexes needed for appropriate pairing and a random list to index with
function createRNG(cardNumber, multiplier = 2){     
    for(i=(cardNumber*multiplier); i>0; i-- ){
        rNG.push(Math.floor((Math.random()*i))); //adds random number at end of array     
        rNG.unshift(i-1);                        //adds index list at beginning of array
    }
}

// gives cards functionality by adding index numbers, words, and makes card flipable
function makeCardFunctional(index, cardNumber, target){     
        var rngIndex = null;
        createParagraph = document.createElement("p");              //creates text node        
        rngIndex = rNG.splice(rNG[index + (cardNumber*2)], 1);    // uses random index call to splice out availiable card index and places it in variable

    // makes a unique card and random matching pair tandum id(cardId- 'unique id' - 'pair id'), and creates word for text node
    if (rngIndex < cardNumber){ 
        target.firstChild.id = "cardId-" + index + "-" + rngIndex;
        ParagraphNode = document.createTextNode(fLanguage[globalLanguage0][rngIndex]);
    } else {
        target.firstChild.id = "cardId-" + index + "-" + (rngIndex-cardNumber);
        ParagraphNode = document.createTextNode(fLanguage[globalLanguage1][rngIndex-cardNumber]);
    }

    //adds word to back of card
    createParagraph.appendChild(ParagraphNode);
    target.lastChild.appendChild(createParagraph);      
    
    //makes cards flippable
    target.firstChild.onclick = function() {       
        if( this.parentElement.parentElement.getElementsByClassName("cardRemove")[0] === undefined && timeDelay === null){
            this.parentElement.classList.add("flipCard");
            clickRecord.push(this.id);
        }
    }
}

//Creates the div structure of cards from outer most layer in by multiple calls
function constructCard (cardNumber, classValues, className = null, cardType = null, isCardBack = false, isCardFace = false){         
    for (index = 0; index < cardNumber*2; index++){
        var CardContainer = document.getElementById("game");
        var cardInternal = document.getElementsByClassName(className)[index];
        var setClasses = document.createAttribute("class");
        setClasses.value = classValues;

        //creates outer most card container
        if (className === null){ 
            CardContainer.appendChild(document.createElement("div")).setAttributeNode(setClasses);
            continue;
        }

        //adds div elements for cardRotate container that holds both the card face and card back cardFace and cardBack
        cardInternal.appendChild(document.createElement("div")).setAttributeNode(setClasses) 
        
        //places card face on card
        if (isCardFace){
            cardInternal.lastChild.classList.add(importCardStyle[globalCardType][0]);
        }

        //calls word adding function a nd adds card back on card
        if (isCardBack){        
            makeCardFunctional(index, cardNumber, cardInternal);
            cardInternal.lastChild.classList.add(importCardStyle[globalCardType][1]);
        }
    }
}

//flips cards over to back, removes matching pairs, adds delay between selected pairs
function checkCardPair() {                
    if (clickRecord.length === 2){
        var selectedCardIds = [];
        var match;
        timeDelay = 1;

        // adds a delay between selected matching pairs
        setTimeout(function() {
            timeDelay = null;
        }, globalDifficulty);

        //splits out card id for matching comparison
        for (i=0; i<2; i++){    
            match = parseInt((clickRecord[i]).split("-")[2]);
            selectedCardIds.unshift(match);
        }
        
        //removes correctly matched cards and unflips wrong pairs
        if (selectedCardIds[0] === selectedCardIds[1]){
            removingCorrectPair(clickRecord);
            clickRecord = [];
        } else {
            unflipWrongPair(clickRecord);
            clickRecord = [];
        }
    }
}

//allows game to track user clicks for selecting cards
document.onclick = function() {         
   checkCardPair(); 
} 

//allows game to start by clicking start button
document.getElementById("play").onclick = function() { 
    ransomizeWordLists(); 
    startGame();
}

// Collects user selected information and passes it to a game populating function
function startGame() {      
    startButton = document.getElementById("start-screen").getElementsByTagName("option");
    var userSelection = [];
    
    //gets user selection and changes it into an int value or passes string value through 
    for(i=0; i<((startButton.length)); i++){ 
        if(startButton[i].selected && userSelection.length >= 3){
            userSelection.push(startButton[i].value);               //pull selected string
        } else if( startButton[i].selected) {
           userSelection.push(parseInt(startButton[i].value));      //pull selected number(int)
        }
    }

    //passes user selections to a function for processing
    populateGame(userSelection[0],userSelection[1],userSelection[2],userSelection[3],userSelection[4], userSelection[5])
}

 //creates game for play by processing previously gathered user selections
function populateGame(difficulty, numberOfCards, time, language0, language1, cardType) {  
    fLanguage = new Language(wordsEnglish, wordsSpanish, wordsPortuguese, wordsFrench, wordsItalian, wordsGerman);   //builds foreign language object for string calling    
    globalLanguage0 = language0;        //passing base language to global variable
    globalLanguage1 = language1;        //passing pairing to language to global variable
    globalDifficulty = difficulty;      //passes difficulty to global variable
    globalCardType = cardType;          //passes card type to global variable
    createRNG(numberOfCards);           //random number generator   
    constructCard(numberOfCards, "col-6  col-md-4 col-lg-3, col-xl-2 card-frame");                     //Outer most container
    constructCard(numberOfCards, "row no-gutters middle cardRotate", "col-6");          //Middle container for cardRotate, that holds both card front and card back
    constructCard(numberOfCards, "col-12 card", "middle", cardType, false, true);       //cardFace
    constructCard(numberOfCards, "col-12 card cardBack", "middle", cardType, true);     //cardBack
    MaxPlayerPoints = numberOfCards;    //sets max points till player wins
    gameHeader(2);                      //changer header to game play option
    timer((time*60000)+1000);           //change time into minutes and add 1 second so user sees full time minute value
}

//in game round timer that tracks win/lose conditions and changes game header accordingly 
function timer(time) {  
    var setTimeElement = document.getElementById("timer-frame").getElementsByTagName("p")[0];
    
    //Allows game to track and display minutes/seconds for time remaining on clock. Also actively tracks win and lose conditions
    setTimeout(function() {
        time -= 1000;
        setTimeElement.textContent = "Time remainging is " + Math.floor(time / 60000)  + " minute(s) and " + (time % 60000) / 1000 + " second(s)"; //changes time into a user display with minutes and seconds
        
        //win and lose condition tracking and changes the display of the header accordingly
        if(MaxPlayerPoints === playerPoints) { 
            gameHeader(3)
            return;
        } else if(time === 0 ){ 
            gameHeader(4);
            return;
        }
        //a loop to allow the timer to continue replaying its function ever second
        timer(time);
    },1000)
}

//hides timer and allows header to be seen
function hideTimer(targetP, targetH1) {     
    targetP[0].classList.add("hiddenEl");
    targetP[1].classList.add("hiddenEl");
    targetH1.classList.remove("hiddenEl");
}

//Reset game by flashing card structure and in game header before game start screen runs
function restartGame() {        
    var targetGame  = document.getElementById("game").getElementsByClassName("card-frame");
    var totalLength = targetGame.length;
    
    //removes entire card structure so multiple games can be played
    setTimeout(function(){
        for (i=0; i < totalLength; i++){
            targetGame[0].remove();
        }

        //flashes player points and in game header so multiple games can be played
        playerPoints = 0;
            document.getElementById("timer-frame").getElementsByTagName("p")[0].textContent = "Timer will start shortly";
            document.getElementById("timer-frame").getElementsByTagName("p")[1].textContent = "Player has 0 points";
        gameHeader(1);
    }, 4000);
}
// Changes the visibiilty of the game header according to the screen the user is currently on and flashes game RNG and user card selection for multiple games
function gameHeader (condition) {       // 1-gamestartscreen ----- 2-gameplayscreen ------ 3-game win ------- 4-game lose //-----changes header and game start visibility
    var targetP = document.getElementById("timer-frame").getElementsByTagName("p");
    var targetH1 = document.getElementById("timer-frame").getElementsByTagName("h1")[0];
    var targetStart = document.getElementById("start-screen")
    rNG = [];                           // flashes RNG (random number generator) memory
    clickRecord = [];                   // flashes user selection

    if(condition === 1){                                //game start screen
        hideTimer(targetP, targetH1);
        targetH1.textContent = "Romancing The Cards";
        targetStart.classList.remove("hiddenEl");
    } else if (condition === 2){                        //game play screen
        targetP[0].classList.remove("hiddenEl");
        targetP[1].classList.remove("hiddenEl");
        targetH1.classList.add("hiddenEl");
        targetStart.classList.add("hiddenEl");
    } else if (condition === 3){                        //game win screen
        hideTimer(targetP, targetH1);
        targetH1.textContent = "You Win!";
        restartGame();
    } else if (condition === 4){                        //game lose screen
        hideTimer(targetP, targetH1);
        targetH1.textContent = "You Lose!";
        restartGame();   
    }
}