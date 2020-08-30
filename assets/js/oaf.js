// -------------------------- Objects, Arrays, and Functions ----------------------
//-------------------------set arrays
let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];

// --------------------   global variables for functions
var userInput = null;
var roundTimer = 500;
var viewClock;
var mode; 
var difficulty = [[easy],[medium],[hard]]; 
var language; 
var timeOnClock;
var cardCount;


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
            return $(".timer-frame")
                .children()
                .first()
                .text("Your Time is up!!");
        } else {
            $(".timer-frame")
                .children()
                .first()
                .text("You have " + minutes + " minutes and " + seconds + " seconds remaining")
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

//-------------------------------- start screen modal-----------------------------------

function startScreen (mode= 0, difficulty = 0, numberCards=0, language=0, timeOnClock=0) {
    var screenHeight;

    $("#game-board").prev().addClass("start-screen") 
    $(".start-screen")
    .css("display", "block")
    .append("<h1>Romancing The Cards</h1>") //header
    .append("<p>Game Mode</p>") //all
    .append("<select id='mode'><option selected='selected' disabled>Campaign</option><option disabled>Quick</option><option disabled>Custom</option></select>")  //select
    .append("<p>Difficulty</p>")  //for quick
    .append("<select id='difficulty'><option disabled>Easy</option><option disabled>Medium</option><option disabled>Hard</option></select>") //select
    .append("<p>Number Of Pairs</p>") //custom
    .append("<select id='numberCards'><option>5</option><option>10</option><option>15</option></select>")//select
    .append("<p>Language</p>")  //all
    .append("<select id='language'><option>English</option><option disabled>Spanish</option><option disabled>Portuguese</option><option disabled>French</option><option disabled>Italian</option><option disabled>Romanian</option></select>")//select
    .append("<p>Time On Clock</p>")  //custom
    .append("<select id='timeOnClock'><option>1 minute</option><option selected='selected'>2 minutes</option><option>3 minutes</option><option>4 minutes</option><option>5 minutes</option></select>")//select
    $(".start-screen").children().filter("p").addClass("start-screen-description")
    $(".start-screen").children().filter("select").addClass("start-screen-choice")
    $(".start-screen").append("<button class='start-button'>Start Game</button>");
    
    screenHeight = document.documentElement.scrollHeight;       // makes background take up entire screen
    $(".playing-board").css("min-height", screenHeight);


    $(".start-button").mouseenter(function() {
        $(this).addClass("start-button-hover");
    });

    $(".start-button").mouseleave(function() {
        $(this).removeClass("start-button-hover");
    });

    $(".start-button").click(function() {  
    // {[0]mode, [1]difficulty, [2]#cards, [3]language, [4]time }
        $(".start-screen option:selected").each(function() {
            playerModeSelection.push($(this).index());
            $(".start-button").append(playerModeSelection);
        });

            cardPopulate();
            playGame();
    });



}

//----;---------------------------populate screen with cards------------------------------------

function cardPopulate ( timeOnClock = 60000) {  //start creation ready for card population and background adding
    var cardUniqueLabel = 0;    //creates unique labels for cards

    cardCount = (playerModeSelection[2] +1) *5;
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

    timerPerRound (timeOnClock); //calls timer and sets time
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


}







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