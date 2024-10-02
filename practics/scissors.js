/*const btnPlay = //apuntar al boton
const divUser = //apuntar al div user
const divMaq = //apuntar al div de la maquina
const message =//apuntar al mensaje

const play = () => {
    const choiseUser =prompt('Elige: piedra papel o tigeras');
    const aleatorio = Math.floor(Math.random() * 3);
    //TODO
    // si aleatorio = choiseMaq = 'piedra' y asi para 1 y 2
    //Comparaciones para determinar el ganador
}*/
const btnPlay = document.getElementById('play');       // Botón jugar
const divUserChoice = document.getElementById('my-choice'); // Div para mostrar la elección del usuario
const divMachineChoice = document.getElementById('machine-choice'); // Div para mostrar la elección de la máquina
const message = document.getElementById('result');     // Mensaje con el resultado final

const options = ['piedra', 'papel', 'tijeras'];
const images = {
    piedra: 'piedra.png',
    papel: 'papel.png',
    tijeras: 'tijeras.png'
};

// Añadir eventos de clic a cada imagen (opciones)
document.getElementById('rock').addEventListener('click', () => play('piedra'));
document.getElementById('paper').addEventListener('click', () => play('papel'));
document.getElementById('scissors').addEventListener('click', () => play('tijeras'));

const play = (choiceUser) => {
    const aleatorio = Math.floor(Math.random() * 3);
    const choiceMaq = options[aleatorio];

    // Mostrar las imágenes correspondientes a las elecciones
    divUserChoice.innerHTML = `<img src="${images[choiceUser]}" alt="${choiceUser}" class="choice">`;
    divMachineChoice.innerHTML = `<img src="${images[choiceMaq]}" alt="${choiceMaq}" class="choice">`;

    // Comparar las opciones
    if (choiceUser === choiceMaq) {
        message.textContent = 'Empate';
    } else if (
        (choiceUser === 'piedra' && choiceMaq === 'tijeras') ||
        (choiceUser === 'papel' && choiceMaq === 'piedra') ||
        (choiceUser === 'tijeras' && choiceMaq === 'papel')
    ) {
        message.textContent = 'Ganaste';
    } else {
        message.textContent = 'Perdiste';
    }

    message.style.display = 'block';
};

// Evento para reiniciar el juego cuando se hace clic en "Jugar"
btnPlay.addEventListener('click', () => {
    message.style.display = 'none'; // Ocultar el resultado
    divUserChoice.innerHTML = 'Tú'; // Reiniciar el texto
    divMachineChoice.innerHTML = 'Maquina'; // Reiniciar el texto
    message.textContent = 'Resultado'; // Reiniciar el mensaje
});
