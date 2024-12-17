//gets the computer choice 
function getComputerChoice(){
    let num = Math.round(Math.random()); 
    console.log(num); 
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
//deals with palying the round and updating the score
let humanScore = 0; 
let computerScore = 0; 
const hs = document.querySelector(".human-score");
const cs = document.querySelector(".computer-score"); 

function playRound(humanChoice, computerChoice){
    if(humanScore == 5 || computerScore == 5){
        return; 
    }
    if(humanChoice == computerChoice){
        console.log("Draw!"); 
    }
    else if(computerChoice === "rock" && humanChoice === "paper"){
        console.log("You win, paper beats rock");
        humanScore++;
        hs.textContent = humanScore; 
    }
    else if(computerChoice === "paper" && humanChoice === "scissors"){
        console.log("You win. scissors beats paper"); 
        humanScore++; 
        hs.textContent = humanScore;
    }
    else if(computerChoice === "scissors" && humanChoice === "rock"){
        console.log("You win. rock beats scissors");
        humanScore++; 
        hs.textContent = humanScore;
    }
    else if(computerChoice === "paper" && humanChoice === "rock"){
        console.log("You loose, paper beats rock");
        computerScore++; 
        cs.textContent = computerScore; 
    }
    else if(computerChoice === "scissors" && humanChoice === "paper"){
        console.log("You loose. scissors beats paper"); 
        computerScore++; 
        cs.textContent = computerScore; 
    }
    else if(computerChoice === "rock" && humanChoice === "scissors"){
        console.log("You loose. rock beats scissors");
        computerScore++;
        cs.textContent = computerScore;  
    }
}

//here we add the onclick listeners for the buttons depending on their ids
let humanChoice = "none"; 
let computerChoice = "none"; 
const hThing = document.querySelector("#human");
const cThing = document.querySelector("#computer");

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playAgain = document.querySelector("#playAgain"); 

hThing.textContent = humanChoice; 
cThing.textContent = computerChoice; 

rock.onclick = () => {
    humanChoice="rock"; 
    computerChoice = getComputerChoice(); 
    hThing.textContent = humanChoice; 
    cThing.textContent = computerChoice; 
    playRound(humanChoice, computerChoice);
}
paper.onclick = () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice(); 
    hThing.textContent = humanChoice; 
    cThing.textContent = computerChoice; 
    playRound(humanChoice, computerChoice); 
}
scissors.onclick = () => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice(); 
    hThing.textContent = humanChoice; 
    cThing.textContent = computerChoice; 
    playRound(humanChoice, computerChoice);
}
playAgain.onclick = () =>{
    humanChoice = "none";
    computerChoice = "none";
    hThing.textContent = humanChoice; 
    cThing.textContent = computerChoice; 
    humanScore = 0;
    computerScore = 0; 
    hs.textContent = humanScore;
    cs.textContent = computerScore; 
}