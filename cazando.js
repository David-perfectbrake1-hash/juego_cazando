// Variables globales para la posición del gato y la comida
let gatoX = 0;
let gatoY = 0;
let comidaX = 0;
let comidaY = 0;

// Constantes para el tamaño del gato y la comida
const ANCHO_GATO = 100;
const ALTO_GATO = 100;
const ANCHO_COMIDA = 50;
const ALTO_COMIDA = 50;

// Obtener canvas y contexto
const canvas = document.getElementById("areaJuego");
const contexto = canvas.getContext("2d");

// Función para dibujar el gato (rectángulo naranja)
function graficarGato() {
  contexto.fillStyle = "orange";
  contexto.fillRect(gatoX, gatoY, ANCHO_GATO, ALTO_GATO);
}

// Función para dibujar la comida (rectángulo verde)
function graficarComida() {
  contexto.fillStyle = "green";
  contexto.fillRect(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA);
}

// Función para iniciar el juego
function iniciarJuego() {
    // Centrar el gato en el canvas
    gatoX = (canvas.width - ANCHO_GATO) / 2;
    gatoY = (canvas.height - ALTO_GATO) / 2;

    // Colocar la comida en la esquina inferior derecha
    comidaX = canvas.width - ANCHO_COMIDA - 10;
    comidaY = canvas.height - ALTO_COMIDA - 10;

    // Dibujar el gato y la comida
    graficarGato();
    graficarComida();
}
