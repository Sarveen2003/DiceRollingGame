function dice()
{
    //code for Dice 1
    var randomNumber1 = Math.floor(Math.random()*6)+1;//generates 1-6
    var randomDiceImage = "dice"+randomNumber1+".png";//dice1.png - dice6.png
    var randomImageSource = "images/"+randomDiceImage;//images/dice1.png - images/dice6.png
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImageSource);

    //Code for Dice 2
    var randomNumber2 = Math.floor(Math.random()*6)+1;
    var randomDiceImageSource = "images/dice"+randomNumber2+".png"//images/dice1.png - images/dice2.png
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomDiceImageSource);  

    //change heading (inner html)
    if (randomNumber1>randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 1 Wins 🚩"
    }
    else if (randomNumber1<randomNumber2)
    {
        document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
    }
    else
    {
        document.querySelector("h1").innerHTML="Draw ⚔️"
    }

}

// Code for Dice 2
// function dice2()
// {
//   var randomNumber2 = Math.floor(Math.random()*6)+1;
//   var randomDiceImageSource = "images/dice"+randomNumber2+".png"//images/dice1.png - images/dice2.png
//   var image2 = document.querySelectorAll("img")[1];
//   image2.setAttribute("src", randomDiceImageSource);  
// }

//change heading (inner html)
// if (randomNumber1>randomNumber2)
// {
    // document.querySelector("h1").innerHTML="Player 1 Wins 🚩"
// }
// else if (randomNumber1<randomNumber2)
// {
    // document.querySelector("h1").innerHTML="Player 2 Wins 🚩"
// }
// else
// {
    // document.querySelector("h1").innerHTML="Draw ⚔️"
// }
// 
function namesFunction1()
{
    var name1 = prompt("Enter player 1's name : ");
    if (name1==null || name1== "")
    {
        alert("Name not entered !! ");
    } 
    else
    {
        document.querySelector(".player1").innerHTML= name1;
    }
}

function namesFunction2()
{
    var name2 = prompt("Enter player 2's name : ");
    if (name2==null || name2== "")
    {
        alert("Name not entered !! ");
    } 
    else
    {
        document.querySelector(".player2").innerHTML= name2;
    }
}
