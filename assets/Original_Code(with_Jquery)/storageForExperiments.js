$(document).ready(function() {        // flips card and hides/reveals text
    $(".card-frame").click(function() {  
        $(this).slideToggle("slow", function() {
        
            if ($(this).hasClass("card-img-even")) {        //flip illusion to even cards
                $(this).addClass("even").removeClass("card-img-even");
                $(this).children().children().removeClass("invisible");
            } else if ($(this).hasClass("even")) {
                $(this).addClass("card-img-even").removeClass("even");
                $(this).children().children().addClass("invisible");  
            }
        
            if ($(this).hasClass("card-img-odd")) {         //flip illusion to odd cards
                $(this).addClass("odd").removeClass("card-img-odd");
                $(this).children().children().removeClass("invisible");
            } else if ($(this).hasClass("odd")) {
                $(this).addClass("card-img-odd").removeClass("odd");
                $(this).children().children().addClass("invisible");  
            }
            
        $(this).slideToggle();
        });

    });

});



         //else if ($(this).hasClass("card-img-even") && !$(this).hasClass("card-matched")) {        //flip illusion to even cards
//            $(this).slideToggle("slow", function() {
  //              $(this).addClass("even").removeClass("card-img-even");
    //            $(this).children().children().removeClass("invisible");
//                $(this).slideToggle();
                                    //     console.log($(this) + "flip even");
//        });
  //      } else if ($(this).hasClass("card-img-odd") && (!$(this).hasClass("card-matched"))) {         //flip illusion to odd cards
    //        $(this).slideToggle("slow", function () {
//                $(this).addClass("odd").removeClass("card-img-odd");
  //              $(this).children().children().removeClass("invisible");
    //            $(this).slideToggle();
                                      //  console.log($(this) + "flip odd");
  //          });
//        } 





//-----------------------------------------------------------




 //       if (gameMatchingPair == 2) {
   //         $("#card-board").filter("chosen")
     //       $("div:contains('chosen')") ///looks for chosen //
       // }


//       for (cardUniqueLabel = 0; cardUniqueLabel < cardCount + cardCount; cardUniqueLabel++ ) {
  //          if ($("div:[class$='cardCount']"))
    //    }


                    if ($().hasClass("even")) {
                        console.log("even");
                    $(this).addClass("card-img-even").removeClass("even");
                    $(this).children().children().addClass("invisible");  
                } else if ($(this).hasClass("odd")) {
                        console.log("odd");
                    $(this).addClass("card-img-odd").removeClass("odd");
                    $(this).children().children().addClass("invisible");  
                }


///----selection grabber

    $(".start-screen option:selected").each(function() {
        mode1 = $(this).text();
        $(".start-button").append(mode1);

        ////-------------------------------- start expeiment
$("#mode").change(function() { // arrays users settings
    var playerModeSelection = "";
    // {[0]mode, [1]difficulty, [2]#cards, [3]language, [4]time }
    $(".start-screen option:selected").each(function() {
        playerModeSelection = $(this).index();
        $(".start-button").append(playerModeSelection);
    });
})
//----------------------------------   end experiment


//--------------------------------original start fill

$(document).ready(function() {  //start creation ready for card population and background adding
  //  var cardCount;              //helps count total cards
    var cardUniqueLabel = 0;    //creates unique labels for cards

    cardCount = $(".card-frame").length;                                                                    //counts amount of card-frames for numbering
    maxPoints = cardCount;
    
    $(".card-frame").first().children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-Id-"+cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel]);       //labels start div card-text-* 
    $(".card-frame").first().addClass("ml-3");                                                                          //labels start div for space (margin)

    for (cardUniqueLabel = 1; cardUniqueLabel < cardCount; cardUniqueLabel++ ) {                                         //labels divs for remaining card-text-*
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-Id-"+cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel]);  //adds card specific targets and text spacing
        $("div[class*='card-text-']").last().parent().parent().addClass("ml-3");                                        //spaces (margins) cards
    }

     for (cardUniqueLabel = cardCount; cardUniqueLabel < cardCount + cardCount; cardUniqueLabel++ ) {                   //creates pair for matching
        $("#game-board").append("<div class='col-3 col-md-2 card-frame'><div class='row no-gutters'><div class='col-12'><span></span></div></div></div>");
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + (cardUniqueLabel - cardCount)).addClass("card-Id-"+cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel - cardCount]);  //adds card specific targets and text spacing
        $("div[class*='card-text-']").last().parent().parent().addClass("ml-3");                                        //spaces (margins) cards
     }
    
    $(".card-frame").odd().addClass("card-img-odd");                                                                    //adds background to odd cards
    $(".card-frame").even().addClass("card-img-even");                                                                  //adds background to even cards

    timerPerRound (120000); //calls timer and sets time

    startScreen();

    $("#mode").change(function() { // arrays users settings
        var playerModeSelection = "";
        // {[0]mode, [1]difficulty, [2]#cards, [3]language, [4]time }
        $(".start-screen option:selected").each(function() {
            playerModeSelection = $(this).index();
            $(".start-button").append(playerModeSelection);
        });
    })


});                             //end creation ready DONT FORGET Event Delegation



