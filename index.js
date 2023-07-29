var randomNumber1 = Math.floor((Math.random()*6));

var arr=["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
document.getElementsByClassName("img1")[0].setAttribute("src",arr[randomNumber1]);

var randomNumber2 = Math.floor((Math.random()*6));
document.getElementsByClassName("img2")[0].setAttribute("src",arr[randomNumber2]);
if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";
}else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}
