let humanScore = 0;
let aiScore = 0;
const humanScoreSpan = document.getElementById("human-score");
const aiScoreSpan = document.getElementById("ai-score");
const scoreBoardDiv = document.querySelector(".scores");
const resultDiv = document.queryCommandValue(".results");
const paperDiv = document.getElementById("paper");
const rockDiv = document.getElementById("rock");
const scissorsDiv = document.getElementById("scissors");





function getComputerPlay() {
    const choices = ["paper", "rock", "scissors"];
    const randomChoices = choices[Math.floor(Math.random()*3)];
    return randomChoices;
}

function winner() {
    humanScore++;
}

function losses() {
    aiScore++;
}

function game(humanChoice) {
    const aiChoice = getComputerPlay();
    switch (humanChoice + aiChoice) {
        case "rock, scissors":
        case "paper, rock":
        case "scissors, paper":
            console.log("Human Wins!");
            break;
        case "scissors. rock":
        case "paper, scissors":
        case "rock, paper":
            console.log("AI Wins!");
            break;
        case "rock, rock":
        case "paper, paper":
        case "scissors, scissors":
            console.log("Draw!");
            break;
    }

}

paperDiv.addEventListener('click', function() {
    game("paper");
});

rockDiv.addEventListener('click', function() {
    game("rock");
});

scissorsDiv.addEventListener('click', function() {
    game("scissors");
});