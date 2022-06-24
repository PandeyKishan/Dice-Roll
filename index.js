// You can use window.performance.navigation.type . It will be 0 if you are coming through a URL. It will be 1 if you are refreshing, and it will be 2 if you are coming using the forwards/backwards buttons in your web browser.

if (window.performance.navigation.type === 1) {
    rollDice();
  }
   
  function rollDice() 
  {
        var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1 - 6
        var randomNumber2 =  Math.floor(Math.random() * 6) + 1;//1 - 6

        document.querySelector(".img1").setAttribute("src", "images/dice"+ randomNumber1+".png"); //images/dice1.png - images/dice6.png
        document.querySelector(".img2").setAttribute("src", "images/dice"+ randomNumber2+".png"); //images/dice1.png - images/dice6.png
        changeTitle(randomNumber1, randomNumber2);
  }
  function changeTitle(randomNumber1, randomNumber2)
  {
    if(randomNumber1 > randomNumber2)
    {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!"; // can also use textContent in place of innerHTML
    }
    else if(randomNumber1 < randomNumber2)
    {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    }
    else
    {
        document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
    }
}

//USING IF-ELSE
// if(randomNumber1 === 1)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// }
// else if(randomNumber1 === 2)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
// }
// else if(randomNumber1 === 3)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice3.png");  
// }
// else if(randomNumber1 === 4)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
// }
// else if(randomNumber1 === 5)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice5.png"); 
// }
// else if(randomNumber1 === 6)
// {
//     document.querySelector("img.img1").setAttribute("src", "images/dice6.png"); 
// }

//METHOD-2
// var image = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"]
// // FIRST DICE
// var randomNumber1 = Math.floor(Math.random() * 6)
// var firstImage = image[randomNumber1]
// document.querySelector(".img1").setAttribute("src", firstImage);
// // SECOND DICE
// var randomNumber2 = Math.floor(Math.random() * 6)
// var secondImage = image[randomNumber2]
// document.querySelector(".img2").setAttribute("src", secondImage);

//ANGELA'S METHOD
// var randomDiceImage = "dice" + randomNumber1 + ".png";
// var randomImageSource1 = "images/" + randomDiceImage;
// var image1 = document.querySelectorAll("img")[0];
// image1.setAttribute("src", randomImageSource1);
// var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
// document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);