//----;---------------------------populate screen with cards------------------------------------
function cardPopulate (cardCount = 5, timeOnClock = 60000) {  //start creation ready for card population and background adding
  //  var cardCount;              //helps count total cards
    var cardUniqueLabel = 0;    //creates unique labels for cards

    
    //cardCount = $(".card-frame").length;                                                                    //counts amount of card-frames for numbering
    maxPoints = cardCount;


    $(".card-frame").first().children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-Id-"+cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel]);       //labels start div card-text-* 
    $(".card-frame").first().addClass("ml-3");                                                                          //labels start div for space (margin)

    for (cardUniqueLabel = 1; cardUniqueLabel < cardCount; cardUniqueLabel++ ) {                                         //labels divs for remaining card-text-*
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-Id-"+cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel]);  //adds card specific targets and text spacing
        $("div[class*='card-text-']").last().parent().parent().addClass("ml-3");                                        //spaces (margins) cards
    }

     for (cardUniqueLabel = cardCount; cardUniqueLabel < cardCount + cardCount; cardUniqueLabel++ ) {                   //creates pair for matching
        $("#game-board").append("<div class='col-3 col-md-2 card-frame'><div class='row no-gutters'><div class='col-12'><span></span></div></div></div>");
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + (cardUniqueLabel - cardCount)).addClass("card-Id-"+cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel - cardCount]);  //adds card specific targets and text spacing
        $("div[class*='card-text-']").last().parent().parent().addClass("ml-3");                                        //spaces (margins) cards
     }
    
    $(".card-frame").odd().addClass("card-img-odd");                                                                    //adds background to odd cards
    $(".card-frame").even().addClass("card-img-even");                                                                  //adds background to even cards

    timerPerRound (timeOnClock); //calls timer and sets time

    startScreen();

    $("#mode").change(function() { // arrays users settings
        var playerModeSelection = "";
        // {[0]mode, [1]difficulty, [2]#cards, [3]language, [4]time }
        $(".start-screen option:selected").each(function() {
            playerModeSelection = $(this).index();
            $(".start-button").append(playerModeSelection);
        });

    })


};                             //end creation ready DONT FORGET Event Delegation



    $("#mode").change(function() { // arrays users settings
        var playerModeSelection = [];
        // {[0]mode, [1]difficulty, [2]#cards, [3]language, [4]time }
        $(".start-screen option:selected").each(function() {
            playerModeSelection.push($(this).index());
            //playerModeSelection = $(this).index();
            $(".start-button").append(playerModeSelection);
        });

    })



    $(".start-button").click(function() {

 //   $("#mode").change(function() {                                                // arrays users settings
        // {[0]mode, [1]difficulty, [2]#cards, [3]language, [4]time }
        $(".start-screen option:selected").each(function() {
            playerModeSelection.push($(this).index());
//            playerModeSelection += $(this).index();
            $(".start-button").append(playerModeSelection);
        });

    })




    //---------------------------------------------entire save-------------------------------------


    // -------------------------- Objects, Arrays, and Functions ----------------------
//-------------------------set arrays
let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];

// --------------------   global variables for functions
var userInput = null;
//var roundTimer = 500;
var viewClock;
var mode; 
var difficulty = [[easy],[medium],[hard]]; 
var language; 
var timeOnClock;
var cardCount;

