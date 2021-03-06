"use strict";
var computerSelection = ["rock", "paper", "scissors", "lizard", "spock"];

var userArray = {
	Rock: ["Rock draws with rock. No one wins!", "Rock is covered by paper. Computer wins!", "Rock crushes scissors. Player wins!", "Rock crushes lizard. Player wins!", "Rock is vaporised by Spock. Computer wins!"],
	Paper: ["Paper covers rock. Player wins!", "Paper draws with paper. No one wins!", "Paper is cut by scissors. Computer wins!", "Paper is eaten by lizard. Computer wins!", "Paper disproves Spock. Player wins!"],
	Scissors: ["Scissors are crushed by rock. Computer wins!", "Scissors cut paper. Player wins!", "Scissors draw with scissors. No one wins!", "Scissors decapitate lizard. Player wins!", "Scissors are smashed by Spock. Computer wins!"],
	Lizard: ["Lizard is crushed by rock. Computer wins!", "Lizard eats paper. Player wins!", "Lizard is decapitated by scissors. Computer wins!", "Lizard draws with lizard. No one wins!", "Lizard poisons Spock. Player wins!"],
	Spock: ["Spock vaporises rock. Player wins!", "Spock is disproved by paper. Computer wins!", "Spock smashes scissors. Player wins!", "Spock is poisoned by lizard. Computer wins!", "Spock draws with Spock. No one wins!"]
};
var count = 0;
var computerWins = 0;
var playerWins = 0;
var drawWins = 0;
var thisPersonWins = "";
var userSelection = "";
var column = "";
var row;
var index;
var rockCount = 0;
var paperCount = 0;
var scissorsCount = 0;
var lizardCount = 0;
var spockCount = 0;
var allCount = rockCount + paperCount + scissorsCount + lizardCount + spockCount;

function counter() {
	if ((computerWins + playerWins + drawWins) < 29) {count++;}
	else {
		count++;
		document.getElementById("playButton").disabled = true;
	}
}

function winnerDisplay() {
	if (row[index].includes("Computer wins!")) {computerWins++;}
	else if (row[index].includes("Player wins!")) {playerWins++;}
	else if (row[index].includes("No one wins!")) {drawWins++;}
}

function choiceCounter() {
	if (row[index].includes("Rock")) {rockCount++;}
	if (row[index].includes("rock")) {rockCount++;}
	if (row[index].includes("Paper")) {paperCount++;}
	if (row[index].includes("paper")) {paperCount++;}
	if (row[index].includes("Scissors")) {scissorsCount++;}
	if (row[index].includes("scissors")) {scissorsCount++;}
	if (row[index].includes("Lizard")) {lizardCount++;}
	if (row[index].includes("lizard")) {lizardCount++;}
	if (row[index].includes("Spock")) {spockCount++;}
	if (row[index].includes("spock")) {spockCount++;}
}

function calculateWinner() {
	userSelection = document.getElementById("playerOption").value;
	index = Math.floor(Math.random() * 5);
	row = userArray[userSelection];
	column = computerSelection[index];
	document.getElementById("txt").innerHTML = row[index];
	counter();
	winnerDisplay();
	choiceCounter();
	document.getElementById("numberOfComputerWins").innerHTML = "Computer has won " + computerWins + " times (" + parseFloat((computerWins / count) * 100).toFixed(2) + "% win rate)";
	document.getElementById("numberOfPlayerWins").innerHTML = "Player has won " + playerWins + " times (" + parseFloat((playerWins / count) * 100).toFixed(2) + "% win rate)";
	document.getElementById("numberOfDraws").innerHTML = "Player has drawn " + drawWins + " times (" + parseFloat((drawWins / count) * 100).toFixed(2) + "% draw rate)";
	document.getElementById("numberOfClicks").innerHTML = "You have played " + count + "/30 times.";
	document.getElementById("numberOfRocks").innerHTML = rockCount + " Rocks have been played (" + parseFloat((rockCount / (rockCount + paperCount + scissorsCount + lizardCount + spockCount)) * 100).toFixed(2) + "% rock rate)";
	document.getElementById("numberOfPapers").innerHTML = paperCount + " Papers have been played (" + parseFloat((paperCount / (rockCount + paperCount + scissorsCount + lizardCount + spockCount)) * 100).toFixed(2) + "% paper rate)";
	document.getElementById("numberOfScissors").innerHTML = scissorsCount + " Scissors have been played (" + parseFloat((scissorsCount / (rockCount + paperCount + scissorsCount + lizardCount + spockCount)) * 100).toFixed(2) + "% scissor rate)";
	document.getElementById("numberOfLizards").innerHTML = lizardCount + " Lizards have been played (" + parseFloat((lizardCount / (rockCount + paperCount + scissorsCount + lizardCount + spockCount)) * 100).toFixed(2) + "% lizard rate)";
	document.getElementById("numberOfSpocks").innerHTML = spockCount + " Spocks have been played (" + parseFloat((spockCount / (rockCount + paperCount + scissorsCount + lizardCount + spockCount)) * 100).toFixed(2) + "% Spock rate)";
}

function reset() {
	count = computerWins = playerWins = drawWins = 0;
	thisPersonWins = userSelection = column = "";
	row = index = 0;
	rockCount = paperCount = scissorsCount = lizardCount = spockCount = 0;
	document.getElementById("numberOfComputerWins").innerHTML = "Computer has won " + computerWins + " times (0.00% win rate)";
	document.getElementById("numberOfPlayerWins").innerHTML = "Player has won " + playerWins + " times (0.00% win rate)";
	document.getElementById("numberOfDraws").innerHTML = "Player has drawn " + drawWins + " times (0.00% draw rate)";
	document.getElementById("numberOfClicks").innerHTML = "You have played " + count + "/30 times.";
	document.getElementById("txt").innerHTML = "Not played yet. No one wins!";
	document.getElementById("numberOfRocks").innerHTML = rockCount + " Rocks have been played (0.00% rock rate)";
	document.getElementById("numberOfPapers").innerHTML = paperCount + " Papers have been played (0.00% paper rate)";
	document.getElementById("numberOfScissors").innerHTML = scissorsCount + " Scissors have been played (0.00% scissor rate)";
	document.getElementById("numberOfLizards").innerHTML = lizardCount + " Lizards have been played (0.00% lizard rate)";
	document.getElementById("numberOfSpocks").innerHTML = spockCount + " Spocks have been played (0.00% Spock rate)";
	document.getElementById("playButton").disabled = false;
}