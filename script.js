const divContainer = document.querySelector('#container-main');
const btn = document.querySelector('#btn');
const root = document.querySelector(':root');
let userChoice;
let square;

btn.addEventListener('click', () => {    
    userChoice = Number(prompt('Choose your grid size', 5));
    createGrid(userChoice);
    square = document.querySelectorAll('.square');
    square.forEach(ele => ele.addEventListener('mouseover', () =>{getRandomRgb(ele)}));
    square.forEach(ele => ele.addEventListener('mouseover', () =>{changeBrightness(ele)}));
});

function createGrid(value) {
    divContainer.replaceChildren();    
    root.style.setProperty('--variableValue', value);
    for(let i = 0; i < value ** 2; i++) {
        const newDiv = document.createElement('div');       
        newDiv.classList.add('square');
        newDiv.classList.add('bright100');        
        divContainer.appendChild(newDiv);
    }   
};

function getRandomRgb(arg) {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    let rgb = `rgb(${r},${g},${b})`;
    arg.style.backgroundColor = rgb;    
  }

function genHexString(len) {
    let hex = '';
    for (let i = 0; i < len; ++i) {
        hex += (Math.floor(Math.random() * 16)).toString(16);
    }
    root.style.setProperty('--randomColor', `#${hex}`);
}

function changeBrightness(arg) {
    switch(true) {
        case arg.classList.contains('bright100'):
            arg.classList.replace('bright100', 'bright90');
            break;
        case arg.classList.contains('bright90'):
            arg.classList.replace('bright90', 'bright80');
            break;
        case arg.classList.contains('bright80'):
            arg.classList.replace('bright80', 'bright70');
            break;
        case arg.classList.contains('bright70'):
            arg.classList.replace('bright70', 'bright60');
            break;
        case arg.classList.contains('bright60'):
            arg.classList.replace('bright60', 'bright50');
            break;
        case arg.classList.contains('bright50'):
            arg.classList.replace('bright50', 'bright40');
            break;
        case arg.classList.contains('bright40'):
            arg.classList.replace('bright40', 'bright30');
            break;    
        case arg.classList.contains('bright30'):
            arg.classList.replace('bright30', 'bright20');
            break;
        case arg.classList.contains('bright20'):
            arg.classList.replace('bright20', 'bright10');
            break;
        case arg.classList.contains('bright10'):
            arg.classList.replace('bright10', 'bright0');
            break;
    }
}
