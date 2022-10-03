/* First implementation
 * didn't work as intended 
 * so made some changes to
 * get it to work*/

/*function getComputerChoice(){
    computerChoice = Math.floor(Math.random()*3)+1;
    if(computerChoice === 1){
        computerChoice = "rock";
    } else if(computerChoice === 2) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function getPlayerChoice(){
    playerChoice = window.prompt("Pick rock paper or scissors")
    return playerChoice;
}

function playGame(computerChoice,playerChoice){
    let outcome = "";
    computerChoice= getComputerChoice();
    playerChoice= getPlayerChoice();
    playerChoice = playerChoice.toLowerCase();
    switch(true){
        case computerChoice === "rock" && playerChoice==="scissors":
            return outcome += computerChoice + " beats " + playerChoice + " you lose!" ;
            break;
        case computerChoice === "paper" && playerChoice ==="rock":
                return outcome += computerChoice + " beats " + playerChoice + " you lose!" ;
                break;
            
        case computerChoice === "scissors" && playerChoice === "paper":
                return outcome += computerChoice + " beats " + playerChoice + " you lose!" ;
                break;
            
        case playerChoice=== "rock" && computerChoice ==="scissors":
                return outcome += playerChoice + " beats " + computerChoice + " you win!" ;
                break;
            
        case playerChoice === "paper" && computerChoice ==="rock": 
                return outcome += playerChoice + " beats " + computerChoice + " you win!" ;
                break;
            
        case playerChoice=== "scissors" && computerChoice ==="paper":
                return outcome += playerChoice + " beats " + computerChoice + " you win!" ;
                break;
            
            
        default:
            //if both choices are the same
            outcome += "It's a tie! Computer chose " + computerChoice + " and you chose " + playerChoice;
            return outcome;

    }
}

function game(){
    playerWins=0;
    computerWins=0;
    
    while(playerWins <5 && computerWins <5){
        var outcome = (playGame());
        console.log(outcome);
        if(outcome.includes(" you win!")){
            playerWins++;
        }
        else if(outcome.includes(" you lose!")){
            computerWins++;
        }
        else {
            playerWins+=0;
            computerWins+=0;
        }
        console.log("Player Wins: " + playerWins
        + " Computer Wins: " + computerWins);

        
    }  
    if(playerWins === 5 ){
        console.log("You won best out of 5!");
    }
    if(computerWins===5){
        console.log("You lost best out of 5!");
    }
}*/
let playerScore = 0
let computerScore = 0
const buttons = document.querySelectorAll('input')

function computerPlay() {
    let choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(Math.random() * choices.length)]
}

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
}

function playRound(playerSelection) {
    let computerSelection = computerPlay()
    let result = ""

    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
        
        playerScore += 1
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (playerScore == 5) {
            result += '<br><br>You won the game! Reload the page to play again'
            disableButtons()
        }
    }
    else if (playerSelection == computerSelection) {
        result = ('It\'s a tie. You both chose ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
    }
    else {
        computerScore += 1
        result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

        if (computerScore == 5) {
            result += '<br><br>I won the game! Reload the page to play again'
            disableButtons()
        }
    }

    document.getElementById('result').innerHTML = result
    return
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})
