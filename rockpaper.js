function rockpaperscissor(player, computer) {
    playerchoice = player.toLowerCase()
    computerchoice = computer.toLowerCase()
    
    if (playerchoice === "rock")
        if (computerchoice === "rock")
            return "It's a tie"
        else if (computerchoice === "paper")
            return "The computer wins!"
        else if (computerchoice === "scissors")
            return "The player wins!"

    else if (playerchoice === "paper")
        if (computerchoice === "rock")
            return "The player wins!"
        else if (computerchoice === "paper")
            return "It's a tie!"
        else if (computerchoice === "scissors")
            return "The computer wins!"
    
    else if (playerchoice === "scissors")
        if (computerchoice === "rock")
            return "The computer wins!"
        else if (computerchoice === "paper")
            return "The player wins!"
        else if (computerchoice === "scissors")
            return "It's a tie!"
}

pc = "RoCk";
cc = "PaPeR";

console.log(rockpaperscissor(pc, cc));