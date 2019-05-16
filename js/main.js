// Copyright of Connor Unwin 2019(C)
// Game Variables
var gameValues = ["scissors","paper","rock","lizard","spock"];
var winningCombinations = [[0,1], [0,3], [1,2], [1,4], [2,3], [2,0], [3,4], [3,1], [4,2], [4,0]];
var gameValuesIcons = ["fa-hand-scissors", "fa-hand-paper", "fa-hand-rock","fa-hand-lizard","fa-hand-spock"];

// Player 1 Variables
var player1Input = getIndexValue(gameValues[Math.floor(Math.random() * gameValues.length)]);
var player1Status = document.getElementsByClassName("player1")[0];
var player1Answer = document.getElementsByClassName("player1-answer")[0];

// function fetchPlayer1Answer() {
//   var rock = document.getElementById("rock").value;
//   var paper = document.getElementById("paper").value;
//   var scissors = document.getElementById("scissors").value;
//   var lizard = document.getElementById("lizard").value;
//   var spock = document.getElementById("spock").value;
//   if(rock === ""){
//     console.log(rock);
//     return rock;
//     rock = "";
//   } if(paper === ""){
//     console.log(rock);
//     return paper;
//     paper = "";
//   } if(scissors === ""){
//     console.log(scissors);
//     return scissors;
//     scissors= "";
//   } if(lizard === ""){
//     console.log(lizard);
//     return lizard;
//     lizard = "";
//   }if(spock === ""){
//     console.log(spock);
//     return spock;
//     spock = "";
//   }
// }

// Player 2 Variables
var player2Input = getIndexValue(gameValues[Math.floor(Math.random() * gameValues.length)]);
var player2Status = document.getElementsByClassName("player2")[0];
var player2Answer = document.getElementsByClassName("player2-answer")[0];

function getIndexValue(answer) {
  // Check to make sure answer is in array.
  if (answer != -1){
    return gameValues.indexOf(answer);
  } else {
    return "Answer does not exist";
  }
}

function checkAnswers(answer1, answer2){
  if (player1Input === player2Input){
    // Player 1
    player1Status.classList.add("draw");
    player1Status.innerHTML = "Draw!";
    player1Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer1] + "'></i>" + "<br>" + gameValues[answer1];
    player1Answer.classList.add(gameValues[answer1]);

    // Player 2
    player2Status.classList.add("draw");
    player2Status.innerHTML = "Draw!";
    player2Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer2] + "'></i>" + "<br>" + gameValues[answer2];
    player2Answer.classList.add(gameValues[answer2]);

    // Debugging
    console.log("It's a Draw!");
  } else {
    for (var i = 0; i < winningCombinations.length; i++){
        for (var k = 0; k < winningCombinations[i].length; k++){
          if (winningCombinations[i][k] === winningCombinations[i][0]){
            if(answer1 === winningCombinations[i][0] && answer2 === winningCombinations[i][1]){
              //Player 1
              player1Status.classList.add("winner");
              player1Status.innerHTML = "Winner";
              player1Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer1] + "'></i>" + "<br>" + gameValues[answer1];
              player1Answer.classList.add(gameValues[answer1]);

              //Player 2
              player2Status.classList.add("loser");
              player2Status.innerHTML = "Loser";
              player2Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer2] + "'></i>" + "<br>" + gameValues[answer2];
              player2Answer.classList.add(gameValues[answer2]);

              // Debugging
              console.log("[Player 1] used [" + gameValues[answer1] + "] and [Player 2] used [" + gameValues[answer2] + "]");
              break;
            }
            else if (answer1 === winningCombinations[i][1] && answer2 === winningCombinations[i][0]){
              // Player 1
              player1Status.classList.add("loser");
              player1Status.innerHTML = "Loser";
              player1Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer1] + "'></i>" + "<br>" + gameValues[answer1];
              player1Answer.classList.add(gameValues[answer1]);

              // Player 2
              player2Status.classList.add("winner");
              player2Status.innerHTML = "Winner";
              player2Answer.innerHTML = "<i class='fas text-center fa-2x " + " " + " " + gameValuesIcons[answer2] + "'></i>" + "<br>" + gameValues[answer2];
              player2Answer.classList.add(gameValues[answer2]);

              // Debugging
              console.log("[Player 2] used [" + gameValues[answer2] + "] and [Player 1] used [" + gameValues[answer1] + "]");
              break;
            }//end of else if
          }//end of if
        }//end of inner for loop
    }// end of outer for loop
  }// end of else
}// end checkAnswers()
checkAnswers(player1Input,player2Input);
