var randomDiceBase = Math.floor(Math.random() * 6) + 1;

var randomDiceSource = "images/dice" + randomDiceBase + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceSource);

var randomDiceBase2 = Math.floor(Math.random() * 6) + 1;

var randomDiceSource2 = "images/dice" + randomDiceBase2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceSource2);

if(randomDiceBase > randomDiceBase2){
    document.querySelector("h1").innerHTML = "🚩 Play 1 Win! ";
}
else if (randomDiceBase2 > randomDiceBase) {
    document.querySelector("h1").innerHTML = "Play 2 Win! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!!!";
}