//------------------------------------------------- card flipping and card match functions
function flipEven(idNumber) {      //flips even cards face up
    $(".card-Id-"+idNumber).parent().parent() 
        .slideToggle(200, function() {
            $(this)
                .addClass("even")
                .addClass("clicked")
                .removeClass("card-img-even")
                .addClass("faceUp")
                .children()
                .children()
                .removeClass("invisible")
        })
    .slideToggle(200);
}

function flipOdd(idNumber) {       //flips odd cards face up
    $(".card-Id-"+idNumber).parent().parent() 
        .slideToggle(200, function() {
            $(this)
                .addClass("odd")
                .addClass("clicked")
                .removeClass("card-img-odd")
                .addClass("faceUp")
                .children()
                .children()
                .removeClass("invisible")
        })
    .slideToggle(200);
}

function coverEven(idNumber) {     //flips even cards face down
    setTimeout(function() {
        $(".card-Id-"+idNumber).parent().parent() 
            .slideToggle(500, function() {
                $(this)
                    .removeClass("even")
                    .removeClass("clicked")
                    .addClass("card-img-even")
                    .removeClass("faceUp")
                    .children()
                    .children()
                    .addClass("invisible")
            })
        .slideToggle(500);
    },750)
}

function coverOdd(idNumber) {  //flips odd cards face down
    setTimeout(function() {
        $(".card-Id-"+idNumber).parent().parent() 
            .slideToggle(500, function() {
                $(this)
                    .removeClass("odd")
                    .removeClass("clicked")
                    .addClass("card-img-odd")
                    .removeClass("faceUp")
                    .children()
                    .children()
                    .addClass("invisible")
            })
        .slideToggle(500);
    },750)

}

function matchedPair (idNumber){   //fades out matched cards
    $(".card-Id-"+idNumber).parent().parent()
        .animate({
            opacity: 0
        }, 200)
    .addClass("card-matched");
}

function timeDelay (idNumber) {    //delays to prevent instant card disappear
    setTimeout(function() {
        matchedPair(idNumber)
    },500)
}

//--------------------------------------------------- creates and runs timer
function timerPerRound (timeRemaining) { //Round timer
    var seconds = 0
    var minutes = 0
   // roundTimer = timeRemaining
   var timeRemaining;
    $(".timer-frame h1").css("display", "none");

    setTimeout(function() {

        
        seconds = ((timeRemaining % 60000) / 1000)
        minutes = Math.floor(timeRemaining / 60000)
        
        if (timeRemaining <= -1 ){  //timer lose condition 
            $(".timer-frame")
                .children()
                .first()
                .text("Your Time is up!!");

            gameOver();

            setTimeout(function() {        
                $("#game-over").children().text("You Lose!");
                $("#game-over").css("display", "block").css("z-index", "1");
            },500);

            setTimeout(function() {
                $("#game-over").css("display", "none").css("z-index", "0");
                $(".start-screen")
                    .css("display", "block")
                    .css("z-index", "1");
                timerReset();
                },5000);
            return;

        } else {                //timer continue condition
            $(".timer-frame")
                .children()
                .first()
                .text("You have " + minutes + " minutes and " + seconds + " seconds remaining")
        }
        if (playerPoints === cardCount) {

            gameOver();

            setTimeout(function() {        
                $("#game-over").children().text("You Win!");
                $("#game-over").css("display", "block").css("z-index", "1");
            },500);

            setTimeout(function() {
                $("#game-over").css("display", "none").css("z-index", "0");
                $(".start-screen")
                    .css("display", "block")
                    .css("z-index", "1");
                    timerReset();
                },5000);
                
            return;

        }
        timeRemaining = timeRemaining - 1000
        timerPerRound(timeRemaining);
    },1000)
    
}

function playerScored(){
    playerPoints++
    $(".timer-frame").children().last().text("Player has "+ playerPoints  +" Point(s)");
    if (playerPoints === cardCount) {
            $(".timer-frame").children().last().text("Player wins against timer!!");
    }
}

function resetRound (){ // ------------resets values between selection pairs
    gameMatchingPair = 0   
    chosenIndex1 = null
    chosenIndex2 = null
    chosenId1 = null
    chosenId2 = null;
}

//-------------------------------- start screen modal-----------------------------------

