let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];

function flipEven() {
    $(".card-text-12").parent().parent() 
    .slideToggle(2000, function() {
        $(this).addClass("even").removeClass("card-img-even").children().children().removeClass("invisible")
    })
    .slideToggle("slow");
}

function flipOdd() {
    $(".card-text-13").parent().parent() 
    .slideToggle(2000, function() {
        $(this).addClass("odd").removeClass("card-img-odd").children().children().removeClass("invisible")
    })
    .slideToggle("slow");
}

function coverEven() {



}

function coverOdd() {



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