console.log("Lets build this awesome game!!");

function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3);
    console.log(`Random Number ${randomNumber} and gets values as ${choices[randomNumber]}`);
    return choices[randomNumber];
}

const gameChoices = document.getElementsByClassName("choice");
for(let i = 0; i < gameChoices.length; i++){
    gameChoices[i].addEventListener("click", function(e){
        // e.target.parentNode.classList.add('active');
        let userSelected = e.target.parentNode.getAttribute("value");
        startGame(userSelected);
    })
}

function startGame(userChoice){
    const computerChoice = getComputerChoice();
    selectWinner(userChoice, computerChoice);
}

function selectWinner(userChoice, computerChoice){
    let userCount = parseInt(document.querySelector(".user-score").innerText);
    let computerCount = parseInt(document.querySelector(".computer-score").innerText);

    const criteria = `${userChoice}-${computerChoice}`;
    console.log(`Winner Criteria : ${criteria}`);
    switch(criteria){
        case "paper-rock":
        case "scissors-paper":
        case "rock-scissors":
            document.querySelector(".user-selected").setAttribute("src", `images/${userChoice}.png`);
            document.querySelector(".computer-selected").setAttribute("src", `images/${computerChoice}.png`);
            document.querySelector(".winner-text").classList.remove("hidden");

            if(document.querySelector(".winner-text").classList.contains("computer-win")){
                document.querySelector(".winner-text").classList.remove("computer-win");
            }

            document.querySelector(".winner-text").classList.add("user-win");
            document.querySelector(".winner-text > span").innerText = `You choose ${userChoice}. You Won! 🥳🥳`;
            userCount++;
            document.querySelector(".user-score").innerText = userCount;
            break;
        case "rock-paper":
        case "paper-scissors":
        case "scissors-rock":
            document.querySelector(".user-selected").setAttribute("src", `images/${userChoice}.png`);
            document.querySelector(".computer-selected").setAttribute("src", `images/${computerChoice}.png`);
            document.querySelector(".winner-text").classList.remove("hidden");

            if(document.querySelector(".winner-text").classList.contains("user-win")){
                document.querySelector(".winner-text").classList.remove("user-win");
            }

            document.querySelector(".winner-text").classList.add("computer-win");
            document.querySelector(".winner-text > span").innerText = `Computer chooses ${computerChoice}. You Lose! 😥😥`;
            computerCount++;
            document.querySelector(".computer-score").innerText = computerCount;
            break;
        case "rock-rock":
        case "paper-paper":
        case "scissors-scissors":
            document.querySelector(".user-selected").setAttribute("src", `images/${userChoice}.png`);
            document.querySelector(".computer-selected").setAttribute("src", `images/${computerChoice}.png`);
            document.querySelector(".winner-text").classList.remove("hidden");

            if(document.querySelector(".winner-text").classList.contains("user-win")){
                document.querySelector(".winner-text").classList.remove("user-win");
            }
            else if(document.querySelector(".winner-text").classList.contains("computer-win")){
                document.querySelector(".winner-text").classList.remove("computer-win");
            }

            document.querySelector(".winner-text > span").innerText = `It's a Draw. You both selected same thing.`;
            break;
    }
}


