function continueGame(){
    const alphabets = getRandomAlphabet();
    
}



function play(){
    // Getting the home section and hide it
    hideElementById('home-screen');

    // Showing the play ground section
    showElementById('play-ground');
    continueGame();
}