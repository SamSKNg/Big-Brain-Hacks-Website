"use strict";

let randomNum = Math.trunc(Math.random() * 20) + 1;
let guessedNum = document.querySelector(".input").value;
let points = 20;
let highScore = 0;

document.querySelector(".input").value;
document.querySelector(".check").addEventListener("click", function () {
  guessedNum = parseInt(document.querySelector(".input").value);
  //console.log(guessedNum, typeof guessedNum);
  if (Number.isInteger(guessedNum) && points > 0) {
    if (guessedNum == randomNum) {
      document.querySelector(".message").textContent =
        "Congratulations! You found the number!";
      document.querySelector(".number").textContent = randomNum;
      if (highScore < points) {
        highScore = points;
        document.querySelector(
          ".highScoreLabel"
        ).textContent = `Highscore: ${highScore}`;
      }
    } else if (guessedNum > randomNum) {
      document.querySelector(".message").textContent = "Wrong! Too high!";
      points--;
      document.querySelector(".scoreLabel").textContent = `Score: ${points}`;
    } else {
      document.querySelector(".message").textContent = "Wrong! Too low!";
      points--;
      document.querySelector(".scoreLabel").textContent = `Score: ${points}`;
    }
  } else if (points <= 0) {
    document.querySelector(
      ".message"
    ).textContent = `Game Over!! Number was ${randomNum}`;
    document.querySelector(".number").textContent = randomNum;
  } else {
    document.querySelector(".message").textContent =
      "Invalid input! Try again...";
  }
});
