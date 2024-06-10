function handleKeyboardButtonPress(){
    console.log('button pressed');
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
    continueGame();
}