function startScreen (mode= 0, difficulty = 0, numberCards=0, language=0, timeOnClock=0) {
    var screenHeight;

    $(".timer-frame h1").text("Romancing The Cards") //header

    $("#game-board").prev().addClass("start-screen") 
    $(".start-screen")
    .css("display", "block")
    .append("<p>Game Mode</p>") //all
    .append("<select id='mode'><option value='1'>Campaign</option><option value='2'>Quick</option><option value='3' selected='selected'>Custom</option></select>")  //select
    .append("<p>Difficulty</p>")  //for quick
    .append("<select id='difficulty'><option value='1' selected='selected'>Easy</option><option value='2' disabled>Medium</option><option value='3' disabled>Hard</option></select>") //select
    .append("<p>Number Of Pairs</p>") //custom
    .append("<select id='numberCards'><option value='5'>5</option><option value='10' selected='selected'>10</option><option value='15'>15</option></select>")//select
    .append("<p>Language</p>")  //all
    .append("<select id='language'><option value='1'>English</option><option value='2' disabled>Spanish</option><option value='3' disabled>Portuguese</option><option value='4' disabled>French</option><option value='5' disabled>Italian</option><option value='6' disabled>Romanian</option></select>")//select
    .append("<p>Time On Clock</p>")  //custom
    .append("<select id='timeOnClock'><option value='1'>1 minute</option><option value='2' selected='selected'>2 minutes</option><option value='3'>3 minutes</option><option value='4'>4 minutes</option><option value='5'>5 minutes</option></select>")//select
    $(".start-screen").children().filter("p").addClass("start-screen-description")
    $(".start-screen").children().filter("select").addClass("start-screen-choice")
    $(".start-screen").append("<button class='start-button'>Start Game</button>");

    // ----- https://developer.mozilla.org/en-US/docs/Web/API/Document/height MDN height
    screenHeight = document.documentElement.scrollHeight;       // makes background take up entire screen
    $(".playing-board").css("min-height", screenHeight);

    $(".start-button").mouseenter(function() {
        $(this).addClass("start-button-hover");
    });

    $(".start-button").mouseleave(function() {
        $(this).removeClass("start-button-hover");
    });

//---------------------selection option logic --------------

//----------------jquery  https://api.jquery.com/selected-selector/
$("#mode").change(function() {
    var  showme = "";
    var showMeArray = [];
    $("select option:selected").each(function(){
        showme += $(this).text() + " ";
    });
    showMeArray = showme.split(" ");
//    console.log(showme);
  //  console.log(showMeArray[0]);
})
.trigger("change");











//-------------------end selectoion option logic
    $(".start-button").click(function() {  
    // {[0]mode, [1]difficulty, [2]#cards, [3]language, [4]time }
        $(".start-screen option:selected").each(function() {
            playerModeSelection.push($(this).index());
        });
            if (newGamePlus === 0){
                cardPopulate();
                playGame();
                newGamePlus = 1;
            } else {
                cardPopulate();
            }
    });


}

//----;---------------------------populate screen with cards------------------------------------

function cardPopulate () {  //start creation ready for card population and background adding
    var cardUniqueLabel = 0;    //creates unique labels for cards

    cardCount = (playerModeSelection[2] +1) *5;
 //   timeOnClock = (playerModeSelection[4]+1 )*60000;
    console.log(timeOnClock);
//    console.log(playerModeSelection[2]);
    maxPoints = cardCount;

    $(".start-screen")
        .css("display", "none")
        .css("z-index", "0");

    $("#game-board")    //------------   Creates initial 0 index 
        .append("<div class='col-3 col-md-2 card-frame'><div class='row no-gutters'><div class='col-12'><span></span></div></div></div>")
        .children()
        .addClass("ml-3")
        .children()
        .children()
        .addClass("card-text-" + cardUniqueLabel)
        .addClass("card-Id-"+cardUniqueLabel)
        .addClass("card-word")
        .addClass("invisible")
        .text(words[cardUniqueLabel]);       //labels start div card-text-* 

    for (cardUniqueLabel = 1; cardUniqueLabel < cardCount; cardUniqueLabel++ ) { //labels divs for  first half of cards card-text-*
        $("#game-board").append("<div class='col-3 col-md-2 card-frame'><div class='row no-gutters'><div class='col-12'><span></span></div></div></div>");
        $("div[class*='card-text-']")
            .last()
            .parent()
            .parent()
            .next("div")
            .addClass("ml-3")           //spaces (margins) cards
            .children()
            .children()
            .addClass("card-text-" + cardUniqueLabel)
            .addClass("card-Id-"+cardUniqueLabel)
            .addClass("card-word")
            .addClass("invisible")
            .text(words[cardUniqueLabel]);  //adds card specific targets and text spacing                             
    }

     for (cardUniqueLabel = cardCount; cardUniqueLabel < cardCount + cardCount; cardUniqueLabel++ ) {                   //creates pair for matching
        $("#game-board").append("<div class='col-3 col-md-2 card-frame'><div class='row no-gutters'><div class='col-12'><span></span></div></div></div>");
        $("div[class*='card-text-']")
        .last()
        .parent()
        .parent()
        .next("div")
        .addClass("ml-3")                 //spaces (margins) cards
        .children()
        .children()
        .addClass("card-text-" + (cardUniqueLabel - cardCount))
        .addClass("card-Id-"+cardUniqueLabel)
        .addClass("card-word")
        .addClass("invisible")
        .text(words[cardUniqueLabel - cardCount]);  //adds card specific targets and text spacing                            
    }
    
    $(".card-frame").odd().addClass("card-img-odd");                                                                    //adds background to odd cards
    $(".card-frame").even().addClass("card-img-even");                                                                  //adds background to even cards

    timerPerRound((playerModeSelection[4]+1 )*60000); //experiment
   // timerPerRound (timeOnClock); //calls timer and sets time
}

