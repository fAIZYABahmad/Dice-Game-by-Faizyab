var randomnumber1 = Math.floor(Math.random()*6) + 1; //random  number

var randomdiceimg = "dice" + randomnumber1 + ".png";  //image of dice

var randomimgsrc = "images/" + randomdiceimg; // 

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimgsrc);

var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomimgsrc2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimgsrc2);

if (randomnumber1 > randomnumber2) {
    document.querySelector("h1").innerHTML="Player 1 wins";
}
else if (randomnumber1 < randomnumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}

else {
    document.querySelector("h1").innerHTML="Draw "
}