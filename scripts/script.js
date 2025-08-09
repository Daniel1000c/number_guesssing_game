"use strict";

//score counter
let score = 40;

//Create highscore counter
let high_score = 0;

//Create try counter
let tries = 10;

//Create display message function
const displayMessage = function (message) {
  //Get message id
  const result = (document.getElementById("gameMessage").textContent = message);

  //Return result
  return result;
};

//Create check button function
document.getElementById("checkNumber").addEventListener("click", function () {
  //Check user value
  const userGuess = Number(document.getElementById("guess").value);

  //Check if the user has put a number in or not
  if (!userGuess) {
    //Display message that user must input a number
    displayMessage("You must input a number between 1 and 40!!!");

    //Change text color to red when this happens
    document.getElementById("gameMessage").style.color = "#FF0000";
    document.getElementById("gameMessage").style.fontWeight = "bolder";
  }
});