function playGame() {

    $(document).on("click", ".card-frame", function() {
        if(gameMatchingPair === 0 && !$(this).hasClass("card-matched")) {
            chosenIndex1 = $(this).index(); // catches index where click is
            chosenId1 = chosenIndex1;       
            gameMatchingPair++;
        } else if (gameMatchingPair === 1 && chosenId1 !== $(this).index() && !$(this).hasClass("card-matched")) { // prevents same selections
            chosenIndex2 = $(this).index();
            chosenId2 = chosenIndex2;
            gameMatchingPair++;
        }

        console.log("click"); // Error testing and console readability  

        if ($(this).hasClass("card-img-even") && (!$(this).hasClass("clicked"))) {
            flipEven ($(this).index());
        } else if ($(this).hasClass("card-img-odd") && !$(this).hasClass("clicked")) {
            flipOdd ($(this).index());
        }

        if (gameMatchingPair === 2) {
            if(chosenIndex1 >= cardCount){     //makes chosenIndex's comparable for matching
                chosenIndex1 = chosenIndex1 - cardCount;
            } else if (chosenIndex2 >= cardCount) {
                chosenIndex2 = chosenIndex2 -cardCount;
            }

            if(chosenIndex1 === chosenIndex2) {     //removes correct cards and reflips wrong
                timeDelay(chosenId1);
                timeDelay(chosenId2);
                playerScored();
            } else {

                    if (chosenId1 % 2 === 0) {
                        coverEven(chosenId1);
                    } else {
                        coverOdd(chosenId1);
                    }
                    if (chosenId2 % 2 === 0) {
                        coverEven(chosenId2);
                    } else {
                        coverOdd(chosenId2);
                    }
            }
            
            resetRound() //removes user input per round

        } 



    }); //closes click


//----------------------add return


}   // end function playGame

 function timerReset() {
    $(".timer-frame")
        .children()
        .last()
        .text("Timer will start shortly");
 }


//----------------------------------remove cards from game (restart)

function gameOver() {
    $("#game-board").children().remove("div");
    maxPoints = 0;
    playerPoints = 0;
    gameMatchingPair = 0;
    cardCount = 0;
}





//------------------------- ideas for objects
var cardFrame = {

};

var cardText = {

};

var cardEasy = {
    height: "7rem",
};

var cardMedium = {

};

var cardDifficult = {

};



//------------------------------------------endc entire save------------------------------------


function insertWord(index, card){     //inserts a word on each cardBack
    var loc2 = document.getElementsByClassName("cardBack")[index];
    para = document.createElement("p");
    node1 = document.createTextNode(words[index]);
    para.appendChild(node1);
    loc2.appendChild(para);
}

function createCardIdAndMakeFlip(index, cardNumber, target) {      //creates a card ID for unique card selection, a matching pair id, makes card flipable
    if (index < cardNumber){ // makes a unique card id and a matching pair id
        target.firstChild.id = "cardId-" + index + "-" + index;
    } else {
        target.firstChild.id = "cardId-" + index + "-" + (index-cardNumber);
    }

    target.firstChild.onclick = function() {        //makes cards flippable
        this.parentElement.classList.add("flipCard");
        clickRecord.push(this.id);
    }
}
//----------------------------------------------------------------------------------




