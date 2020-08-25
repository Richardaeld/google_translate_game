

$(document).ready(function() {  
    var times;
    var cardLabel = 0;

    times = $(".card-frame").length;        //counts amount of card-frames for numbering
    
    $(".card-frame").first().children().children().addClass("card-text-" + cardLabel)       //labels start div card-text-* 

    for (cardLabel = 1; cardLabel < times; cardLabel++ ) {   //labels divs for remaining card-text-*
        $("div[class*='card-text-']").last().parent().parent().next("div").children().children().addClass("card-text-" + cardLabel);              
    };

});

$(".card-frame").click(function() {
    $(this).slideToggle("slow", function() {
        $(this).children().children().text("boologa");
    });
    $(this).slideToggle();
});



















//$(document).ready(function(){
//    var content;
//    for (content=0; content < words.length; content++) {
//      //  console.log("hey listen" + content);
 //       $(".card-text-" + content).text(words[content]);
//    };
//    $(".card-frame").children().children().addClass("card-word");
//});

//$(document).ready(function() {
//    var cardContent =0;

//    for (cardContent = 0; cardContent < words.length; cardContent++ ) {
 //       $(".card-frame").children().children().first().text(words[cardContent]);
  //      for (cardContent = 1; cardContent < words.length; cardContent++ ) {
//        $(".card-frame").children().children().first().sibling().text(words[cardContent]);

//        };
//    };

//});

//$(".card-frame").click(function() { //hard setting with dissappearing cards

//    $(this).toggle("slow");
//    $(this).toggle("slow").text("Im different");

//    $(this).animate({height: "200px"}, 1000);

//    $(this).css("transition-duration", "2s");
//    $(this).css("transform", "rotateY(360deg)");
//});
