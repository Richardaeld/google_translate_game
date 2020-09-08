let words = ["she", "look", "time", "could", "people", "part", "long", "did", "on", "they", "i", "these", "said", "so", "number", "no", "yes"];
var clickRecord = [];

function insertWord(index){
    var loc2 = document.getElementsByClassName("cardBack")[index];
     para = document.createElement("p");
     node1 = document.createTextNode(words[index]);
    para.appendChild(node1);
    loc2.appendChild(para);
}

function constructCard (cardNumber, classValues, className=null, matchingPair = 0, isCardFace = false, isCardBack = false){
    for (index = 0; index < cardNumber*2; index++){

        var CardContainer = document.getElementById("game");
        var cardInternal = document.getElementsByClassName(className)[index];
        var setClasses = document.createAttribute("class");
        setClasses.value = classValues;

        if (className === null){ //container
            CardContainer.appendChild(document.createElement("div")).setAttributeNode(setClasses);
            continue;
        }

        if (index<cardNumber && className !== null){    //cardRotate, cardFace, cardBack
            cardInternal.appendChild(document.createElement("div")).setAttributeNode(setClasses)
            
            if (isCardFace){
                var identityTarget = document.getElementsByClassName("cardFace")[index];
                identityTarget.id = "card-Id-" + index; 
            }

            if (isCardBack){
                insertWord(index);
            }

        }
    }
}


constructCard(5, "col-3 col-md-2 card-frame ml-3");  //container
constructCard(10, "row no-gutters middle cardRotate", "col-3"); //cardRotate
constructCard(10, "col-12 card cardFace", "middle", 1, true);     //cardFace
constructCard(10, "col-12 card cardBack", "middle", 1, false, true);     //cardBack

var cards = document.getElementsByClassName("cardFace").length;
var loc6 = document.getElementsByClassName("cardFace");
for(i=0; i<cards; i++){
    loc6[i].onclick = function() {
        this.parentElement.classList.add("flipCard");
        clickRecord.push(this.id);
    //    console.log(clickRecord);
    }
}

function printme() {
if (clickRecord.length === 2){
    console.log(clickRecord);
    clickRecord = [];
}
}

document.onclick = function() {
    console.log("You have the shot! Take the shot!!")
   printme(); 
} 