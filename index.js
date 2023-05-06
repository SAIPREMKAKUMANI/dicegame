var n1=Math.floor(Math.random()*6)+1;
var n2=Math.floor(Math.random()*6)+1;
var randomImage1="images/dice"+n1+".png";
var randomImage2="images/dice"+n2+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImage1);
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);
var dice=document.querySelector("h1");
if(n1>n2){
    dice.textContent="🚩Player1 Wins";
}else if(n2>n1){
    dice.textContent="Player2 Wins🚩";
}else{
    dice.textContent="Draw!!!";
}