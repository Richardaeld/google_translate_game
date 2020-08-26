$(document).ready(function() {  //start creation ready for card population and background adding
    var cardCount;              //helps count total cards
    var cardUniqueLabel = 0;    //creates unique labels for cards

    cardCount = $(".card-frame").length;                                                                                //counts amount of card-frames for numbering
    
    $(".card-frame").first().children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel]);       //labels start div card-text-* 
    $(".card-frame").first().addClass("ml-3");                                                                          //labels start div for space (margin)

    for (cardUniqueLabel = 1; cardUniqueLabel < cardCount; cardUniqueLabel++ ) {                                         //labels divs for remaining card-text-*
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel]);  //adds card specific targets and text spacing
        $("div[class*='card-text-']").last().parent().parent().addClass("ml-3");                                        //spaces (margins) cards
    }

     for (cardUniqueLabel = cardCount; cardUniqueLabel < cardCount + cardCount; cardUniqueLabel++ ) {                   //creates pair for matching
        $("#game-board").append("<div class='col-2 card-frame'><div class='row no-gutters'><div class='col-12'><span></span></div></div></div>");
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + (cardUniqueLabel - cardCount)).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel - cardCount]);  //adds card specific targets and text spacing
        $("div[class*='card-text-']").last().parent().parent().addClass("ml-3");                                        //spaces (margins) cards
     }
    
    $(".card-frame").odd().addClass("card-img-odd");                                                                    //adds background to odd cards
    $(".card-frame").even().addClass("card-img-even");                                                                  //adds background to even cards

});                             //end creation ready DONT FORGET Event Delegation











$(document).ready(function() {        // flips card and hides/reveals text
    
    var gameMatchingPair = 0;          //max ceiling for pickable cards
    var chosenIndex1 = null;             //for index matching
    var chosenIndex2 = null;

    $(".card-frame").click(function() { 
         
        if(gameMatchingPair === 2) {
            return;
        } else if(gameMatchingPair === 0) {
            console.log("see me")
            chosenIndex1 = $(this).index(); // catches index where card is
            gameMatchingPair++;
        } else if (gameMatchingPair === 1) {
            chosenIndex2 = $(this).index();
            gameMatchingPair++;
        }
        $(this).slideToggle("slow", function() {
                    if ($(this).hasClass("card-img-even")) {        //flip illusion to even cards
                        $(this).addClass("even").removeClass("card-img-even");
                        $(this).children().children().removeClass("invisible");
                    } else if ($(this).hasClass("card-img-odd")) {         //flip illusion to odd cards
                        $(this).addClass("odd").removeClass("card-img-odd");
                        $(this).children().children().removeClass("invisible");
                    } 
                    $(this).slideToggle();

                });
                
    });



});

