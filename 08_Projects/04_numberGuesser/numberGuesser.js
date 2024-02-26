const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remguess = document.querySelector('.lastResult');
const hints = document.querySelector('.lowOrHigh')
const startOver = document.querySelector('.resultParas')

let randomNumber = parseInt(Math.random() * 5 + 1);

const p = document.createElement('p')

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess);
    })
}

const validateGuess = (guess) => {
    if(guess === '') {
        alert("Input cannot be empty")
    } else if(guess < 0 || guess > 100) {
        alert("Input cannot be less than 0 or more than 100")
    } else if(isNaN(guess)) {
        alert("Input must be a Number")
    } else {
        prevGuess.push(guess)
        if(numGuess === 11) {
            displayGuess(guess);
            displayMsg(`Game over. Random number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

const checkGuess = (guess) => {
    if(guess === randomNumber) {
        displayMsg(`You guessed it right ${randomNumber}`)
        endGame();
    } else if (guess > randomNumber) {
        displayMsg(`Your guess is too high`)
    } else if (guess < randomNumber) {
        displayMsg(`Your guess is too low`)
    }
}

const displayGuess = (guess) => {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuess++;
    remguess.innerHTML = `${11-numGuess}`
}

const displayMsg = (message) => {
    hints.innerHTML = `<h2>${message}</h2>`
}

const newGame = () => {
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', (e) => {
        randomNumber = parseInt(Math.random() * 5 + 1);
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = ''
        remguess.innerHTML = `${10-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })
}

const endGame = () => {
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Click here to Start new game</h2>`
    startOver.appendChild(p)
    playGame = false;
    newGame();
}


