 //--------------  global variables
    var maxPoints = 0;                  //total number of matches per round
    var playerPoints = 0;               //matches player has made
    var gameMatchingPair = 0;          //max ceiling for pickable cards
    var chosenIndex1 = null;             //for card pairing 
    var chosenIndex2 = null;
    var chosenId1 = null;       // for each card's unique index 
    var chosenId2 = null;
    var newGamePlus = 0;

    var cardCount = null;       // number of total unpaired cards
    var playerModeSelection= [];  //Must be present to boot and logs all user selections
//---------------- end global variables


$(document).ready(function() {  //start creation ready for card population and background adding
    startScreen();              //creats the start screen

});                             //end creation ready DONT FORGET Event Delegation












