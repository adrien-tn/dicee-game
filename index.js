


var randomNumber1 = Math.floor(Math.random()*6);
var randomNumber2 = Math.floor(Math.random()*6);
var images= ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", "images/"+images[randomNumber1]);
image2.setAttribute("src", "images/"+images[randomNumber2]);

if(randomNumber1 > randomNumber2){
document.querySelector("h2").innerHTML = "🚩Player 1 wins"
}
else if(randomNumber1 < randomNumber2){
document.querySelector("h2").innerHTML = "Player 2 wins🚩";
}
else{
document.querySelector("h2").innerHTML = "🚩Draw🚩";
}
