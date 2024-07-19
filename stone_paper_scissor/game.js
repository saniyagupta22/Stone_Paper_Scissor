let userScore = 0
let compScore = 0

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user");
const compScorePara = document.querySelector("#comp");

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice = () =>{
    const options = ['stone', 'paper', 'scissor'];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const playGame = (userChoice) =>{
    //Generate comp choice
    const compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw
        draw();
    }
    else{
        let userWin = true;
        if(userChoice === "stone"){
            // paper, scissor
            userWin = compChoice === "paper" ? false : true;  
        }
        else if(userChoice === "paper"){
            // scissor, stone
            userWin = compChoice === "scissor" ? false : true;  
        }
        else{
            // paper, stone
            userWin = compChoice === "stone" ? false : true;  
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

const showWinner = (userWin, userChoice, compChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You Win!.Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const draw = () =>{
    msg.innerText = "Game was Draw.Play Again";
    msg.style.backgroundColor = "rgb(246, 143, 143)";
};








