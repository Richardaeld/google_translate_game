 
 //--------------  global variables
    var maxPoints = 0;
    var playerPoints = 0;
    var gameMatchingPair = 0;          //max ceiling for pickable cards
    var chosenIndex1 = null;             //for card pairing 
    var chosenIndex2 = null;
    var chosenId1 = null;       // for each card index 
    var chosenId2 = null;
//---------------- end global variables


$(document).ready(function() {  //start creation ready for card population and background adding
    var cardCount;              //helps count total cards
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


});                             //end creation ready DONT FORGET Event Delegation

$(document).ready(function() {


    $(".card-frame").click(function() {
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
            if(chosenIndex1 >= 15){     //makes chosenIndex's comparable for matching
                chosenIndex1 = chosenIndex1 - 15;
            } else if (chosenIndex2 >= 15) {
                chosenIndex2 = chosenIndex2 -15;
            }

            if(chosenIndex1 === chosenIndex2) {
                timeDelay(chosenId1);
        //        flipEven(chosenIndex2);
          //      flipOdd(chosenIndex2);
                timeDelay(chosenId2);
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
}); //closes doc ready

