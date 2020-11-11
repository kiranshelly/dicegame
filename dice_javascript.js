function play()
{
//Dice 1 ->

    // Generator Random Number.
    var randonNumber1 = Math.floor(Math.random()*6+1);
    // Subsitute the value of randomNumber1. Get the value of Image.
    var picSource1 = "dice_image/dice" + randonNumber1 + ".png";
    // Change the value of Dice with Random Number.
    var setPic1 = document.querySelector('#number1').setAttribute("src" , picSource1);
    //Console The Value of randomNumber1.
    console.log("Random Number 1 :" +randonNumber1);

//Dice 2 - >

    // Generator Random Number.
    var randonNumber2 = Math.floor(Math.random()*6+1);
    // Subsitute the value of randomNumber1. Get the value of Image.
    var picSource2 = "dice_image/dice" + randonNumber2 + ".png";
    // Change the value of Dice with Random Number.
    var setPic2 = document.querySelector('#number2').setAttribute("src", picSource2);
    //Console The Value of randomNumber1.
    console.log("Random Number 1 :" +randonNumber2);
 
    if( randonNumber1 > randonNumber2)
     {
        document.getElementById('number1').innerHTML = randonNumber1;
        document.getElementById('winner').innerHTML = ` Winner Is Player 1️⃣ `;
     }    
     else if ( randonNumber2 > randonNumber1) 
     {
        document.getElementById('number2').innerHTML = randonNumber2;
        document.getElementById('winner').innerHTML = ` Winner Is Player 2️⃣`;
     }
     else
     {
        document.getElementById('winner').innerHTML = ` It's 👔 `;
     }
}