const btn = document.querySelector('#btn');
let userChoice;

btn.addEventListener('click', () => {
    userChoice = prompt('Choose your grid size', 16);
    createGrid(userChoice);
});

function createGrid(value) {
    const divContainer = document.querySelector('#container-main');
    divContainer.replaceChildren();
    const root = document.querySelector(':root');
    root.style.setProperty('--variableValue', value);
    for(let i = 0; i < value ** 2; i++) {
        const newDiv = document.createElement('div');       
        newDiv.classList.add('square');
        divContainer.appendChild(newDiv);   
    }
};


