const button = document.querySelector('#container');
const body = document.querySelector('body');
const colors = ['blue', 'red', 'yellow', 'green', '#2d4223'];

button.addEventListener('click', newColor);

function newColor (){
    let random = Math.floor(Math.random()*colors.length);
    body.style.backgroundColor =colors[4];
};
