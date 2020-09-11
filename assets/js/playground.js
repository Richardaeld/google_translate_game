let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];
let words1 = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"]; //english
let words2 = ["ella", "Mira", "hora", "podría", "personas", "parte", "larga/largo", "hizo", "en", "ellas/ellos", "yo", "estas/estos", "dijo", "entonces", "número", "No", "si"]; //spanish
let words3 = ["ela", "Veja", "Tempo", "poderia", "pessoas", "parte", "longa/longo", "fez", "em", "eles", "Eu", "estes", "disse", "tão", "número", "não", "sim"]; //portuguese
let words4 = ["elle", "Regardez", "temps", "pourrait", "gens", "partie", "longue/long", "fait", "sur", "elles/ils", "je", "celles-ci/ceux-ci", "m'a dit", "alors", "nombre", "non", "Oui"];//french
let words5 = ["lei", "Guarda", "tempo", "poteva", "persone", "parte", "lunga/lungo", "fatta/fatto", "spora", "esse/essi", "io", "queste/questi", "disse", "così", "numero", "no", "sì"]; //italian
let words6 = ["sie", "aussenhen", "Zeit", "könnten", "Menschen", "Teil", "lange", "tat", "auf", "Sie", "ich", "diese", "sagte", "so", "Nummer", "Nein", "Ja"]; //german

function Language(english, spanish, portuguese, french, italian, german) {  //object constructor for foreign word calling
    this.english = english;
    this.spanish = spanish;
    this.portuguese = portuguese;
    this.french = french;
    this.italian = italian;
    this.german = german;
}
let fLanguage = new Language(words1, words2, words3, words4, words5, words6);   //builds foreign language object for string calling
var clickRecord = [];   //two cards player currently selected
var rNG = [];  //first half is indexes that need to be used -- second half is randomized index list to pull first half with  
var playerPoints = 0;   //total matched pairs by player
var MaxPlayerPoints = 0; // pair from start screen for wingame
var timeDelay = null; // for difficulty adjustment -- addes a click delay between card selection
var globalDifficulty;   // user selection for difficulty
var globalLanguage;     //user selection for foriegn langauge

function removingCorrectPair(clickRecord){  //removed correctly paired cards from gameboard
    setTimeout(function() {
        document.getElementById(clickRecord[0]).parentElement.classList.add("cardRemove");
        document.getElementById(clickRecord[1]).parentElement.classList.add("cardRemove");
    },1500);

    playerPoints++;
    document.getElementById("timer-frame").getElementsByTagName("p")[1].textContent = "Player has " + playerPoints + " points";
}

function unflipWrongPair(clickRecord) {     //flips incorrectly paired cards back over
    setTimeout(function(){
        document.getElementById(clickRecord[0]).parentElement.classList.remove("flipCard");
        document.getElementById(clickRecord[1]).parentElement.classList.remove("flipCard");
    },1500);
}
//-------------------------------------------------------------------------
function createRNG(cardNumber){     // generates total indexes needed and a random list to index with
    for(i=((cardNumber*2)); i>0; i-- ){
        rNG.push(Math.floor((Math.random()*i))); //adds random number at end of array     
        rNG.unshift(i-1);       //adds index list at beginning of array
    }
}
//-------------------------------------------------------------------------
function makeCardFunctional(index, cardNumber, target){     // gives cards functionality by adding index numbers, words, and makes card flipable
        var rngIndex = null;
        createParagraph = document.createElement("p");      //creates text node
        rngIndex = rNG.splice((rNG[index + (cardNumber*2)]), 1);    // uses random index call to splice out availiable card index and places it in variable

    if (rngIndex < cardNumber){ // makes a unique card id and a matching pair id and creates word for text node
        target.firstChild.id = "cardId-" + index + "-" + rngIndex;
        ParagraphNode = document.createTextNode(words[rngIndex]);
    } else {
        target.firstChild.id = "cardId-" + index + "-" + (rngIndex-cardNumber);
        ParagraphNode = document.createTextNode(fLanguage[globalLanguage][rngIndex-cardNumber]);
    }

    createParagraph.appendChild(ParagraphNode);
    target.lastChild.appendChild(createParagraph);      //adds word to card

    target.firstChild.onclick = function() {        //makes cards flippable
        if( this.parentElement.parentElement.getElementsByClassName("cardRemove")[0] === undefined && timeDelay === null){
            this.parentElement.classList.add("flipCard");
            clickRecord.push(this.id);
        }
    }
}

function constructCard (cardNumber, classValues, className=null, isCardBack = false){         //Creates the cards
    for (index = 0; index < cardNumber*2; index++){
        var CardContainer = document.getElementById("game");
        var cardInternal = document.getElementsByClassName(className)[index];
        var setClasses = document.createAttribute("class");
        setClasses.value = classValues;

        if (className === null){ //card container
            CardContainer.appendChild(document.createElement("div")).setAttributeNode(setClasses);
            continue;
        }

        cardInternal.appendChild(document.createElement("div")).setAttributeNode(setClasses) //adds elements for cardRotate cardFace and cardBack
        
        if (isCardBack){        //calls word adding function
            makeCardFunctional(index, cardNumber, cardInternal);
        }
    }
}

