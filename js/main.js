// Copyright of Connor Unwin 2019(C)

// Game Variables
var gameValues = ["scissors","paper","rock","lizard","spock"];
var winningCombinations = [[0,1], [0,3], [1,2], [1,4], [2,3], [2,0], [3,4], [3,1], [4,2], [4,0]];
var gameValuesIcons = ["fa-hand-scissors", "fa-hand-paper", "fa-hand-rock","fa-hand-lizard","fa-hand-spock"];

// Player 1 Variables
var player1Status = document.getElementsByClassName("player1")[0];
var player1Answer = document.getElementsByClassName("player1-answer")[0];

// Player 2 Variables
var player2Status = document.getElementsByClassName("player2")[0];
var player2Answer = document.getElementsByClassName("player2-answer")[0];

// Event Listener for buttons
scissorsBtn = document.getElementById("scissors").addEventListener("click", function(){
  clearPlayersStatus();
  checkAnswers(getIndexValue(this.value), getIndexValue(gameValues[Math.floor(Math.random() * gameValues.length)]));
});

paperBtn = spockBtn = document.getElementById("paper").addEventListener("click", function(){
  clearPlayersStatus();
  checkAnswers(getIndexValue(this.value), getIndexValue(gameValues[Math.floor(Math.random() * gameValues.length)]));
});

rockBtn = document.getElementById("rock").addEventListener("click", function(){
  clearPlayersStatus();
  checkAnswers(getIndexValue(this.value), getIndexValue(gameValues[Math.floor(Math.random() * gameValues.length)]));
});

lizardBtn = document.getElementById("lizard").addEventListener("click", function(){
  clearPlayersStatus();
  checkAnswers(getIndexValue(this.value), getIndexValue(gameValues[Math.floor(Math.random() * gameValues.length)]));
});

spockBtn = document.getElementById("spock").addEventListener("click", function(){
  clearPlayersStatus();
  checkAnswers(getIndexValue(this.value), getIndexValue(gameValues[Math.floor(Math.random() * gameValues.length)]));
});

function clearPlayersStatus(answer1, answer2){
  // Player 1 Styles
  player1Status.classList.remove("loser");
  player1Status.classList.remove("winner");
  player1Status.innerHTML = "";
  player1Answer.innerHTML = ""
  player1Answer.classList.remove(gameValues[answer1]);

  // Player 2 Styles
  player2Status.classList.remove("loser");
  player2Status.classList.remove("winner");
  player2Status.innerHTML = "";
  player2Answer.innerHTML = ""
  player2Answer.classList.remove(gameValues[answer2]);

  // Draw Style
  player1Status.classList.remove("draw");
  player2Status.classList.remove("draw");
}

function getIndexValue(answer) {
  // Check to make sure answer is in array.
  if (answer != -1){
    return gameValues.indexOf(answer);
  } else {
    return "Answer does not exist";
  }
}

function checkAnswers(answer1, answer2){
  if (answer1 === answer2){
    // Player 1 Result
    player1Status.classList.add("draw");
    player1Status.innerHTML = "Draw!";
    player1Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer1] + "'></i>" + "<br>" + gameValues[answer1];

    // Player 2 Result
    player2Status.classList.add("draw");
    player2Status.innerHTML = "Draw!";
    player2Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer2] + "'></i>" + "<br>" + gameValues[answer2];
  } else {
    for (var i = 0; i < winningCombinations.length; i++){
        for (var k = 0; k < winningCombinations[i].length; k++){
          if (winningCombinations[i][k] === winningCombinations[i][0]){
            if(answer1 === winningCombinations[i][0] && answer2 === winningCombinations[i][1]){
              //Player 1 Result
              player1Status.classList.add("winner");
              player1Status.innerHTML = "Winner";
              player1Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer1] + "'></i>" + "<br>" + gameValues[answer1];

              //Player 2 Result
              player2Status.classList.add("loser");
              player2Status.innerHTML = "Loser";
              player2Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer2] + "'></i>" + "<br>" + gameValues[answer2];
              break;
            }
            else if (answer1 === winningCombinations[i][1] && answer2 === winningCombinations[i][0]){
              // Player 1 Result
              player1Status.classList.add("loser");
              player1Status.innerHTML = "Loser";
              player1Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer1] + "'></i>" + "<br>" + gameValues[answer1];

              // Player 2 Result
              player2Status.classList.add("winner");
              player2Status.innerHTML = "Winner";
              player2Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer2] + "'></i>" + "<br>" + gameValues[answer2];
              break;
            }
          }
        }
    }
  }
}
