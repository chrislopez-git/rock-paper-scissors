            let playerWins = 0;
            let cpuWins = 0;
            let draws = 0;
            let currentGame = "";

            function computerPlay() {
                let myNumber = Math.floor(Math.random() * 3);
                if(myNumber == 0){
                    return("ROCK");
                }
                else if(myNumber == 1){
                    return("PAPER");
                }
                else if(myNumber == 2){
                    return("SCISSORS");
                }
            }
        
            function playRound(playerSelection, computerSelection) {
                var areEqual = playerSelection.toUpperCase() === computerSelection;
                console.log("passed button id is " + playerSelection);
                console.log("computer play is " + computerSelection);
                if(playerSelection.toUpperCase() === "ROCK"){
                    if(computerSelection === "SCISSORS"){
                        console.log("You win! Rock beats Scissors");
                        playerWins++;
                        return("You win! Rock beats Scissors");
                    }
                    else if(computerSelection === "PAPER"){
                        cpuWins++;
                        return("You lose :( Paper beats Rock");
                    }
                    else if(computerSelection === "ROCK"){
                        draws++;
                        return("It's a draw!");
                    }
                }
                else if(playerSelection.toUpperCase() === "SCISSORS"){
                    if(computerSelection === "SCISSORS"){
                        draws++;
                        return("draw!");
                    }
                    else if(computerSelection === "PAPER"){
                        playerWins++;
                        return("You win :) Scissors cuts paper!");
                        
                    }
                    else if(computerSelection === "ROCK"){
                        cpuWins++;
                        return("You lose! rock crushes your scissors!");
                    }
                }
                else if(playerSelection.toUpperCase() === "PAPER"){
                    if(computerSelection === "SCISSORS"){
                        cpuWins++;
                        return("You lose and get cut up!");
                    }
                    else if(computerSelection === "PAPER"){
                        draws++;
                        return("It's a draw!");
                    }
                    else if(computerSelection === "ROCK"){
                        playerWins++;
                        return("You win! The evil of rock is consumed by paper!");
                    }
                }
    
                else{
                    return("You didn't enter a correct input (whoops!)")
                }
                
            }
    
            function game(numGames) {
                for(var i = 0; i < numGames; i++){
                    var playerSelection = prompt("Please enter your choice", "Rock/Paper/Scissors");
                    let computerSelection = computerPlay();
                    console.log(playRound(playerSelection, computerSelection));
    
                }
                return;
    
            }
            // nodelist "buttons"
            const buttons =document.querySelectorAll('button');
            console.log(buttons); //check nodelist

            buttons.forEach((button) => {

                button.addEventListener('click', () => {
                    // console.log(playRound(button.id, computerPlay()));
                    currentGame = playRound(button.id, computerPlay());
                    resultBox.textContent = currentGame;
                    scoreBox.textContent = "User Wins: " + playerWins + ", CPU Wins: " + cpuWins
                    + " Draws: " + draws;
                });

            });
        
        
            // choose the dom div for "results" and update last hand and total tally
            const resultBox = document.querySelector('#score');
            const scoreBox = document.querySelector('#points');