function checkCardPair() {                //flips cards over and removes matching pairs
    if (clickRecord.length === 2){
        var selectedCardIds = [];
        var match;
        timeDelay = 1;

        setTimeout(function() {
            timeDelay = null;
        }, globalDifficulty);

        for (i=0; i<2; i++){    //check matching pair
            match = parseInt((clickRecord[i]).split("-")[2]);
            selectedCardIds.unshift(match);
        }
        
        if (selectedCardIds[0] === selectedCardIds[1]){
            console.log("You have the shot! Take the shot!!")
            removingCorrectPair(clickRecord);
            clickRecord = [];
        } else {
            unflipWrongPair(clickRecord);
            clickRecord = [];
        }
    }
}

document.onclick = function() {         //allows game to track user clicks
   checkCardPair(); 
} 

document.getElementById("play").onclick = function() {  //allows game to start by clicking start button
    startGame();
}

function startGame() {      //---------------------------------------collect user selected information---------------------------------------------
    startButton = document.getElementById("start-screen").getElementsByTagName("option");
    var userSelection = [];
    
    for(i=0; i<((startButton.length)); i++){ //gets user selection and parse into Int
        if(startButton[i].selected && userSelection.length === 3){
            userSelection.push(startButton[i].value);     //pull selected string
        } else if( startButton[i].selected) {
           userSelection.push(parseInt(startButton[i].value));     //pull selected number(int)
        }
    }

    populateGame(userSelection[0],userSelection[1],userSelection[2],userSelection[3])
}

function populateGame(difficulty, numberOfCards, time, language ) {      //creates game for play by using user selections 
    globalLanguage = language;
    globalDifficulty = difficulty;
    createRNG(numberOfCards);//-------------------------------------RNG---------------------------------------------------------    
    constructCard(numberOfCards, "col-3 col-md-2 card-frame ml-3");  //container
    constructCard(numberOfCards, "row no-gutters middle cardRotate", "col-3"); //cardRotate
    constructCard(numberOfCards, "col-12 card cardFace", "middle");     //cardFace
    constructCard(numberOfCards, "col-12 card cardBack", "middle", true);     //cardBack
    MaxPlayerPoints = numberOfCards;
    gameHeader(2);
    timer((time*60000)+1000); //change time into minutes and add 1 second so user sees full time minute value
}

function timer(time) {  //in game round timer
    var setTimeElement = document.getElementById("timer-frame").getElementsByTagName("p")[0];
    
    setTimeout(function() {
        time -= 1000;
        setTimeElement.textContent = "Time remainging is " + Math.floor(time / 60000)  + " minute(s) and " + (time%60000)/1000 + " second(s)"; //changes time into a user display with minutes and seconds
        
        if(MaxPlayerPoints === playerPoints) { //win condition
            gameHeader(3)
            return;
        } else if(time === 0 ){ //lose condition
            gameHeader(4);
            return;
        }

        timer(time);
    },1000)
}

function hideTimer(targetP, targetH1) {     //hides timer and allows header to be seen
    targetP[0].classList.add("hiddenEl");
    targetP[1].classList.add("hiddenEl");
    targetH1.classList.remove("hiddenEl");
}

function restartGame() {        //start reset screen the flashing before game start screen runs
    var targetGame  = document.getElementById("game").getElementsByClassName("card-frame");
    var totalLength = targetGame.length;
    
    setTimeout(function(){
        for (i=0; i < totalLength; i++){
            targetGame[0].remove();
        }

        playerPoints = 0;
            document.getElementById("timer-frame").getElementsByTagName("p")[0].textContent = "Timer will start shortly";
            document.getElementById("timer-frame").getElementsByTagName("p")[1].textContent = "Player has 0 points";
        gameHeader(1);
    }, 4000);
}

function gameHeader (condition) { // 1-gamestartscreen ----- 2-gameplayscreen ------ 3-game win ------- 4-game lose //-----changes header and game start visibility
    var targetP = document.getElementById("timer-frame").getElementsByTagName("p");
    var targetH1 = document.getElementById("timer-frame").getElementsByTagName("h1")[0];
    var targetStart = document.getElementById("start-screen")
    rNG = [];   // dumps RNG (random number generator) memory-----------------------------------------------------------------------------
    
    if(condition === 1){
        hideTimer(targetP, targetH1);
        targetH1.textContent = "Romancing The Cards";
        targetStart.classList.remove("hiddenEl");
    } else if (condition === 2){
        targetP[0].classList.remove("hiddenEl");
        targetP[1].classList.remove("hiddenEl");
        targetH1.classList.add("hiddenEl");
        targetStart.classList.add("hiddenEl");
    } else if (condition === 3){
        hideTimer(targetP, targetH1);
        targetH1.textContent = "You Win!";
        restartGame();
    } else if (condition === 4){
        hideTimer(targetP, targetH1);
        targetH1.textContent = "You Lose!";
        restartGame();   
    }
}