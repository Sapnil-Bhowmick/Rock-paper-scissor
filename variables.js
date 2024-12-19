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

// rock , paper , scissor
export const Entity_Number = 3




// Constructor function
function Choice(rock, paper, scissor) {
    this[rockEntity] = rock
    this[paperEntity] = paper
    this[scissorEntity] = scissor
}

export default Choice