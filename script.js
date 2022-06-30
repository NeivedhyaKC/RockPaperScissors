let playerPoints = 0;
let computerPoints = 0;

let buttons = document.querySelectorAll(".container button");
let playerSign = document.querySelector("#playerSign");
let computerSign = document.querySelector("#computerSign");
let modal = document.querySelector(".modal");
let playAgainBtn = document.querySelector("#playAgainBtn");
let overlay = document.querySelector("#overlay");
let firstPara = document.querySelector("#firstPara");
let scoreResult = document.querySelector("#scoreResult");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let roundWinner = document.querySelector("#roundWinner");

overlay.addEventListener("click",closeModal);
playAgainBtn.addEventListener("click",restartGame);

function closeModal()
{
    overlay.classList.remove("active");
    modal.classList.remove("active");
}
function openModal()
{
    if(playerPoints == 5)
    {
        roundWinner.textContent = "You won!";
    }
    else
    {
        roundWinner.textContent = "Computer Won!";
    }

    overlay.classList.add("active");
    modal.classList.add("active");
}
function restartGame()
{
    firstPara.textContent = "Choose your weapon";
    playerPoints = 0;
    computerPoints= 0;
    playerScore.textContent = "PlayerScore: 0";
    computerScore.textContent = "ComputerScore: 0";
    playerSign.textContent = "❔";
    computerSign.textContent = "❔";
    scoreResult.textContent = " First to score 5 points wins the game"; 
    closeModal();
}
buttons[0].addEventListener("click",function()
{
    conductRound("Rock",computerPlay());
    playerSign.textContent = "✊";
},);
buttons[1].addEventListener("click",function()
{
    conductRound("Paper",computerPlay());
    playerSign.textContent = "✋";
},);
buttons[2].addEventListener("click",function()
{
    conductRound("Scissors",computerPlay());
    playerSign.textContent = "✌";
},);
function computerPlay()
{
    let arr = ["Rock","Paper","Scissors"];
    let selected = Math.floor(Math.random() * 3);
    if(arr[selected] == "Rock")
    {
        computerSign.textContent = "✊";
    }
    if(arr[selected] == "Paper")
    {
        computerSign.textContent = "✋";
    }
    if(arr[selected] == "Scissors")
    {
        computerSign.textContent = "✌";
    }
    return arr[selected];
}
function conductRound(playerSelection,computerSelection)
{
    if(playerPoints==5 || computerPoints == 5)
    {
        openModal();
        return;
    }
    const playerSelectionLow = playerSelection.toLowerCase();
    const computerSelectionLow = computerSelection.toLowerCase();

    if(playerSelectionLow == computerSelectionLow)
    {
        firstPara.textContent="Draw!";
        scoreResult.textContent =playerSelection + " ties with " + computerSelection;
    }
    else if(playerSelectionLow=="rock" && computerSelectionLow=="scissors")
    {
        playerPoints++;
        firstPara.textContent = "Player Won!";
        scoreResult.textContent = "Rock beats Scissors";
    }
    else if(playerSelectionLow=="paper" && computerSelectionLow=="rock")
    {
        playerPoints++;
        firstPara.textContent = "Player Won!";
        scoreResult.textContent = "Paper beats Rock";
    }
    else if(playerSelectionLow=="scissors" && computerSelectionLow=="paper")
    {
        playerPoints++;
        firstPara.textContent = "player Won!";
        scoreResult.textContent = "Scissors beats Paper";
    }
    else
    {
        computerPoints++;
        firstPara.textContent = "Computer Won!";
        scoreResult.textContent = computerSelection + " beats " + playerSelection;
    }
    playerScore.textContent = "Player: " + playerPoints;
    computerScore.textContent = "computer: " + computerPoints;

    if(playerPoints==5 || computerPoints == 5)
    {
        openModal();
    }
}
