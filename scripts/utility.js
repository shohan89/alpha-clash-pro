function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getRandomAlphabet(){
    // get or create an alphabet array
    const alphabetStr = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetStr.split('');
    console.log(alphabets);

    // get a random index between 0-25
    const randomNumber = Math.random() * 25;
    const index = Math.round(randomNumber);
    
    const alphabet = alphabets[index];
    console.log(index, alphabet);
    return alphabet;
}