const randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const guessField = document.querySelector("#guessField");
const prevGuesses = document.querySelector(".guesses");
const submit = document.querySelector("#subt");
const lowOrHi = document.querySelector(".lowOrHi");
const lastResult = document.querySelector(".lastResult");
const resultParas = document.querySelector(".resultParas");
const p = document.createElement("p");

let playGame = true;
let remGuess = 0;
submit.addEventListener("click", (e) => {
  e.preventDefault();
  const guess = parseInt(guessField.value);
  console.log(guess);
  if (playGame) {
    validateGuess(guess);
  }
});

function validateGuess(guess) {
  if(remGuess === 9){

    endGame()
  }
    if (guess > 100) {
        alert(`enter number less than 100`);
      } else if (guess < 1) {
        alert(`enter number greater than 1`);
      } else {
        checkGuess(guess);
      }
  
 
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    message(`You Guessed it right`);
    endGame();
  } 
  else if(guess < randomNumber){
    message(`Too Low`);
    cleanUp(guess)
  }
  else if(guess > randomNumber){
    message(`Too High`)
    cleanUp(guess)
  }
}

function message(message) {
  lowOrHi.innerHTML = `${message}`;
}

function cleanUp(guess) {
  guessField.value = "";
  prevGuesses.innerHTML += `${guess} ,`;
  remGuess++;
  lastResult.innerHTML = 10 - remGuess;
}

function endGame() {
  guessField.value = "";
  prevGuesses.innerHTML = "";
  playGame = false;
  guessField.setAttribute("disabled", "");
  p.innerHTML = `<h4 id="newGame" class = 'button'>Start new Game</h4>`;
  resultParas.appendChild(p);

  p.addEventListener("click", (e) => {
    newGame();
  });
}

function newGame() {
  const randomNumber = parseInt(Math.random() * 100 + 1);
  playGame = true;
  guessField.removeAttribute("disabled");
  remGuess = 0;
  lastResult.innerHTML = 10 - remGuess;
  resultParas.removeChild(p);
}
