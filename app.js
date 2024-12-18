let computerScore = 0;
let userScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convert(letter) {
    if (letter === "r") return "Rock";
    else if (letter === "p") return "Paper";
    else return "Scissors";
}

function wins(userChoice, computerChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} (user) beats ${convert(computerChoice)} (comp). You win! 🎉`;
    const choiceDiv = document.getElementById(userChoice);
    choiceDiv.classList.add("green-glow");

    // Remove the green-glow class after 300ms
    setTimeout(() => choiceDiv.classList.remove("green-glow"), 1000);
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(computerChoice)} (comp) beats ${convert(userChoice)} (user). You lose! 😢 `;

    
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convert(userChoice)} (user) ties with ${convert(computerChoice)} (comp). It's a draw! 🤝`;
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            wins(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", function () {
        game("r");
    });
    paper_div.addEventListener("click", function () {
        game("p");
    });
    scissors_div.addEventListener("click", function () {
        game("s");
    });
}

main();
