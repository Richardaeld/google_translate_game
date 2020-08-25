let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];


$(document).ready(function() {
    
});

$(document).ready(function(){
    var content;
    for (content=0; content < 10; content++) {
        console.log("hey listen" + content);
        $(".card-text-" + content).text(words[content]);
    };

    $(".card-frame").children().children().addClass("card-word");
    
});
