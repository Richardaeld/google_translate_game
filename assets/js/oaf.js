let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];

var userInput = null;

function flipEven(userInput) {
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).addClass("even").removeClass("card-img-even").children().children().removeClass("invisible")
    })
    .slideToggle(1000);
}

function flipOdd(userInput) {
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).addClass("odd").removeClass("card-img-odd").children().children().removeClass("invisible")
    })
    .slideToggle(1000);
}

function coverEven(userInput) {
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).removeClass("even").addClass("card-img-even").children().children().addClass("invisible")
    })
    .slideToggle(1000);
}

function coverOdd(userInput) {
    $(".card-Id-"+userInput).parent().parent() 
    .slideToggle(200, function() {
        $(this).removeClass("odd").addClass("card-img-odd").children().children().addClass("invisible")
    })
    .slideToggle(1000);
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