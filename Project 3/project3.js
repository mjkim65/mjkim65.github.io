let secretNumber = Math.floor(Math.random() * 100) + 1;
let userInput = Number(document.querySelector('.input').nodeValue);


for (let i = 7; i >= 0; i--) {
    if (secretNumber == userInput) {
        document.querySelector(".hint").textContent = "You guessed correct!";
        document.querySelector(".score").textContent = 'Score: ' + i;
        break;
    }
    else if (secretNumber > userInput) {
        document.querySelector(".hint").textContent = "Too low!";
        i--;
        document.querySelector(".score").textContent = 'Score: ' + i;
        if (i == 0) {
            document.querySelector(".hint").textContent = "You lose!";
        } else continue;
    }
    else if (secretNumber < userInput) {
        document.querySelector(".hint").textContent = "Too high!";
        i--;
        document.querySelector(".score").textContent = 'Score: ' + i;
        if (i == 0) {
            document.querySelector(".hint").textContent = "You lose!";
        } else continue
    }
}

