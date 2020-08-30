 
 //--------------  global variables
    var maxPoints = 0;
    var playerPoints = 0;
    var gameMatchingPair = 0;          //max ceiling for pickable cards
    var chosenIndex1 = null;             //for card pairing 
    var chosenIndex2 = null;
    var chosenId1 = null;       // for each card index 
    var chosenId2 = null;
    var cardCount = null;
    var playerModeSelection= [];
//---------------- end global variables


$(document).ready(function() {  //start creation ready for card population and background adding

    startScreen();              //creats the start screen

$(".start-button").click(function() {  

        // {[0]mode, [1]difficulty, [2]#cards, [3]language, [4]time }
        $(".start-screen option:selected").each(function() {
            playerModeSelection.push($(this).index());
            $(".start-button").append(playerModeSelection);
        });

            cardPopulate();
            $(".start-screen").css("display", "none");
            $(".start-screen").css("z-index", "0");
            console.log(playerModeSelection);
        });

        playGame();

});                             //end creation ready DONT FORGET Event Delegation









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


