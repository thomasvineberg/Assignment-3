/*eslint-env browser*/

var yourChoice = window.prompt("Enter Rock, Paper, or Scissors.");

var compChoice = Math.random();

if (compChoice >= 0 && compChoice < 0.33) {
    compChoice = "Rock";
} else if (compChoice >= 0.33 && compChoice < 0.66) {
    compChoice = "Paper";
} else if (compChoice >= 0.66) {
    compChoice = "Scissors";
}

if (compChoice === "Rock" && yourChoice === "Rock") {
    window.alert("You both chose Rock - it's a tie.");
} else if (compChoice === "Rock" && yourChoice === "Paper") {
    window.alert("You chose Paper, the computer chose Rock - you win!");
} else if (compChoice === "Rock" && yourChoice === "Scissors") {
    window.alert("You chose Scissors, the computer chose Rock - you lose!");
} else if (compChoice === "Paper" && yourChoice === "Paper") {
    window.alert("You both chose Paper - it's a tie.");
} else if (compChoice === "Paper" && yourChoice === "Rock") {
    window.alert("You chose Rock, the computer chose Paper - you lose!");
} else if (compChoice === "Paper" && yourChoice === "Scissors") {
    window.alert("You chose Scissors, the computer chose Paper - you lose!");
} else if (compChoice === "Scissors" && yourChoice === "Scissors") {
    window.alert("You both chose Scissors - it's a tie.");
} else if (compChoice === "Scissors" && yourChoice === "Paper") {
    window.alert("You chose Paper, the computer chose Scissors - you lose!");
} else if (compChoice === "Scissors" && yourChoice === "Rock") {
    window.alert("You chose Rock, the computer chose Scissors - you win!");
} else {
    window.alert("Please enter Rock, Paper or Scissors!");
}
