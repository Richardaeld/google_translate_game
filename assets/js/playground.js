let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];
var clickRecord = [];   //two cards player currently selected
var playerPoints = 0;   //total matched pairs by player
var MaxPlayerPoints = 0; // pair from start screen for wingame


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

function makeCardFunctional(index, cardNumber, target){
        createParagraph = document.createElement("p");
    if (index < cardNumber){ // makes a unique card id and a matching pair id and creates word for text node
        target.firstChild.id = "cardId-" + index + "-" + index;
        ParagraphNode = document.createTextNode(words[index]);
    } else {
        target.firstChild.id = "cardId-" + index + "-" + (index-cardNumber);
        ParagraphNode = document.createTextNode(words[index-cardNumber]);
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

//constructCard(5, "col-3 col-md-2 card-frame ml-3");  //container
//constructCard(5, "row no-gutters middle cardRotate", "col-3"); //cardRotate
//constructCard(5, "col-12 card cardFace", "middle", 1, true);     //cardFace
//constructCard(5, "col-12 card cardBack", "middle", 1, false, true);     //cardBack

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

function startGame() {      //collect user selected information
    startButton = document.getElementById("start-screen").getElementsByTagName("option");
    var userSelection = [];
    for(i=0; i<startButton.length; i++){
       if( startButton[i].selected) {
           userSelection.push(parseInt(startButton[i].value));
       }
    }
    console.log(userSelection);
    populateGame(userSelection[0],userSelection[1],userSelection[2],userSelection[3],userSelection[4])
    document.getElementById("timer-frame").getElementsByTagName("h1")[0].setAttribute("style", "display: none");
}

function populateGame(mode, difficulty, numberOfCards, language, time ) {      //create game for play
    constructCard(numberOfCards, "col-3 col-md-2 card-frame ml-3");  //container
    constructCard(numberOfCards, "row no-gutters middle cardRotate", "col-3"); //cardRotate
    constructCard(numberOfCards, "col-12 card cardFace", "middle", 1, true);     //cardFace
    constructCard(numberOfCards, "col-12 card cardBack", "middle", 1, false, true);     //cardBack

    document.getElementById("timer-frame").getElementsByTagName("p")[0].classList.remove("hiddenEl");
    document.getElementById("timer-frame").getElementsByTagName("p")[1].classList.remove("hiddenEl");
    document.getElementById("start-screen").classList.add("hiddenEl");

    console.log(numberOfCards[2]);
    timer(parseInt((time)*60000)+1000);
}

function timer(time) {
    var setTimeElement = document.getElementById("timer-frame").getElementsByTagName("p")[0];
    setTimeout(function() {
        time -= 1000;
        setTimeElement.textContent = "Time remainging is " + Math.floor(time / 60000)  + " minute(s) and " + (time%60000)/1000 + " second(s)";
        console.log(time/1000);
        if(time === 0 ) { //lose condition
            return;
        }
        timer(time);
    },1000)

}