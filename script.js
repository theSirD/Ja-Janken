// function selectCharacter() {

// }


// function getComputerChoice() {
//     let choices = ["rock", "paper", "scissors"];
//     let index = Math.floor(Math.random() * 3);
//     return choices[index];
// }

// function playRound(playerChoice) {
//     let compChoice = getComputerChoice();

//     console.log(playerChoice);

//     const resultWindow = document.querySelector(".result");
    

//     if (compChoice == playerChoice) {resultWindow.textContent =  "Even!";}
//     else if (compChoice == "rock" && playerChoice == "paper") {resultWindow.textContent = "You win! Paper beats Rock!";}
//     else if (compChoice == "rock" && playerChoice == "scissors") {resultWindow.textContent =  "You lose! Rock beats Scissors!";}
//     else if (compChoice == "paper" && playerChoice == "rock") {resultWindow.textContent =  "You lose! Paper beats Rock!";}
//     else if (compChoice == "paper" && playerChoice == "scissors") {resultWindow.textContent =  "You win! Scissors beats Paper!";}
//     else if (compChoice == "scissors" && playerChoice == "paper") {resultWindow.textContent =  "You lose! Scissors beats Paper!";}
//     else if (compChoice == "scissors" && playerChoice == "rock") {resultWindow.textContent =  "You win! Rock beats Scissors!";}
// }

// function game() {
//     let win = 0;
//     let loss = 0;
//     for (let i = 0; i < 5; i++) {
//         let roundResult = playRound();
//         console.log(roundResult);
//         if (roundResult[4] == "w") {++win;}
//         else if (roundResult[4] == "l") {++loss;}
//     }

//     if (win > loss) {console.log("Game result: Player wins!");}
//     else if (win < loss) {console.log("Game result: Computer wins!");}
//     else {console.log("Game result: Even!");}
// }

// // game();

// const choices = document.querySelectorAll(".choice");

// choices.forEach(choice => {
//     choice.addEventListener("click", () => playRound(choice.classList[1]))
// });

function setAvatar(characterImage) {
    const playerAvatar = document.querySelector(".human");
    console.log(characterImage.target);
    playerAvatar.innerHTML = `<img src="${characterImage.target.src}" width="160" height="160"></img> <div class="score">Score: 0/5</div>`;

    const computerAvatar = document.querySelector(".computer");
    let opponent = Math.floor(Math.random() * 2);
    if ((characterImage.target.classList[0] == "gon")  || (characterImage.target.classList[0] == "killua")) {
        if (opponent==0) {
            computerAvatar.innerHTML = '<img src="imgs/hisoka.jpg" width="160" height="160"></img> <div class="score">Score: 0/5</div>';
        } else {
            computerAvatar.innerHTML = '<img src="imgs/illumi.jpg" width="160" height="160"></img> <div class="score">Score: 0/5</div>';
        }
    } else {
        if (opponent==0) {
            computerAvatar.innerHTML = '<img src="imgs/gon.jpeg" width="160" height="160"></img> <div class="score">Score: 0/5</div>';
        } else {
            computerAvatar.innerHTML = '<img src="imgs/killua.jpg" width="160" height="160"></img> <div class="score">Score: 0/5</div>';
        }
    }

    displayChoices();
}

function chooseAvatar() {
    const characterContainers = document.querySelectorAll(".characters");
    const arrayOfCharacterArrays = [];

    characterContainers.forEach(characterContainer => {
        const characterArray = characterContainer.querySelectorAll("img");
        arrayOfCharacterArrays.push(characterArray);
    })

    arrayOfCharacterArrays.forEach(array=> {
        array.forEach(characterImage => {
            characterImage.addEventListener("click", setAvatar);
        });
    });

    
}


function redirectToVkPage() {
    document.getElementById("VK-redirect").addEventListener("click", () => {
        window.location.href = "https://vk.com/isaevdaniil";
    });
    
}


function reloadPage() {
    document.getElementById("reload").addEventListener("click", function() {
        window.location.reload();
      });
    
}

function displayChoices() {
    const element = document.querySelector('.char-prompt');
    element.remove();

    const content = document.querySelector(".content");

    content.innerHTML += '<div class="show-me">Ja-Janken! Show me...</div>';
    content.innerHTML += '<div class="choices flex-container"></div>';

    const choices = document.querySelector(".choices");
    
    choices.innerHTML += '<div class="choice rock">Rock</div> <div class="choice paper">Paper</div> <div class="choice scissors">Scissors</div>';
}

chooseAvatar();
redirectToVkPage();
reloadPage();




