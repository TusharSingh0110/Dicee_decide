var randomNumber1 = Math.floor(Math.random() * 6 ) + 1; //random number between 1&6
var randomDiceimg1 = "dice" + randomNumber1 + ".png" ;//selecting images b/w dice1.png - dice6.png
var randomImgsrc1 = "images/" + randomDiceimg1 ;//selecting source of image
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImgsrc1);

//same for dice 2
 var randomNumber2 = Math.floor(Math.random() * 6 ) + 1;
 var randomDiceimg2 = "images/dice" + randomNumber2 + ".png";
 
 var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceimg2);
 

 if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wims";
 }
 else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
 }
 else{
    document.querySelector("h1").innerHTML = "Draw";
 }