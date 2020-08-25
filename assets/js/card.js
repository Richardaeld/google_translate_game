

$(document).ready(function() {  //start ready
    var cardCount;
    var cardUniqueLabel = 0;

    cardCount = $(".card-frame").length;                                                                                //counts amount of card-frames for numbering
    
    $(".card-frame").odd().addClass("card-img-odd");
    $(".card-frame").even().addClass("card-img-even");
    $(".card-frame").first().children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-word");       //labels start div card-text-* 
    $(".card-frame").first().addClass("ml-3");                                                                          //labels start div for space (margin)

    for (cardUniqueLabel = 1; cardUniqueLabel < cardCount; cardUniqueLabel++ ) {                                         //labels divs for remaining card-text-*
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + cardUniqueLabel).addClass("card-word");  //adds card specific targets and text spacing
        $("div[class*='card-text-']").last().parent().parent().addClass("ml-3");                                        //spaces (margins) cards
    };
});                             //end start ready



$(".card-frame").click(function() {  // flips card and changed text
    $(this).slideToggle("slow", function() {
        $(this).children().children().text("boologa");
        
        if ($(this).hasClass("card-img-even")) {
            $(this).addClass("even");
            $(this).removeClass("card-img-even");
        } else if ($(this).hasClass("even")) {
            $(this).addClass("card-img-even");
            $(this).removeClass("even");    
        };
        
        if ($(this).hasClass("card-img-odd")) {
            $(this).addClass("odd")
            $(this).removeClass("card-img-odd");
        } else if ($(this).hasClass("odd")) {
            $(this).addClass("card-img-odd");
            $(this).removeClass("odd");
        };
        
    });

    $(this).slideToggle();
});












