let wins = 0;
let losses = 0;
var choose = '';
const container = document.querySelector(".container");
if ((wins <5) && (losses<5)){
    const option = document.querySelectorAll("button");
    option.forEach(option =>{
        option.addEventListener('click', (e) =>{
            choose = e.target.className;
            container.replaceChildren();
            let yourChoice = document.createElement('div');
            yourChoice.classList.add("yourChoice");
            yourChoice.textContent = `You have chosen ${choose}`;
            container.appendChild(yourChoice);
            playRound(choose, computerPlay());
            
        })
    })
    function computerPlay(){
        let selection = Math.floor(Math.random()*3);
        let computerContent = document.createElement('div');
        computerContent.classList.add("computerContent");
        if (selection == 0){
            object = "rock";
            computerContent.textContent = `Computer has chosen ${object}`;
            }
        else if(selection == 1){
            object="paper";
            computerContent.textContent = `Computer has chosen ${object}`;
            }
        else {
            object="scissors";
            computerContent.textContent = `Computer has chosen ${object}`;
        }
        container.appendChild(computerContent); 
        return object;     
    }
    function playRound(playerSelection, computerSelection){
        let yourSelection = document.createElement('div');
        yourSelection.classList.add("yourSelection");
        if (choose == computerSelection){
            yourSelection.textContent = "It's a tie";
            
            //content.textContent = "It's a tie";
        }else if ((choose == "rock") && (computerSelection == "scissors")){
            //console.log("You win this round");
            yourSelection.textContent = "You win this round";
            wins++
        }else if ((choose == "scissors") && (computerSelection == "paper")){
            //console.log("You win this round");
            yourSelection.textContent = "You win this round";
            wins++
        }else if ((choose == "paper") && (computerSelection == "rock")){
            //console.log("You win this round");
            yourSelection.textContent = "You win this round";
            wins++
        }else{
            //console.log("You lost this round")
            yourSelection.textContent = "You lost this round";
            losses++
        }
        container.appendChild(yourSelection);
        let winsLosses = document.createElement('div');
        winsLosses.classList.add("winsLosses");
        winsLosses.textContent =`Wins: ${wins}, Losses: ${losses}`
        if (wins == 5){
            winsLosses.textContent = "You won the game !!!"; 
        }else if (losses == 5){
            winsLosses.textContent = "The computer won the game!!!";
        } 
        container.appendChild(winsLosses);
         
    }
    
    
}