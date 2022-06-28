let playerPoints = 0;
let computerPoints = 0;
game();
function computerPlay()
{
    let arr = ["Rock","Paper","Scrissors"];
    return arr[Math.floor(Math.random() * 3)];
}
function conductRound(playerSelection,computerSelection)
{
    const playerSelectionLow = playerSelection.toLowerCase();
    const computerSelectionLow = computerSelection.toLowerCase();
    if(playerSelectionLow == computerSelectionLow)
    {
        playerPoints++;
        return "Draw, Play Again."
    }
    else if(playerSelectionLow=="rock" && computerSelectionLow=="scissors")
    {
        playerPoints++;
        return "Player Won!";
    }
    else if(playerSelectionLow=="paper" && computerSelectionLow=="rock")
    {
        playerPoints++;
        return "Player Won!";
    }
    else if(playerSelectionLow=="scissors" && computerSelectionLow=="paper")
    {
        playerPoints++;
        return "Player Won!";
    }
    else
    {
        computerPoints++;
        return "Computer Won!";
    }
}
function game()
{
    for(let i =0;i<5;i++)
    {
        let playerselection = prompt("Enter your choice.")
        let computerSelection = computerPlay();
        console.log("Computer selection :" + computerSelection);
        console.log(conductRound(playerselection,computerSelection));
    }
}