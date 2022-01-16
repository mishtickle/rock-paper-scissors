let wins = 0;
let losses = 0;

while ((wins <5) && (losses<5)){
    computerPlay();
    function computerPlay(){
        let selection = Math.floor(Math.random()*3);
        if (selection == 0){
            object = "rock";
            }
        else if(selection == 1){
            object="paper";
            }
        else {
            object="scissors";
        } 
        return object;     
    }
    let choose = prompt("Choose Rock, Paper, or Scissors");
    choose = choose.toLowerCase();
    console.log(`The object the computer has selected is ${object}`);
    playRound(choose, object);
    function playRound(playerSelection, computerSelection){
        console.log(`You have chosen ${choose}`);
        if (choose == computerSelection){
            console.log("It's a tie");
        }else if ((choose == "rock") && (computerSelection == "scissors")){
            console.log("You win this round");
            wins++
        }else if ((choose == "scissors") && (computerSelection == "paper")){
            console.log("You win this round");
            wins++
        }else if ((choose == "paper") && (computerSelection == "rock")){
            console.log("You win this round");
            wins++
        }else{
            console.log("You lost this round")
            losses ++
        }
    console.log(`Wins: ${wins}, Losses: ${losses}`);
         
    }
    if (wins == 5){
        console.log("You won the game !!!");
    }else if (losses == 5){
        console.log("The computer wins !!!");
    } 
}