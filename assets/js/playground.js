let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];

function oddEvenFace(indexNumber, target){
    if (indexNumber % 2 === 0 ){
        target.classList.add("card-img-even");
    } else{
        target.classList.add("card-img-odd");
    }
}

function insertWord(index){
    var loc2 = document.getElementsByClassName("invisible")[i];
    para = document.createElement("p");
    node1 = document.createTextNode(words[i]);
    para.appendChild(node1);
    loc2.appendChild(para);
}

function makeInnerLayers(cardNumber, className, classValues, classTarget = null){
    for (i=0; i<cardNumber; i++){  
        var loc1 = document.getElementsByClassName(className)[i];                       //creates parent target
        var class1 = document.createAttribute("class");                                 //creates a empty variable to place
        class1.value = classValues;                                                     //adds value to empty class
        loc1.appendChild(document.createElement("div")).setAttributeNode(class1);       //creates div with class
        
        if(classTarget !== null){
            insertWord(i)
        }
    }
}




function makeCardsOuter(cardNumber, matchingPair = 0){

    for (i=0; i<cardNumber + cardNumber; i++){  
        var loc1 = document.getElementById("game");                                     //creates parent target
        var class1 = document.createAttribute("class");                                 //creates a empty variable to place
        class1.value = "col-3 col-md-2 card-frame ml-3";                                //adds value to empty class
        loc1.appendChild(document.createElement("div")).setAttributeNode(class1);       //creates div with class
        var loc2 = document.getElementById("game").getElementsByTagName("div")[i];      //creates location to add class to
        loc2.id = "card-Id-" + i;                                                       //creates class to add 

        if ( i >= cardNumber){                                                          //labels cards for matching pairs
            loc2.className += " card-text-" + matchingPair;
            matchingPair++
        } else {
            loc2.className += " card-text-" + i;
        }
        
        oddEvenFace(i, loc2);
    };        
}

makeCardsOuter(5);                                                      //makes outside frame for card
makeInnerLayers(10, "col-3", "row no-gutters middle");                   //makes middle layer of card
makeInnerLayers(10, "middle", "col-12 card-word invisible", 1);          //makes inner most layer of card




