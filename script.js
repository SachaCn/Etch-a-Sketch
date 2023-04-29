const divContainer = document.querySelector('#container-main');
const btn = document.querySelector('#btn');
const root = document.querySelector(':root');
let userChoice;
let square;

btn.addEventListener('click', () => {    
    userChoice = Number(prompt('Choose your grid size', 16));
    createGrid(userChoice);
    square = document.querySelectorAll('.square');
    square.forEach(ele => ele.addEventListener('mouseover', () =>{getRandomRgb()}));
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

function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = num >> 8 & 255;
    let b = num & 255;
    let rgb = `rgb(${r},${g},${b})`;
    root.style.setProperty('--randomColor', rgb);
  }

  function genHexString(len) {
    let hex = '';
    for (let i = 0; i < len; ++i) {
        hex += (Math.floor(Math.random() * 16)).toString(16);
    }
    
    return root.style.setProperty('--randomColor', `#${hex}`);
}