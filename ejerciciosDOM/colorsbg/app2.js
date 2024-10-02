/* const body = document.querySelector('body');
const btnChange = document.getElementById('btnchange');

const changeColor = () => {
    const color = prompt('Ingresa un color :');
    body.style.backgroundColor = color;
}

btnChange.addEventListener('click', changeColor); */


const body = document.querySelector('body');
const btnChange = document.getElementById('btnchange');

const color = '0123456789abcdef';
const changeColor = () => {
    let hexColor = '#';
    for (let i = 0; i < 6; i++) {
        hexColor += color[Math.floor(Math.random() * 16)];
    }
    body.style.backgroundColor = hexColor;
}
btnChange.addEventListener('click', changeColor);
