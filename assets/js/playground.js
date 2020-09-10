let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];
var clickRecord = [];   //two cards player currently selected
var playerPoints = 0;   //total matched pairs by player
var MaxPlayerPoints = 0; // pair from start screen for wingame
var rngArray = [];



function removingCorrectPair(clickRecord){
    setTimeout(function() {
        document.getElementById(clickRecord[0]).parentElement.classList.add("cardRemove");
        document.getElementById(clickRecord[1]).parentElement.classList.add("cardRemove");
    },2000);
    playerPoints++;
    document.getElementById("timer-frame").getElementsByTagName("p")[1].textContent = "Player has " + playerPoints + " points";
}

function unflipWrongPair(clickRecord) {
    setTimeout(function(){
        document.getElementById(clickRecord[0]).parentElement.classList.remove("flipCard");
        document.getElementById(clickRecord[1]).parentElement.classList.remove("flipCard");
    },2000);
}
//-------------------------------------------------------------------------
    var rngList = [];
    var indexList = [];
    var final = [];
    
function createRNG(cardNumber){
    for(i=0; i<cardNumber*2; i++){
            indexList.push(i);
    }
    for(i=((cardNumber*2)); i>0; i-- ){
        rngList.push(Math.floor((Math.random()*i)));
    }
}


//-------------------------------------------------------------------------
function makeCardFunctional(index, cardNumber, target){
        var rngIndex = 0;
        createParagraph = document.createElement("p");      //creates text node
        final.push(indexList.splice((rngList[index]), 1));        //pulls number from randomized list
        rngIndex = final[index];                                         //puts pulled RNG number into a variable

    if (rngIndex < cardNumber){ // makes a unique card id and a matching pair id and creates word for text node
        target.firstChild.id = "cardId-" + index + "-" + rngIndex;
        ParagraphNode = document.createTextNode(words[rngIndex]);
    } else {
        target.firstChild.id = "cardId-" + index + "-" + (rngIndex-cardNumber);
        ParagraphNode = document.createTextNode(words[rngIndex-cardNumber]);
    }
    createParagraph.appendChild(ParagraphNode);
    target.lastChild.appendChild(createParagraph);      //adds word to card

    target.firstChild.onclick = function() {        //makes cards flippable
        if( this.parentElement.parentElement.getElementsByClassName("cardRemove")[0] === undefined ){
            this.parentElement.classList.add("flipCard");
            clickRecord.push(this.id);
        }
    }
}
function constructCard (cardNumber, classValues, className=null, matchingPair = 0, isCardFace = false, isCardBack = false){         //Creates the cards
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

function checkCardPair() {                //finds ID #
    if (clickRecord.length === 2){
        var selectedCardIds = [];
        var match;
        for (i=0; i<2; i++){    //check matching pair
            match = clickRecord[i];
            match = parseInt(match.split("-")[2]);
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

document.onclick = function() {         //prints on mouse click
   checkCardPair(); 
} 

document.getElementById("play").onclick = function() {
    startGame();
}

function startGame() {      //---------------------------------------collect user selected information---------------------------------------------
    startButton = document.getElementById("start-screen").getElementsByTagName("option");
    var userSelection = [];
    for(i=0; i<startButton.length; i++){ //gets user selection and parse into Int
       if( startButton[i].selected) {
           userSelection.push(parseInt(startButton[i].value));
       }
    }
    populateGame(userSelection[0],userSelection[1],userSelection[2],userSelection[3],userSelection[4])
}

function populateGame(mode, difficulty, numberOfCards, language, time ) {      //create game for play
    createRNG(numberOfCards);//-------------------------------------RNG---------------------------------------------------------    
    constructCard(numberOfCards, "col-3 col-md-2 card-frame ml-3");  //container
    constructCard(numberOfCards, "row no-gutters middle cardRotate", "col-3"); //cardRotate
    constructCard(numberOfCards, "col-12 card cardFace", "middle", 1, true);     //cardFace
    constructCard(numberOfCards, "col-12 card cardBack", "middle", 1, false, true);     //cardBack
    MaxPlayerPoints = numberOfCards;
    gameHeader(2);
    timer((time*60000)+1000); //change time into minutes and add 1 second so user sees full time minute value
}

function timer(time) {
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

function hideTimer(targetP, targetH1) {
    targetP[0].classList.add("hiddenEl");
    targetP[1].classList.add("hiddenEl");
    targetH1.classList.remove("hiddenEl");
}

function restartGame() {
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

function gameHeader (condition) { // 1-gamestartscreen ----- 2-gameplayscreen ------ 3-game win ------- 4-game lose
    var targetP = document.getElementById("timer-frame").getElementsByTagName("p");
    var targetH1 = document.getElementById("timer-frame").getElementsByTagName("h1")[0];
    var targetStart = document.getElementById("start-screen")
     rngList = [];
     indexList = [];
     final = []; 
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


