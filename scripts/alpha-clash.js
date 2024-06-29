function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('Player pressed: ', playerPressed);

    // get the expected
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    // check match or not
    if( playerPressed === expectedAlphabet ){

        // get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        const newScore = currentScore + 1;
        currentScoreElement.innerText = newScore;
        console.log('You have got a point!!');
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('You lost a life!!!');
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        const newLife = currentLife - 1;

        currentLifeElement.innerText = newLife;

        if( newLife === 0 ){
            gameOver();
        }
    }
}

document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    const alphabets = getRandomAlphabet();
    // set random alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabets;

    // set background color
    setBackgroundColorById(alphabets);
    
}



function play(){
    // Getting the home section and hide it
    hideElementById('home-screen');
    // Showing the play ground section
    showElementById('play-ground');
    // Getting the final score and hide it for starting
    hideElementById('final-score');
    
    continueGame();
}
function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}