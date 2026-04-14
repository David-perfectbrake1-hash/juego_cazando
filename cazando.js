let gatoX = 0;
let gatoY = 0;

let comidaX = 0;
let comidaY = 0;

let puntaje = 0;

let tiempo = 10;

let intervaloTiempo;

const ANCHO_GATO = 50;
const ALTO_GATO = 50;

const ANCHO_COMIDA = 20;
const ALTO_COMIDA = 20;

// Obtener canvas y contexto
const CANVAS = document.getElementById("areaJuego");
const CTX = CANVAS.getContext("2d");

const MOVER_GATO = 10;

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
    gatoX = generarAleatorio(0, CANVAS.width - ANCHO_GATO);
    gatoY = generarAleatorio(0, CANVAS.height - ALTO_GATO);

    // Colocar la comida en la esquina inferior derecha
    comidaX = generarAleatorio(0, CANVAS.width - ANCHO_COMIDA);
    comidaY = generarAleatorio(0, CANVAS.height - ALTO_COMIDA);

    graficarGato();
    graficarComida();

    intervaloTiempo = setInterval(restarTiempo, 1000); 
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
        gatoX < comidaX + ANCHO_COMIDA &&
        gatoX + ANCHO_GATO > comidaX &&
        gatoY < comidaY + ALTO_COMIDA &&
        gatoY + ALTO_GATO > comidaY
    ) {
        // ✅ Notificación flotante en lugar de alert
        mostrarNotificacion("🐱 ¡ÑAM! +1 punto");
        
        puntaje++;
        mostrarEnSpan("puntos", puntaje);

        if (puntaje >= 6) {
            clearInterval(intervaloTiempo);
            // ✅ Modal de victoria
            mostrarFinJuego(
                "🏆 ¡Felicidades, Ganaste!",
                `Puntaje final: ${puntaje}\nTiempo restante: ${tiempo} segundos`
            );
            return;
        }

        comidaX = generarAleatorio(0, CANVAS.width - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, CANVAS.height - ALTO_COMIDA);

        limpiarCanvas();
        graficarGato();
        graficarComida();
    }
}

function restarTiempo() {
    tiempo--;
    mostrarEnSpan("tiempo", tiempo);
    
    if (tiempo <= 0) {
        clearInterval(intervaloTiempo);
        // ✅ Modal de derrota
        mostrarFinJuego(
            "⏰ ¡Se acabó el tiempo!",
            `Puntaje final: ${puntaje}\n¡Inténtalo de nuevo!`
        );
    }
}

function reiniciarJuego() {
    clearInterval(intervaloTiempo);

    puntaje = 0;
    tiempo = 10;
    
    mostrarEnSpan("puntos", puntaje);
    mostrarEnSpan("tiempo", tiempo);
    
    limpiarCanvas();
    iniciarJuego();
}

// 🎮 Control del gato con flechas del teclado
document.addEventListener('keydown', (evento) => {
    // Evita que el navegador haga scroll al usar las flechas
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(evento.key)) {
        evento.preventDefault();
    }
    
    // Ejecuta la función de movimiento según la tecla presionada
    switch (evento.key) {
        case 'ArrowLeft':  moverIzquierda(); break;
        case 'ArrowRight': moverDerecha();   break;
        case 'ArrowUp':    moverArriba();    break;
        case 'ArrowDown':  moverAbajo();     break;
    }
});

// 🎯 Notificación flotante (reemplaza alert de "comida atrapada")
function mostrarNotificacion(mensaje) {
    const notif = document.getElementById("notificacion");
    notif.textContent = mensaje;
    notif.classList.add("mostrar");
    setTimeout(() => notif.classList.remove("mostrar"), 1000);
}

// 🏆 Modal de fin de juego (reemplaza alert de victoria/derrota)
function mostrarFinJuego(titulo, mensaje) {
    document.getElementById("tituloModal").textContent = titulo;
    document.getElementById("mensajeModal").textContent = mensaje;
    document.getElementById("modalFinJuego").classList.add("activo");
}

// 🔄 Reiniciar desde el modal
function cerrarModalYReiniciar() {
    document.getElementById("modalFinJuego").classList.remove("activo");
    reiniciarJuego();
}