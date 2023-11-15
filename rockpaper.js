function rockpaperscissor(playerchoice, computerchoice) {
    playerchoice = playerchoice.toLowerCase()
    computerchoice = computerchoice.toLowerCase()
    
    if (playerchoice = "rock") {
        if (computerchoice = "rock") {
            return "It's a tie"
        }
        else if (computerchoice = "paper") {
            return "The computer wins!"
        }
        else if (computerchoice = "scissors") {
            return "The player wins!"
        }
    }
    else if (playerchoice = "paper") {
        if (computerchoice = "rock") {
            return "The player wins!"
        }
        else if (computerchoice = "paper") {
            return "It's a tie!"
        }
        else if (computerchoice = "scissors") {
            return "The computer wins!"
        }
    }
    else if (playerchoice = "scissors") {
        if (computerchoice = "rock") {
            return "The computer wins!"
        }
        else if (computerchoice = "paper") {
            return "The player wins!"
        }
        else if (computerchoice = "scissors") {
            return "It's a tie!"
        }
    }
}

playerchoice = "RoCk";
computerchoice = "PaPeR";

console.log(rockpaperscissor(playerchoice, computerchoice));