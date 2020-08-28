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
        
        roundTimer = roundTimer - 1000
        timerPerRound(roundTimer);
    },1000)
    
}

function resetRound (){
    gameMatchingPair = 0   
    chosenIndex1 = null
    chosenIndex2 = null
    chosenId1 = null
    chosenId2 = null;
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