// -------------------------- Objects, Arrays, and Functions ----------------------

let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];

var userInput = null;
var roundTimer = 500;
var viewClock;


function flipEven(userInput) {      //flips even cards face up
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).addClass("even").addClass("clicked").removeClass("card-img-even").addClass("faceUp").children().children().removeClass("invisible")
    })
    .slideToggle(200);
}

function flipOdd(userInput) {       //flips odd cards face up
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).addClass("odd").addClass("clicked").removeClass("card-img-odd").addClass("faceUp").children().children().removeClass("invisible")
    })
    .slideToggle(200);
}

function coverEven(userInput) {     //flips even cards face down
    setTimeout(function() {
        $(".card-Id-"+userInput).parent().parent() 
        .slideToggle(500, function() {
            $(this).removeClass("even").removeClass("clicked").addClass("card-img-even").removeClass("faceUp").children().children().addClass("invisible")
        })
        .slideToggle(500);
    },750)
}

function coverOdd(userInput) {  //flips odd cards face down
    setTimeout(function() {
        $(".card-Id-"+userInput).parent().parent() 
        .slideToggle(500, function() {
            $(this).removeClass("odd").removeClass("clicked").addClass("card-img-odd").removeClass("faceUp").children().children().addClass("invisible")
        })
        .slideToggle(500);
    },750)

}

function matchedPair (userInput){   //fades out matched cards
    $(".card-Id-"+userInput).parent().parent()
    .animate({
        opacity: 0
    }, 200)
    .addClass("card-matched");
}

function timeDelay (userInput) {    //delays to prevent instant card disappear
    setTimeout(function() {
        matchedPair(userInput)
    },500)
}

function timerPerRound (userInput) { //Round timer
    var seconds = 0
    var minutes = 0
    roundTimer = userInput

    setTimeout(function() {
        
        seconds = ((roundTimer % 60000) / 1000)
        minutes = Math.floor(roundTimer / 60000)
        
        if (roundTimer <= -1 ){  //timer done break
            return $(".timer-frame").children().first().text("Your Time is up!!")
        } else {
            $(".timer-frame").children().first().text("You have " + minutes + " minutes and " + seconds + " seconds remaining")
        }
        if (playerPoints === cardCount) {
            return;

        }
        roundTimer = roundTimer - 1000
        timerPerRound(roundTimer);
    },1000)
    
}

function playerScored(){
    playerPoints++
    $(".timer-frame").children().last().text("Player has "+ playerPoints  +" Point(s)");
    if (playerPoints === cardCount) {
            $(".timer-frame").children().last().text("Player wins against timer!!");

    }
}

function resetRound (){
    gameMatchingPair = 0   
    chosenIndex1 = null
    chosenIndex2 = null
    chosenId1 = null
    chosenId2 = null;
}

//-------------------------------- start modal-----------------------------------

function startScreen (mode= 0, difficulty = 0, numberCards=0, language=0, timeOnClock=0) {
    $("#game-board").prev().addClass("start-screen") 
    $(".start-screen")
    .css("display", "block")
    .append("<h1>Romancing The Cards</h1>") //header
    .append("<p>Game Mode(all)</p>")
    .append("<select id='mode'><option selected='selected'>Campaign</option><option>Quick</option><option>Custom</option></select>")  //select
    .append("<p>Difficulty(for quick)</p>")
    .append("<select id='difficulty'><option>Easy</option><option>Medium</option><option>Hard</option></select>") //select
    .append("<p>Number Of Cards(custom)</p>")
    .append("<select id='numberCards'><option>5</option><option>10</option><option>15</option></select>")//select
    .append("<p>Language(all)</p>")
    .append("<select id='language'><option>Spanish</option><option>Portuguese</option><option>French</option><option>Italian</option><option>Romanian</option></select>")//select
    .append("<p>Time On Clock(custom)</p>")
    .append("<select id='timeOnClock'><option>1 minute</option><option>2 minutes</option><option>3 minutes</option><option>4 minutes</option><option>5 minutes</option></select>")//select
    $(".start-screen").children().filter("p").addClass("start-screen-description")
    $(".start-screen").children().filter("select").addClass("start-screen-choice")
    $(".start-screen").append("<button class='start-button'>Start Game</button>")
    ;
}

//----;---------------------------populate screen------------------------------------
function cardPopulate (cardCount = 15, timeOnClock = 60000) {  //start creation ready for card population and background adding
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