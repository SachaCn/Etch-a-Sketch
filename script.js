const grid = document.querySelector('#grid-btn');
const rainbowBtn = document.querySelector('#rainbow-btn');
const grayscaleBtn = document.querySelector('#grayscale-btn');
const eraserBtn = document.querySelector('#eraser-btn');
const clearBtn = document.querySelector('#clear-btn');
let square = document.querySelectorAll('.square');
let currentMode = '';

createGrid(16);

grid.addEventListener('click', () => {
    let userChoice;
    do {
        userChoice = Number(prompt('Choose your grid size (max: 100)', 16));        
    } while (userChoice > 100)
    createGrid(userChoice);
    square = document.querySelectorAll('.square');
});

rainbowBtn.addEventListener('click', () => changeMode('rainbow'));
grayscaleBtn.addEventListener('click', () => changeMode('gray'));
eraserBtn.addEventListener('click', () => changeMode('eraser'));
clearBtn.addEventListener('click', () => square.forEach(e => clearGrid(e)));

function createGrid(value) {
    const divContainer = document.querySelector('#square-container');
    const root = document.querySelector(':root');
    divContainer.replaceChildren();    
    root.style.setProperty('--variableValue', value);
    for(let i = 0; i < value ** 2; i++) {
        const newDiv = document.createElement('div');       
        newDiv.classList.add('square');
        divContainer.appendChild(newDiv);
    }   
};

function loop(func) {
    square.forEach(ele => ele.addEventListener('mouseover', () =>{func(ele)}));
};

function changeMode(newMode) {
    currentMode = newMode;    
    if(currentMode == 'rainbow') loop(randomHsl);        
    if(currentMode == 'gray') loop(removeBrightness);
    if(currentMode == 'eraser')  loop(eraser);    
};

function randomHsl(arg) {
    if(currentMode != 'rainbow') return;
    arg.style.filter = '';   
    arg.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
};

function removeBrightness(arg) {
    if(currentMode != 'gray') return;
    arg.style.backgroundColor = '#ffffff';
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

function eraser(arg) {
    if(currentMode != 'eraser') return;
    arg.style.backgroundColor = '#ffffff';
    arg.style.filter = '';  
};

function clearGrid(arg) {
    currentMode = '';
    arg.style = '';
};