function getComputerChoice(){
    let num = Math.floor(Math.random());
    let choice;  
    switch(num){
        case 0:
            choice = "rock";
            break; 
        case 1:
            choice = "paper";
            break;
        default:
            choice = "scissors";
            break; 
    }
    return choice; 
}
function getHumanChoice(){
    let choice = prompt("What do you want to throw (Rock, Paper, Scissors)"); 
    return choice.toLowerCase(); 
}
let humanScore = 0; 
let computerScore = 0; 
function playRound(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        console.log("Draw!"); 
    }
    else if(computerChoice == "rock" && humanChoice == "paper"){
        console.log("You win, paper beats rock");
        humanScore++; 
    }
    else if(computerChoice == "paper" && humanChoice == "scissors"){
        console.log("You win. scissors beats paper"); 
        humanScore++; 
    }
    else if(computerChoice == "scissors" && humanChoice == "rock"){
        console.log("You win. rock beats scissors");
        humanScore++; 
    }
    else if(computerChoice == "paper" && humanChoice == "rock"){
        console.log("You loose, paper beats rock");
        computerScore++; 
    }
    else if(computerChoice == "scissors" && humanChoice == "paper"){
        console.log("You loose. scissors beats paper"); 
        computerScore++; 
    }
    else if(computerChoice == "rock" && humanChoice == "scissors"){
        console.log("You loose. rock beats scissors");
        computerScore++; 
    }
}

for(let i = 0; i < 5; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice(); 
    
    let logStatement = "Your Choice "; 
    let logg = logStatement.concat(humanSelection); 
    console.log(logg); 
    logStatement = "Computer Choice ";
    logg = logStatement.concat(computerSelection);
    console.log(logg); 
    
    playRound(humanSelection, computerSelection); 
    let cont = prompt("Do you want to continue(Yes or No): ");
    if(cont.toLowerCase() == "no")
        break; 
}
console.log("Thanks for playing!"); 
