// -------------------------- Objects, Arrays, and Functions ----------------------

let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];

var userInput = null;

function flipEven(userInput) {
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).addClass("even").addClass("clicked").removeClass("card-img-even").addClass("faceUp").children().children().removeClass("invisible")
    })
    .slideToggle(200);
}

function flipOdd(userInput) {
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).addClass("odd").addClass("clicked").removeClass("card-img-odd").addClass("faceUp").children().children().removeClass("invisible")
    })
    .slideToggle(200);
}

function coverEven(userInput) {
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).removeClass("even").removeClass("clicked").addClass("card-img-even").removeClass("faceUp").children().children().addClass("invisible")
    })
    .slideToggle(200);
}

function coverOdd(userInput) {
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).removeClass("odd").removeClass("clicked").addClass("card-img-odd").removeClass("faceUp").children().children().addClass("invisible")
    })
    .slideToggle(200);
}

function matchedPair (userInput){
    $(".card-Id-"+userInput).parent().parent()
    .animate({
        opacity: 0
    }, 500)
    .addClass("card-matched");
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