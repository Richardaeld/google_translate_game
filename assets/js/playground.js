// All word banks offered in a function that randomizes word order and puts in global array
// Idea to use objects for language banks given by Felipe Souza Alarcon
function ransomizeWordLists() {
    let words1 = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"]; //english
    let words2 = ["ella", "Mira", "hora", "podría", "personas", "parte", "larga/largo", "hizo", "en", "ellas/ellos", "yo", "estas/estos", "dijo", "entonces", "número", "No", "si"]; //spanish
    let words3 = ["ela", "Veja", "Tempo", "poderia", "pessoas", "parte", "longa/longo", "fez", "em", "eles", "Eu", "estes", "disse", "tão", "número", "não", "sim"]; //portuguese
    let words4 = ["elle", "Regardez", "temps", "pourrait", "gens", "partie", "longue/long", "fait", "sur", "elles/ils", "je", "celles-ci/ceux-ci", "m'a dit", "alors", "nombre", "non", "Oui"];//french
    let words5 = ["lei", "Guarda", "tempo", "poteva", "persone", "parte", "lunga/lungo", "fatta/fatto", "spora", "esse/essi", "io", "queste/questi", "disse", "così", "numero", "no", "sì"]; //italian
    let words6 = ["sie", "aussenhen", "Zeit", "könnten", "Menschen", "Teil", "lange", "tat", "auf", "Sie", "ich", "diese", "sagte", "so", "Nummer", "Nein", "Ja"]; //german
    var  nRNG = [];         // For Random number generator to reuse variable
    wordsEnglish = [];      // Clears global memory for english words
    wordsSpanish = [];      // Clears global memory for spanish words
    wordsPortuguese = [];   // Clears global memory for portuguese words
    wordsFrench = [];       // Clears global memory for french words
    wordsItalian = [];      // Clears global memory for italian words
    wordsGerman = [];       // Clears global memory for german words
    // Random number generator (RNG) that creates nRNG in decending order to prevent index call errors and allow following code to splice and push words to global array 
    for(let i = 17; i > 0; i-- ){
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
let cardIndex = ["cardFaceTypeIndex", "cardBackTypeIndex"];
let cardFun = ["cardFaceTypeFun", "cardBackTypeFun"];
function CardStyle(index, fun) {
    this.index = index;
    this.fun = fun;
}

// ----- https://developer.mozilla.org/en-US/docs/Web/API/Document/height MDN height (The line below taken directly from MDN)
var fullScreenHeight = document.documentElement.scrollHeight;       // Sets variable that measures entire available screen real estate  
document.getElementById("playing-board").style.minHeight = (fullScreenHeight + 50) + "px"; // Sets background size to take up entire screen real estate

// Global variables and object callers
let importCardStyle = new CardStyle (cardIndex, cardFun);        // Builds card face and back for calling
let fLanguage = new Language(wordsEnglish, wordsSpanish, wordsPortuguese, wordsFrench, wordsItalian, wordsGerman);      // Sets Global variable and sets foundation for foreign language object for string calling later in code
var clickRecord = [];       // Holds up to two cards player has selected
var rNG = [];               // First half is indexes that need to be used -- second half is randomized index list to pull first half with  
var playerPoints = 0;       // Total matched pairs by player
var MaxPlayerPoints = 0;    // Total allowed pairs for winning game
var timeDelay = null;       // For difficulty adjustment -- addes a click delay between card selection
var globalDifficulty;       // User global selection for difficulty
var globalLanguage0;        // User global selection for base langauge
var globalLanguage1;        // User global selection for pairing langauge
var globalCardType;         // User global selection for card type
var wordsEnglish = [];      // Sets global array for english
var wordsSpanish = [];      // Sets global array for spanish
var wordsPortuguese = [];   // Sets global array for portuguese
var wordsFrench = [];       // Sets global array for french
var wordsItalian = [];      // Sets global array for italian
var wordsGerman = [];       // Sets global array for german

// Removed correctly paired cards from gameboard and displays current player matched pairs (points)
function removingCorrectPair(clickRecord){  
    setTimeout(function() {
        document.getElementById(clickRecord[0]).parentElement.classList.add("cardRemove");
        document.getElementById(clickRecord[1]).parentElement.classList.add("cardRemove");
    },1500);

    // Adds a point to player score and updates in game point display
    playerPoints++;
    document.getElementById("timer-frame").getElementsByTagName("p")[1].textContent = "Player has " + playerPoints + " points";
}

// Flips incorrectly paired cards back over
function unflipWrongPair(clickRecord) {     
    setTimeout(function(){
        document.getElementById(clickRecord[0]).parentElement.classList.remove("flipCard");
        document.getElementById(clickRecord[1]).parentElement.classList.remove("flipCard");
    },1500);
}

// Generates total indexes needed for appropriate pairing and a random list to index with
function createRNG(cardNumber, multiplier = 2){    
    for(let i = (cardNumber * multiplier); i > 0; i-- ){
        rNG.push(Math.floor((Math.random() * i))); // Adds random number at end of array     
        rNG.unshift(i - 1);                        // Adds index list at beginning of array
    }
}

// Gives cards functionality by adding index numbers, words, and makes card flipable
function makeCardFunctional(index, cardNumber, target){     
    let ParagraphNode;
    var rngIndex = null;
    let createParagraph = document.createElement("p");            // Creates text node        
    rngIndex = rNG.splice(rNG[index + (cardNumber * 2)], 1);    // Uses random index call to splice out availiable card index and places it in variable

    // Makes a unique card and random matching pair tandum id(cardId- 'unique id' - 'pair id'), and creates word for text node
    if (rngIndex < cardNumber){ 
        target.firstChild.id = "cardId-" + index + "-" + rngIndex;
        ParagraphNode = document.createTextNode(fLanguage[globalLanguage0][rngIndex]);
    } else {
        target.firstChild.id = "cardId-" + index + "-" + (rngIndex-cardNumber);
        ParagraphNode = document.createTextNode(fLanguage[globalLanguage1][rngIndex-cardNumber]);
    }

    // Adds word to back of card
    createParagraph.appendChild(ParagraphNode);
    target.lastChild.appendChild(createParagraph);      
    
    // Makes cards flippable
    target.firstChild.onclick = function() {       
        if( this.parentElement.parentElement.getElementsByClassName("cardRemove")[0] === undefined && timeDelay === null){
            this.parentElement.classList.add("flipCard");
            clickRecord.push(this.id);
        }
    };
}

// Creates the div/class (adds text) structure of cards from outer most layer in by multiple calls 
function constructCard (cardNumber, classValues, className = null, cardType = null, isCardBack = false, isCardFace = false){         
    for (let index = 0; index < cardNumber * 2; index++){
        let CardContainer = document.getElementById("game");
        let cardInternal = document.getElementsByClassName(className)[index];
        let setClasses = document.createAttribute("class");
        setClasses.value = classValues;

        // Creates outer most card container
        if (className === null){ 
            CardContainer.appendChild(document.createElement("div")).setAttributeNode(setClasses);
            CardContainer.lastChild.setAttribute("aria-label", "card " + (index + 1)); // Adds number label for ARIA users
            continue;
        }

        // Adds div elements for cardRotate container that holds both the card faces (.card and .cardBack)
        cardInternal.appendChild(document.createElement("div")).setAttributeNode(setClasses); 
        
        // Places card face on card (.card)
        if (isCardFace){
            cardInternal.lastChild.classList.add(importCardStyle[globalCardType][0]);
        }

        // Calls word adding function and adds card back on card
        if (isCardBack){        
            makeCardFunctional(index, cardNumber, cardInternal);
            cardInternal.lastChild.classList.add(importCardStyle[globalCardType][1]);
        }

        // makes sure background extends entire length of visible screen
        if ( index == (cardNumber * 2)-1) { 
            // ----- https://developer.mozilla.org/en-US/docs/Web/API/Document/height MDN height (The line below taken directly from MDN)
            let fullScreenHeight = document.documentElement.scrollHeight;       // Sets variable that measures entire available screen real estate  
            document.getElementById("playing-board").style.minHeight = (fullScreenHeight + 50) + "px"; // Sets background size to take up entire screen real estate        }
        }
    }
}

// Flips cards over to back, removes matching pairs, adds delay between selected pairs
function checkCardPair() {                
    if (clickRecord.length === 2){
        var selectedCardIds = [];
        var match;
        timeDelay = 1;

        // Adds a delay between selected matching pairs
        setTimeout(function() {
            timeDelay = null;
        }, globalDifficulty);

        // Splits out card id for matching comparison
        for (let i = 0; i < 2; i++){    
            match = parseInt((clickRecord[i]).split("-")[2]);
            selectedCardIds.unshift(match);
        }
        
        // Removes correctly matched cards and unflips wrong pairs
        if (selectedCardIds[0] === selectedCardIds[1] && clickRecord[0] != clickRecord[1]){
            removingCorrectPair(clickRecord);
            clickRecord = [];
        } else {
            unflipWrongPair(clickRecord);
            clickRecord = [];
        }
    }
}

// Allows game to track user clicks for selecting cards
document.onclick = function() {         
   checkCardPair(); 
};

// Allows game to start by clicking start button
document.getElementById("play").onclick = function() { 
    ransomizeWordLists(); 
    startGame();
};

// Collects user selected information and passes it to a game populating function
function startGame() {      
    let startButton = document.getElementById("start-screen").getElementsByTagName("option");
    var userSelection = [];
    
    // Gets user selection and changes it into an int value or passes string value through 
    for(let i = 0; i < startButton.length; i++){ 
        if(startButton[i].selected && userSelection.length >= 3){
            userSelection.push(startButton[i].value);               // Pull selected string
        } else if( startButton[i].selected) {
            userSelection.push(parseInt(startButton[i].value));      // Pull selected number(int)
        }
    }

    // Passes user selections to a function for processing
    populateGame(userSelection[0],userSelection[1],userSelection[2],userSelection[3],userSelection[4], userSelection[5]);
}

 // Creates game for play by processing previously gathered user selections
function populateGame(difficulty, numberOfCards, time, language0, language1, cardType) {  
    fLanguage = new Language(wordsEnglish, wordsSpanish, wordsPortuguese, wordsFrench, wordsItalian, wordsGerman);   // Builds foreign language object for string calling    
    globalLanguage0 = language0;        // Passing base language to global variable
    globalLanguage1 = language1;        // Passing pairing language to global variable
    globalDifficulty = difficulty;      // Passes difficulty to global variable
    globalCardType = cardType;          // Passes card type to global variable
    createRNG(numberOfCards);           // Random number generator   
    constructCard(numberOfCards, "col-6  col-md-4 col-lg-3, col-xl-2 card-frame");      // Outer most container
    constructCard(numberOfCards, "row no-gutters middle cardRotate", "col-6");          // Middle container for cardRotate, that holds both card faces (.card and .cardback)
    constructCard(numberOfCards, "col-12 card", "middle", cardType, false, true);       // Card face (.card)
    constructCard(numberOfCards, "col-12 card cardBack", "middle", cardType, true);     // Card back (.card and .cardBack)
    MaxPlayerPoints = numberOfCards;    // Sets max points for player win condition
    gameHeader(2);                      // Changes header to game play option
    timer((time * 60000) + 1000);           // Change time into minutes and add 1 second so user sees full time minute value
}

// In game round timer that tracks win/lose conditions and changes game header accordingly 
function timer(time) {  
    var setTimeElement = document.getElementById("timer-frame").getElementsByTagName("p")[0];
    
    // Allows game to track and display minutes/seconds for time remaining on clock. Also actively tracks win and lose conditions
    setTimeout(function() {
        time -= 1000;
        setTimeElement.textContent = "Time remainging is " + Math.floor(time / 60000)  + " minute(s) and " + (time % 60000) / 1000 + " second(s)"; // Changes time into a user display with minutes and seconds
        
        // Win and lose condition tracking and changes the display of the header accordingly
        if(MaxPlayerPoints === playerPoints) { 
            gameHeader(3);
            return;
        } else if(time === 0 ){ 
            gameHeader(4);
            return;
        }
        // A loop to allow the timer to continue replaying its function every second
        timer(time);
    },1000);
}

// Hides timer and allows header to be seen
function hideTimer(targetP, targetH1) {     
    targetP[0].classList.add("hiddenEl");
    targetP[1].classList.add("hiddenEl");
    targetH1.classList.remove("hiddenEl");
}

// Reset game by flashing card structure and in game header before game start screen runs
function restartGame() {        
    var targetGame  = document.getElementById("game").getElementsByClassName("card-frame");
    var totalLength = targetGame.length;
    
    // Removes entire card structure so multiple games can be played
    setTimeout(function(){
        for (let i = 0; i < totalLength; i++){
            targetGame[0].remove();
        }
        
        // Sets background size to original size before extended for cards
        document.getElementById("playing-board").style.minHeight = (fullScreenHeight + 50) + "px"; 

        // Flashes player points and in game header so multiple games can be played
        playerPoints = 0;
        document.getElementById("timer-frame").getElementsByTagName("p")[0].textContent = "Timer will start shortly";
        document.getElementById("timer-frame").getElementsByTagName("p")[1].textContent = "Player has 0 points";
        gameHeader(1);
    }, 4000);
}
// Changes the visibiilty of the game header according to the screen the user is currently on, flashes game RNG, and flashes user card selection for multiple games
function gameHeader (condition) {       //-----changes header and game start screen visibility  ----- 1-gamestartscreen ----- 2-gameplayscreen ------ 3-game win ------- 4-game lose 
    var targetP = document.getElementById("timer-frame").getElementsByTagName("p");
    var targetH1 = document.getElementById("timer-frame").getElementsByTagName("h1")[0];
    var targetStart = document.getElementById("start-screen");
    rNG = [];                           // Flashes RNG (random number generator) memory
    clickRecord = [];                   // Flashes user card selection

    if(condition === 1){                                // Game start screen
        hideTimer(targetP, targetH1);
        targetH1.textContent = "Romancing The Cards";
        targetStart.classList.remove("hiddenEl");
    } else if (condition === 2){                        // Game play screen
        targetP[0].classList.remove("hiddenEl");
        targetP[1].classList.remove("hiddenEl");
        targetH1.classList.add("hiddenEl");
        targetStart.classList.add("hiddenEl");
    } else if (condition === 3){                        // Game win screen
        hideTimer(targetP, targetH1);
        targetH1.textContent = "You Win!";
        restartGame();
    } else if (condition === 4){                        // Game lose screen
        hideTimer(targetP, targetH1);
        targetH1.textContent = "You Lose!";
        restartGame();   
    }
}

// Allows aria labels to be added/changed/removed to select/options of games start menu
var findUserInputSelects = document.querySelectorAll(".start-screen-choice");
findUserInputSelects.forEach(makeAriaLabel);
function makeAriaLabel(selectable, selectableIndex){

    selectable.addEventListener('change', function() {
        // Groups all options from each select
        var totalOptions = selectable.options;
        // Sets selected option to aria seleceted true --Sets rest to false
        for (let i = 0; i < totalOptions.length; i++){
            if (selectable.options[i].selected){
                selectable.options[i].setAttribute('aria-selected', 'true');
                selectable.blur();
            } else {
                selectable.options[i].setAttribute('aria-selected', 'false');
            }
        }
    });
}
