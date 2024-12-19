import Choice, {
    userWin,
    computerWin,
    tie,
    score,
    rockEntity,
    paperEntity,
    scissorEntity,
    Entity_Number
} from "./variables.js";

import {
    determineGameStatus,
    getSelectedEntity,
    determineWinStatus,
    setScore,
    randomSelectEntity
} from "./utility.js"





// Instances
const userChoice = new Choice(0, 1, 0)
const computerChoice = randomSelectEntity(1, Entity_Number)

// console.log(computerChoice)

if (!localStorage.getItem("SCORE")) {
    console.log("store for the first time only")
    localStorage.setItem("SCORE", JSON.stringify(score))
    console.log(localStorage.getItem("SCORE"))
}



const status = determineGameStatus(userChoice, computerChoice)
if (status && status === userWin) {
    console.log("Show userwin page")
    setScore(status)
}
else if (status && status === computerWin) {
    console.log("show computerWin page")
    setScore(status)
}

else {
    console.log("show Tie page")
}


















