let gatoX = 0;
let gatoY = 0;

let comidaX = 0;
let comidaY = 0;

let puntaje = 0;

// Constantes para el tamaño del gato y la comida
const ANCHO_GATO = 100;
const ALTO_GATO = 100;

const ANCHO_COMIDA = 50;
const ALTO_COMIDA = 50;

// Obtener canvas y contexto
const CANVAS = document.getElementById("areaJuego");
const CTX = CANVAS.getContext("2d");

const MOVER_GATO = 100;

// Función para dibujar rectangulos (gato y comida)
function graficarRectangulo(x, y, ancho, alto, color) {
  CTX.fillStyle = color;
  CTX.fillRect(x, y, ancho, alto);
}

// Función para dibujar el gato (rectángulo naranja)
function graficarGato() {
  graficarRectangulo(gatoX, gatoY, ANCHO_GATO, ALTO_GATO, "orange");
}

// Función para dibujar la comida (rectángulo verde)
function graficarComida() {
  graficarRectangulo(comidaX, comidaY, ANCHO_COMIDA, ALTO_COMIDA, "green");
}

// Función para iniciar el juego
function iniciarJuego() {
    // Centrar el gato en el canvas
    gatoX = (CANVAS.width - ANCHO_GATO) / 2;
    gatoY = (CANVAS.height - ALTO_GATO) / 2;

    // Colocar la comida en la esquina inferior derecha
    comidaX = CANVAS.width - ANCHO_COMIDA - 10;
    comidaY = CANVAS.height - ALTO_COMIDA - 10;

    // Dibujar el gato y la comida
    graficarGato();
    graficarComida();
}

function limpiarCanvas() {
    CTX.clearRect(0, 0, CANVAS.width, CANVAS.height);
}

function moverIzquierda() {
    gatoX -= MOVER_GATO;

    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverDerecha() {
    gatoX += MOVER_GATO;

    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverArriba() {
    gatoY -= MOVER_GATO;

    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function moverAbajo() {
    gatoY += MOVER_GATO;

    limpiarCanvas();
    graficarGato();
    graficarComida();
    detectarColision();
}

function detectarColision() {
    if (
        gatoX < comidaX + ANCHO_COMIDA 
        &&
        gatoX + ANCHO_GATO > comidaX 
        &&
        gatoY < comidaY + ALTO_COMIDA 
        &&
        gatoY + ALTO_GATO > comidaY
    ) {
        alert("¡El gato ha atrapado la comida!");
  
        puntaje++;
        mostrarEnSpan("puntos", puntaje);

        comidaX =  generarAleatorio(0, CANVAS.width - ANCHO_COMIDA);
        comidaY =  generarAleatorio(0, CANVAS.height - ALTO_COMIDA);

        limpiarCanvas();
        graficarGato();
        graficarComida();
      }
}