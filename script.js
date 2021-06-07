            let playerWins = 0;
            let cpuWins = 0;
            let draws = 0;
            let currentGame = "";
            // 0 = win, 1 = lose, 2 = draw. 3 = error
            let status = 0;

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
                        status = 0;
                        return("You win! Rock beats Scissors");
                    }
                    else if(computerSelection === "PAPER"){
                        cpuWins++;
                        status = 1;
                        return("You lose :( Paper beats Rock");
                    }
                    else if(computerSelection === "ROCK"){
                        draws++;
                        status = 2;
                        return("It's a draw!");
                    }
                }
                else if(playerSelection.toUpperCase() === "SCISSORS"){
                    if(computerSelection === "SCISSORS"){
                        draws++;
                        status = 2;
                        return("draw!");
                    }
                    else if(computerSelection === "PAPER"){
                        playerWins++;
                        status = 0;
                        return("You win :) Scissors cuts paper!");
                        
                    }
                    else if(computerSelection === "ROCK"){
                        cpuWins++;
                        status = 1;
                        return("You lose! rock crushes your scissors!");
                    }
                }
                else if(playerSelection.toUpperCase() === "PAPER"){
                    if(computerSelection === "SCISSORS"){
                        cpuWins++;
                        status = 1;
                        return("You lose and get cut up!");
                    }
                    else if(computerSelection === "PAPER"){
                        draws++;
                        status = 2;
                        return("It's a draw!");
                    }
                    else if(computerSelection === "ROCK"){
                        playerWins++;
                        status = 0;
                        return("You win! The evil of rock is consumed by paper!");
                    }
                }
    
                else{
                    status = 3;
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
            const buttons = document.querySelectorAll('button');
            console.log(buttons); //check nodelist

            buttons.forEach((button) => {

                button.addEventListener('click', () => {
                    // console.log(playRound(button.id, computerPlay()));
                    currentGame = playRound(button.id, computerPlay());
                    resultBox.textContent = currentGame;

                    // adding in Giphy API to return a GIF as well based on result
                    var request = new XMLHttpRequest();

                    //request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=D1hY49TOT5GxEGTDXHVliVEbmIaDMjKr&rating=g');

                    switch (status) {
                        case 0:
                            request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=D1hY49TOT5GxEGTDXHVliVEbmIaDMjKr&rating=g&tag=party');
                            console.log("case 0");
                          break;
                        case 1:
                            request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=D1hY49TOT5GxEGTDXHVliVEbmIaDMjKr&rating=g&tag=crying');
                            console.log("case 1");
                          break;
                        case 2:
                            request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=D1hY49TOT5GxEGTDXHVliVEbmIaDMjKr&rating=g&tag=sad');
                            console.log("case 2");
                          break;
                        case 3:
                            request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=D1hY49TOT5GxEGTDXHVliVEbmIaDMjKr&rating=g&tag=error');
                            console.log("case 3");
                            break;
                        default:
                            request.open('GET', 'https://api.giphy.com/v1/gifs/random?api_key=D1hY49TOT5GxEGTDXHVliVEbmIaDMjKr&rating=g&tag=error');
                            console.log("no switch cases");
                            console.log(status);
                            break;
                      }
                    request.onload = function() {
                        var response = request.response;
                        var parsedData = JSON.parse(response);
                        var originalUrl = parsedData.data.images.downsized.url;
                        console.log(parsedData);
                        //Create gif on page
                        // var gif = document.createElement('img');
                        // gif.setAttribute('src', originalUrl);
                        // document.body.appendChild(gif);

                        // replace default image with result
                        document.getElementById("gifresult").src = originalUrl;
                        

                    };
                    request.send();


                    scoreBox.textContent = "User Wins: " + playerWins + ", CPU Wins: " + cpuWins
                    + " Draws: " + draws;
                });

            });
        
        
            // choose the dom div for "results" and update last hand and total tally
            const resultBox = document.querySelector('#score');
            const scoreBox = document.querySelector('#points');