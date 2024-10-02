//apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {
    let randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
        case 0:
            message.innerText = 'Hola?'
            break;
        case 1:
            message.innerText = 'Pacman :v'
            break;
        case 2:
            message.innerText = 'Tortuga'
            break;
        case 3:
            message.innerText = 'Fuente'
            break;
        case 4:
            message.innerText = 'Mapache'
            break;
        case 5:
            message.innerText = 'Gato'
            break;
        case 6:
            message.innerText = 'Ganso'
            break;
        case 7:
            message.innerText = 'Ardilla'
            break;
    }
}
ball.addEventListener('click', eightBall);