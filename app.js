let humanScore = 0;
let aiScore = 0;
const humanScoreSpan = document.getElementById("human-score");
const aiScoreSpan = document.getElementById("ai-score");
const scoreBoardDiv = document.querySelector(".scores");
const resultDiv = document.querySelector(".results > p");
const paperDiv = document.getElementById("paper");
const rockDiv = document.getElementById("rock");
const scissorsDiv = document.getElementById("scissors");




function getComputerPlay() {
    const choices = ["paper", "rock", "scissors"];
    const randomChoices = [Math.floor(Math.random()*3)];
    return choices[randomChoices];
}
getComputerPlay();

function main() {
    paperDiv.addEventListener('click', function() {
        game("paper");
    });
    rockDiv.addEventListener('click', function() {
        game("rock");
    });
    scissorsDiv.addEventListener('click', function() {
        game("scissors");
    })
}
main();

function game(humanChoice) {
    const aiChoice = getComputerPlay();
    switch (humanChoice + aiChoice) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
            winner(humanChoice, aiChoice);
            break;
        case "scissorsrock":
        case "paperscissors":
        case "rockpaper":
            losses(humanChoice, aiChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
            draw(humanChoice, aiChoice);
            break;
    }

}
game();
let humanChoice = game(); 
let aiChoice = getComputerPlay();

function winner(human, ai) {
    humanScore++;
    humanScoreSpan.innerHTML = humanScore;
    aiScoreSpan.innerHTML = aiScore;
    resultDiv.innerHTML = humanChoice + " destroys " + aiChoice + " You win! Run it back.";
}

function losses(human, ai) {
    aiScore++;
    aiScoreSpan.innerHTML = aiScore;
    humanScoreSpan.innerHTML = humanScore;
    resultDiv.innerHTML = humanChoice + " gets destroyed by " + aiChoice + " You lose! Try again.";
}

function draw(human, ai) {
    resultDiv.innerHTML = humanChoice + " you both can do better " + aiChoice + " It was a draw! Try again.";

}



