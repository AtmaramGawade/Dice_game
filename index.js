var randomNumber1 = Math.floor(Math.random()*6)+1;

console.log(randomNumber1);

var leftImage = document.querySelector(".img1");

leftImage.setAttribute("src", "images/dice"+ randomNumber1+".png");


var randomNumber2 = Math.floor(Math.random()*6)+1;

var rightImage = document.querySelector(".img2");

rightImage.setAttribute("src", "images/dice"+ randomNumber2+".png");


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 is winner";

}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML = "player 2 is the winner";
}

else{ 
    document.querySelector("h1").innerHTML = "its a draw";
}