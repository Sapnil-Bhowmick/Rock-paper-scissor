import Choice, {
    rockEntity,
    paperEntity,
    scissorEntity,
    userWin,
    computerWin,
    tie
} from "./variables.js"


export function determineGameStatus(userChoice, computerChoice) {

    const userSelectedEntity = getSelectedEntity(userChoice)
    const computerSelectedEntity = getSelectedEntity(computerChoice)

    const status = determineWinStatus(userSelectedEntity, computerSelectedEntity)
    // console.log(status)
    return status

}

export function getSelectedEntity(choiceObj) {
    const selectedEntity = Object.keys(choiceObj).find((key) => {
        if (choiceObj[key] === 1) {
            return key
        }
    })

    return selectedEntity
}

export function determineWinStatus(userSelectedEntity, computerSelectedEntity) {
    /* console.log(userSelectedEntity , computerSelectedEntity) */
    if (userSelectedEntity === computerSelectedEntity) {
        return tie
    }

    if (userSelectedEntity === rockEntity) {
        if (computerSelectedEntity === paperEntity) {
            return computerWin
        }
        if (computerSelectedEntity === scissorEntity) {
            return userWin
        }
    }

    if (userSelectedEntity === paperEntity) {
        if (computerSelectedEntity === rockEntity) {
            return userWin
        }
        if (computerSelectedEntity === scissorEntity) {
            return computerWin
        }
    }

    if (userSelectedEntity === scissorEntity) {
        if (computerSelectedEntity === rockEntity) {
            return computerWin
        }
        if (computerSelectedEntity === paperEntity) {
            return userWin
        }
    }

}

export function setScore(status) {

    console.log(status === userWin)

    let localstorage_ScoreObj

    if (localStorage.getItem("SCORE")) {
        localstorage_ScoreObj = JSON.parse(localStorage.getItem("SCORE"))

        if (status === userWin) {
            localstorage_ScoreObj.userScore >= 0 && localstorage_ScoreObj.userScore++
            console.log(localstorage_ScoreObj)
        }
        if (status === computerWin) {
            localstorage_ScoreObj.computerScore >= 0 && localstorage_ScoreObj.computerScore++
            console.log(localstorage_ScoreObj)
        }

        localStorage.setItem("SCORE", JSON.stringify(localstorage_ScoreObj))

        return true
    }

    return false

}

export function randomSelectEntity(min, max) {
    const randomVal = Math.floor(Math.random() * (max - min + 1)) + min

    // rock
    if (randomVal === 1) {
        return new Choice(1, 0, 0)
    }

    // paper
    if (randomVal === 2) {
        return new Choice(0, 1, 0)
    }

    // scissor
    if (randomVal === 3) {
        return new Choice(0, 0, 1)
    }

}