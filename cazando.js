// Obtener canvas por su ID
const canvas = document.getElementById('areaJuego');

// Obtener el contexto 2D del canvas para dibujar
const contexto = canvas.getContext('2d');

// Función para dibujar el gato (rectángulo centrado)
function graficarGato() {
    // Obtener el canvas y su contexto
    let canvas = document.getElementById('areaJuego');
    let contexto = canvas.getContext('2d');

    // Definir las dimensiones del gato (rectángulo)
    let anchoGato = 50;
    let altoGato = 50;

    // Calcular la posición para centrar el gato en el canvas
    let xGato = (canvas.width - anchoGato) / 2;
    let yGato = (canvas.height - altoGato) / 2;

    // Dibujar el gato (rectángulo)
    contexto.fillStyle = 'orange';
    contexto.fillRect(xGato, yGato, anchoGato, altoGato);

}