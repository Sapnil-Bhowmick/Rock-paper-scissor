export const userWin = "YOU WON"
export const computerWin = "COMPUTER WIN"
export const tie = "TIE"

export const score = {
    userScore: 0,
    computerScore: 0
}

export const rockEntity = "rock"
export const paperEntity = "paper"
export const scissorEntity = "scissor"

export const winStatus = "You Win"
export const looseStatus = "You Lost"
export const tieStatus = "Tie up"

// rock , paper , scissor
export const Entity_Number = 3




// Constructor function
function Choice(rock, paper, scissor) {
    this[rockEntity] = rock
    this[paperEntity] = paper
    this[scissorEntity] = scissor
}

export let imageObj = {}
imageObj[rockEntity] = "./assets/images/rock.svg"
imageObj[paperEntity] = "./assets/images/paper.svg"
imageObj[scissorEntity] = "./assets/images/scissor.svg"

export let borderColorObj = {}
borderColorObj[rockEntity] = "#0074B6"
borderColorObj[paperEntity] = "#FFA943"
borderColorObj[scissorEntity] =  "#BD00FF"






export default Choice