function constructCard (cardNumber, classValues, className=null, matchingPair = 0)
for (index = 0; index < cardNumber*2; index++)

var CardContainer = document.getElementById("game");
var CardInternal = document.getElementsByClassName(className)[index];
var setClasses = document.createAttribute("class");
setClasses.value = classValues;

if (className === null){
CardContainer.appendChild(document.createElement("div")).setAttributeNode(setClass);
continue
}
if (i<cardNumber){
cardInternal.appendChild(document.createElement("div")).setAttributeNode(setClass)
}

makeInnerLayer(5, "col-3 col-md-2 card-frame ml-3");
makeInnerLayers(10, "row no-gutters middle cardRotate", "col-3"); 
makeInnerLayers(10, "col-12 card cardFace", "middle", 1); 
makeInnerLayers(10, "col-12 card cardBack", "middle", 1); 





function makeInnerLayers(cardNumber, className, classValues, classTarget = null){
    for (i=0; i<cardNumber; i++){  
        var loc1 = document.getElementsByClassName(className)[i];                       //creates parent target
        var class1 = document.createAttribute("class");                                 //creates a empty variable to place
        class1.value = classValues;                                                     //adds value to empty class
        loc1.appendChild(document.createElement("div")).setAttributeNode(class1);       //creates div with class
        
        if(classValues === "col-12 card cardBack"){
            insertWord(i)
        } else if (classValues === "col-12 card cardFace"){
            var loc2 = document.getElementsByClassName("col-12 card cardFace")[i];
            loc2.id = "card-Id-" + i 
        }
    }
}

function makeCardsOuter(cardNumber, matchingPair = 0){

    for (i=0; i<cardNumber + cardNumber; i++){  
        var loc1 = document.getElementById("game");                                     //creates parent target
        var class1 = document.createAttribute("class");                                 //creates a empty variable to place
        class1.value = "col-3 col-md-2 card-frame ml-3";                                //adds value to empty class
        loc1.appendChild(document.createElement("div")).setAttributeNode(class1);       //creates div with class
        var loc2 = document.getElementById("game").getElementsByTagName("div")[i];      //creates location to add class to
      //  loc2.id = "card-Id-" + i;                                                       //creates class to add 

        if ( i >= cardNumber){                                                          //labels cards for matching pairs
            loc2.className += " card-text-" + matchingPair;
            matchingPair++
        } else {
            loc2.className += " card-text-" + i;
        }
    };        
}

makeCardsOuter(5);                                                      //makes outside frame for card
makeInnerLayers(10, "col-3", "row no-gutters middle cardRotate");                   //makes middle layer of card
makeInnerLayers(10, "middle", "col-12 card cardFace", 1);          //makes inner most layer of card
makeInnerLayers(10, "middle", "col-12 card cardBack", 1);          //makes inner most layer of card




//let wordsEnglish = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"]; //english
//let wordsSpanish = ["ella", "Mira", "hora", "podría", "personas", "parte", "larga/largo", "hizo", "en", "ellas/ellos", "yo", "estas/estos", "dijo", "entonces", "número", "No", "si"]; //spanish
//let wordsPortuguese = ["ela", "Veja", "Tempo", "poderia", "pessoas", "parte", "longa/longo", "fez", "em", "eles", "Eu", "estes", "disse", "tão", "número", "não", "sim"]; //portuguese
//let wordsFrench = ["elle", "Regardez", "temps", "pourrait", "gens", "partie", "longue/long", "fait", "sur", "elles/ils", "je", "celles-ci/ceux-ci", "m'a dit", "alors", "nombre", "non", "Oui"];//french
//let wordsItalian = ["lei", "Guarda", "tempo", "poteva", "persone", "parte", "lunga/lungo", "fatta/fatto", "spora", "esse/essi", "io", "queste/questi", "disse", "così", "numero", "no", "sì"]; //italian
//let wordsGerman = ["sie", "aussenhen", "Zeit", "könnten", "Menschen", "Teil", "lange", "tat", "auf", "Sie", "ich", "diese", "sagte", "so", "Nummer", "Nein", "Ja"]; //german

