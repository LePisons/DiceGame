
// Creates random Number 1
let randomNumber1 = Math.floor(Math.random() * 6);
// Creates random number 2
let randomNumber2 = Math.floor(Math.random() * 6);

const diceImages = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'    
]

// Will generate a random img for dice #1 
document.getElementsByClassName("img1")[0].setAttribute("src", diceImages[randomNumber1]);

// Will generate a random img for dice #2

document.getElementsByClassName("img2")[0].setAttribute("src", diceImages[randomNumber2]);

if (randomNumber1 > randomNumber2) {

    document.querySelector("h1").innerHTML = "🚩J1 ha ganado!!"
} 
else if (randomNumber2 > randomNumber1) {

    document.querySelector("h1").innerHTML = "J2 ha ganado!! 🚩"

} else {
    document.querySelector("h1").innerHTML = " Empate!!! "
}

