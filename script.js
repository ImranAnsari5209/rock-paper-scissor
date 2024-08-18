let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreUpd = document.querySelector("#user-score");
const compScoreUpd = document.querySelector("#comp-score");


const showWinner = (userWin, choiceId, compChoice) => {
    if (userWin) {

        userScore++;
        userScoreUpd.innerText = userScore;
        msg.innerText = `You Win! Your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";

    } else {
        compScore++;
        compScoreUpd.innerText = compScore;
        msg.innerText = `You losse! Your ${choiceId} beaten by ${compChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randomIdx = Math.floor(Math.random() * 3)
    return options[randomIdx]
};


const draw = () => {
    console.log("The game was draw")
    msg.innerText = "Game was draw";
    msg.style.backgroundColor = "rgb(8, 8, 66)"
};

const play = (choiceId) => {
    console.log("choice clicked = ", choiceId)

    //now generate comp's choice
    const compChoice = genCompChoice();
    console.log("computer choice = ", compChoice)

    if (choiceId === compChoice) {
        draw();
    } else {
        let userWin = true;
        if (choiceId === "rock") {
            userWin = compChoice === "scissor" ? true : false;
        } else if (choiceId = "paper") {
            userWin = compChoice === "rock" ? true : false;
        } else {
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin, choiceId, compChoice);
    }

};

choice.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click", () => {
        const choiceId = choice.getAttribute("id")
        play(choiceId);
    })
});

