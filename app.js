import Choice, {
    userWin,
    computerWin,
    tie,
    score,
    Entity_Number,
    imageObj,
    borderColorObj,
    winStatus,
    looseStatus,
    tieStatus
} from "./variables.js";

import {
    determineGameStatus,
    setScore,
    randomSelectEntity
} from "./utility.js"



// & -------------------  DOM Elements  --------------------------


const ruleBtn = document.querySelector(".rules-main > .rules-container > .rule-btn")
const nextBtn = document.querySelector(".rules-main > .next-btn")
const rulePopUp = document.querySelector(".rules-main > .rules-container > .rules")
const closeRuleBtn = document.querySelector(".rules-main > .rules-container > .rules > .close-btn")

const rock = document.querySelector(".options #rock")
const paper = document.querySelector(".options #paper")
const scissor = document.querySelector(".options #scissor")

const headerSection = document.querySelector(".header")
const optionSection = document.querySelector(".options")
const resultsection = document.querySelector(".resultSection")
const hurraySection = document.querySelector(".hurray-section")

const userChosenEntity = document.querySelector(".resultSection #userChosenEntity .entity-inner")
const userChosenImage = document.querySelector(".resultSection #userChosenEntity img")

const pcChosenEntity = document.querySelector(".resultSection #pcChosenEntity .entity-inner")
const pcChosenImage = document.querySelector(".resultSection #pcChosenEntity img")

const playAgainBtn_result = document.querySelector(".resultSection .playAgain-btn")
const playAgainBtn_hurray = document.querySelector(".hurray-section .playAgain-btn")



const userScore = document.querySelector(".header .pill-container .score-pill > #user-score")
const pcScore = document.querySelector(".header .pill-container .score-pill > #pc-score")

const statusElement = document.querySelector(".resultSection > .status")







// & -------------------  Event Listeners  --------------------------


ruleBtn?.addEventListener("click", () => {
    rulePopUp.classList.remove("hide-rules")
})

closeRuleBtn?.addEventListener("click", () => {
    rulePopUp.classList.add("hide-rules")
})

playAgainBtn_result.addEventListener("click", () => {

    hideActiveHalo()

    if (statusElement.querySelector(".text-2").classList.contains("hide-text2")) {
        statusElement.querySelector(".text-2").classList.remove("hide-text2")
    }

    if (playAgainBtn_result.textContent === "Replay") {
        playAgainBtn_result.textContent = "Play again"
    }

    statusElement.querySelector(".text-1").style.margin = "0px"
    nextBtn.classList.add("hide-nextbtn")
    resultsection.classList.toggle("hide-resultSection")
    optionSection.classList.toggle("hide-options")
})

playAgainBtn_hurray.addEventListener("click", () => {

    hideActiveHalo()

    hurraySection.classList.toggle("hide-HurraySection")
    headerSection.classList.toggle("hide-header")
    optionSection.classList.toggle("hide-options")
})

nextBtn.addEventListener("click", () => {
    headerSection.classList.toggle("hide-header")
    resultsection.classList.toggle("hide-resultSection")
    hurraySection.classList.toggle("hide-HurraySection")
    nextBtn.classList.add("hide-nextbtn")
})



// Select rock / paper / scissor

rock.addEventListener("click", () => {
    const userChoice = new Choice(1, 0, 0)
    optionSection.classList.toggle("hide-options")
    renderPage(userChoice)
})

paper.addEventListener("click", () => {
    const userChoice = new Choice(0, 1, 0)
    optionSection.classList.toggle("hide-options")
    renderPage(userChoice)
})

scissor.addEventListener("click", () => {
    const userChoice = new Choice(0, 0, 1)
    optionSection.classList.toggle("hide-options")
    renderPage(userChoice)
})




// & -------------------  LOGIC  --------------------------

// set initial score in local storage at starting of game
setInitialScore()

// fetch initial score from local storage at starting of game
fetchScore()








function renderPage(userChoice) {

    const computerChoice = randomSelectEntity(1, Entity_Number)

    let { status, userSelectedEntity, computerSelectedEntity } = determineGameStatus(userChoice, computerChoice)

    const userEntity = document.querySelector(".resultSection #userChosenEntity")
    const pcEntity = document.querySelector(".resultSection #pcChosenEntity")

    if (!userEntity.classList.contains("disable-pointerEvents") && !pcEntity.classList.contains("disable-pointerEvents")) {
        userEntity.classList.add("disable-pointerEvents")
        pcEntity.classList.add("disable-pointerEvents")
    }

    if (status && status === userWin) {
        statusLogic(status, userSelectedEntity, computerSelectedEntity)
    }
    else if (status && status === computerWin) {
        statusLogic(status, userSelectedEntity, computerSelectedEntity)
    }

    else {
        statusLogic(status, userSelectedEntity, computerSelectedEntity)
    }
}


function statusLogic(status, userSelectedEntity, computerSelectedEntity) {

    setScore(status)
    fetchScore()

    userChosenImage.src = imageObj[userSelectedEntity]
    pcChosenImage.src = imageObj[computerSelectedEntity]

    userChosenEntity.style.borderColor = borderColorObj[userSelectedEntity]
    pcChosenEntity.style.borderColor = borderColorObj[computerSelectedEntity]

    if (status === userWin) {
        nextBtn.classList.remove("hide-nextbtn")
        statusElement.querySelector(".text-1").textContent = winStatus
        userChosenEntity.parentElement.parentElement.classList.remove("hide-Halo")
    }

    if (status === computerWin) {
        statusElement.querySelector(".text-1").textContent = looseStatus
        pcChosenEntity.parentElement.parentElement.classList.remove("hide-Halo")
    }


    if (status === tie) {
        statusElement.querySelector(".text-1").textContent = tieStatus
        playAgainBtn_result.textContent = "Replay"

        statusElement.querySelector(".text-1").style.margin = "0px 0px 16px 0px"
        statusElement.querySelector(".text-2").classList.add("hide-text2")
    }


    resultsection.classList.toggle("hide-resultSection")

}


function hideActiveHalo() {
    const childrenNodes = Array.from(document.querySelector(".resultSection").childNodes).filter((node) => node.nodeName === "DIV")
    childrenNodes.forEach((node) => {
        if (node.classList.contains("chosen-entity") && !node.classList.contains("hide-Halo")) {
            node.classList.add("hide-Halo")
        }
    })
}


function setInitialScore() {
    if (!localStorage.getItem("SCORE")) {
        // console.log("store for the first time only...")
        localStorage.setItem("SCORE", JSON.stringify(score))
    }
}


function fetchScore() {
    if (localStorage.getItem("SCORE")) {
        const score = JSON.parse(localStorage.getItem("SCORE"))
        userScore.textContent = score.userScore
        pcScore.textContent = score.computerScore
    }
}













