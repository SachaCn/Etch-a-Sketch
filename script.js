const divContainer = document.querySelector('#container-main');
const btn = document.querySelector('#btn');
const root = document.querySelector(':root');

btn.addEventListener('click', () => {
    let userChoice;
    do {
        userChoice = Number(prompt('Choose your grid size (max: 64)', 16));
    } while (userChoice > 64)
    createGrid(userChoice);
    let square = document.querySelectorAll('.square');
    square.forEach(ele => ele.addEventListener('mouseover', () =>{randomHsl(ele)}));
    square.forEach(ele => ele.addEventListener('mouseover', () =>{removeBrightness(ele)})); 
});

function createGrid(value) {
    divContainer.replaceChildren();    
    root.style.setProperty('--variableValue', value);
    for(let i = 0; i < value ** 2; i++) {
        const newDiv = document.createElement('div');       
        newDiv.classList.add('square');
        divContainer.appendChild(newDiv);
    }   
};

function randomHsl(arg) {
    arg.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
};

function removeBrightness(arg) {
    if (arg.style.filter.match(/brightness/)) {
        let currentBrightness = Number(arg.style.filter.slice(-4, -2));
        if (currentBrightness >= 10) {
            arg.style.filter = `brightness(${currentBrightness - 10}%)`;
        }
    } else if (arg.style.filter == 'brightness(0%)') {
        return;
    } else {
        arg.style.filter = 'brightness(90%)';
    }
};