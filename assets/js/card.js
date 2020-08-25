

$(document).ready(function() {  //start ready
    var cardCount;
    var cardUniqueLabel = 0;

    cardCount = $(".card-frame").length;                                                                                //counts amount of card-frames for numbering
    
    $(".card-frame").odd().addClass("card-img-odd");                                                                    //adds background to odd cards
    $(".card-frame").even().addClass("card-img-even");                                                                  //adds background to even cards
    $(".card-frame").first().children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel]);       //labels start div card-text-* 
    $(".card-frame").first().addClass("ml-3");                                                                          //labels start div for space (margin)

    for (cardUniqueLabel = 1; cardUniqueLabel < cardCount; cardUniqueLabel++ ) {                                         //labels divs for remaining card-text-*
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-word").addClass("invisible").text(words[cardUniqueLabel]);  //adds card specific targets and text spacing
        $("div[class*='card-text-']").last().parent().parent().addClass("ml-3");                                        //spaces (margins) cards
    };

    for (cardUniqueLabel = 0; cardUniqueLabel < cardCount; cardUniqueLabel++ ) {
        $(".card-text-")
    }

});                             //end start ready



$(".card-frame").click(function() {  // flips card and hides/reveals text
    $(this).slideToggle("slow", function() {
        
        if ($(this).hasClass("card-img-even")) {        //flip illusion to even cards
            $(this).addClass("even").removeClass("card-img-even");
            $(this).children().children().removeClass("invisible");
        } else if ($(this).hasClass("even")) {
            $(this).addClass("card-img-even").removeClass("even");
            $(this).children().children().addClass("invisible");  
        };
        
        if ($(this).hasClass("card-img-odd")) {         //flip illusion to odd cards
            $(this).addClass("odd").removeClass("card-img-odd");
            $(this).children().children().removeClass("invisible")
        } else if ($(this).hasClass("odd")) {
            $(this).addClass("card-img-odd").removeClass("odd");
            $(this).children().children().addClass("invisible");  
        };
        
    });

    $(this).slideToggle();
});












