function playRound(playerSelection, computerSelection)//Recieves the player's and CPU's selections, returns a winner/loser/tie as a string message
{
    if (playerSelection.localeCompare(computerSelection)==0)
        return "Tie game! You both chose "+computerSelection+".";
    else if (playerSelection=="rock")
    {
        if (computerSelection=="scissors")
            return "You win! Rock beats Scissors!";
        else
            return "You lose! Paper beats Rock!"
    }
    else if (playerSelection=="paper")
    {
        if (computerSelection=="rock")
            return "You win! Paper beats Rock!";
        else
            return "You lose! Scissors beats Paper!";
    }
    else
    {
        if (computerSelection=="paper")
            return "You win! Scissors beats Paper!"
        else
            return "You lose! Rock beats Scissors!"
    }
}
function scoreOutput(playerScore, computerScore) //Recieves player's and CPU's scores, returns a string of the result
{
    if (playerScore > computerScore)
        return "You are winning "+playerScore+"-"+computerScore;
    else if(computerScore > playerScore)
        return "You are losing "+computerScore+"-"+playerScore;
    else
        return "The game is tied up "+computerScore+"-"+playerScore;
}
function computerPlay() //Randomly generates the CPU's selection
{
    let num= Math.floor(Math.random() * 3);
    switch (num){
        case 0:
            {
            return "rock";
            break;
            }
        case 1:
            {
            return "paper";
            break;
            }
        case 2:
            {
            return "scissors";
            break;
            }
        default:
            return "error";
    }
}
function reset()
{
    playerScore=0; computerScore=0; outputText.textContent="";
    pScore.textContent=playerScore;
    cScore.textContent=computerScore;
}
function game(playerSelection) //Simulates a game of X rounds, X is decided by the value of "amountOfGames"
{
    if (playerScore==5 || computerScore==5)
    {
        reset();
    }
    let computerSelection,gameResult, amountOfGames;
    computerSelection = computerPlay(); //Randomly generates Rock, Paper or Scissors for the computer
    gameResult = playRound(playerSelection, computerSelection);// Calculates the winner of the game
    if (gameResult.search("win")!=-1)// If "Win" appears in the returned string, player has won
    {
        playerScore++;
        pScore.textContent=playerScore;
    }
    else if(gameResult.search("lose")!=-1)// If "Lose" appears in the returned string, computer has won. Else, it's a tie
    {
        computerScore++;
        cScore.textContent=computerScore;
    }
    console.log(gameResult+" "+scoreOutput(playerScore,computerScore)); //Outputs the winner and the current score
    if (playerScore==5)
        outputText.textContent="You are the winner! The final score is "+playerScore+"-"+computerScore;
    else if (computerScore==5)
        outputText.textContent="You lose! The final score is "+computerScore+"-"+playerScore;
    else
        outputText.textContent=gameResult;

}
const container= document.querySelector('#container');
const buttons = container.querySelectorAll('button');
let playerScore=0, computerScore=0;
const pScore = document.querySelector('#player-score'), cScore = document.querySelector('#computer-score'), outputText=document.querySelector('#output-text')
pScore.textContent=playerScore; cScore.textContent=computerScore;             
buttons.forEach((button) => {
    button.addEventListener('click', () => {
      game(button.id);
    });
  });
const resetButton = document.querySelector('#reset');
resetButton.addEventListener('click',() =>{
         reset();
     });
