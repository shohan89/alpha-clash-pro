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
        console.log('You have got a point!!');
    }
    else{
        console.log('You lost a life!!!');
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
    continueGame();
}