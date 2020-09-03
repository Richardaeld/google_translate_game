

function makeInnerLayers(cardNumber, className, classValues){
    for (i=0; i<cardNumber; i++){  
        var loc1 = document.getElementsByClassName(className)[i];                                     //creates parent target
        var class1 = document.createAttribute("class");                                 //creates a empty variable to place
        class1.value = classValues;                                                //adds value to empty class
        loc1.appendChild(document.createElement("div")).setAttributeNode(class1);       //creates div with class
    }
}

function makeCardsOuter(cardNumber){
    for (i=0; i<cardNumber; i++){  
        var loc1 = document.getElementById("game");                                     //creates parent target
        var class1 = document.createAttribute("class");                                 //creates a empty variable to place
        class1.value = "col-3 col-md-2 card-frame ml-3";                                //adds value to empty class
        loc1.appendChild(document.createElement("div")).setAttributeNode(class1);       //creates div with class
        var loc2 = document.getElementById("game").getElementsByTagName("div")[i];      //creates location to add class to
        loc2.className += " card-text-" + i;
        loc2.id = "card-Id-" + i;                                              //creates class to add 
    };    
    
}

makeCardsOuter(5);
makeInnerLayers(5, "col-3", "row no-gutters middle");
makeInnerLayers(5, "middle", "col-12 card-word" )




