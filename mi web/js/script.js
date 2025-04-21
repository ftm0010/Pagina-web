 // Definición de premios
const prizes = [
    "¡Felicidades! Has ganado un descuento del 20% en tú primer mes! 🎉",
    "¡Genial! Un mes gratuito. 🎊",
    "¡Lo sentimos! Intenta nuevamente. 😢",
    "¡Excelente! Un regalo sorpresa. 🎁"
];

// Función para girar la ruleta
function spinRoulette() {
    // Generar un índice aleatorio
    const randomIndex = Math.floor(Math.random() * prizes.length);
    // Mostrar el resultado en el párrafo
    document.getElementById('result').innerText = prizes[randomIndex];
}

// Añadir evento al botón
document.getElementById('spin-button').addEventListener('click', spinRoulette);
