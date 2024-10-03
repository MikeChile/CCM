// Actualizar dinámicamente el texto de copyright con el año actual
document.getElementById('copyright-t').innerHTML = `Copyright &copy; ${new Date().getFullYear()}, Derechos reservados CCM, creado por <a href="https://mikechile.github.io/portafolio/">Mike Dev</a>`;

// Esperar a que el DOM esté listo antes de ejecutar la función del loader
$(document).ready(function () {
    // Desvanecer el loader después de 3 segundos (3000 milisegundos)
    setTimeout(function () {
        $('#loader-out').fadeOut('slow');  // 'slow' especifica la velocidad de desvanecimiento
    }, 3000); // 3 segundos
});

// Obtener los elementos de video y botón de audio
const video = document.getElementById('backgroundVideo');
const audioButton = document.getElementById('audioButton');

// Añadir un evento 'click' al botón de audio para controlar el mute/unmute del video
audioButton.addEventListener('click', () => {
    if (video.muted) {
        video.muted = false;  // Activar el sonido del video
        audioButton.innerHTML = "<i class='bx bxs-volume-full'></i>";  // Cambiar el ícono a "sonido activado"
    } else {
        video.muted = true;  // Desactivar el sonido del video
        audioButton.innerHTML = "<i class='bx bxs-volume-mute'></i>";  // Cambiar el ícono a "sonido silenciado"
    }
});

// Funcionalidad del slider para duplicar el contenido y crear un bucle infinito
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');  // Seleccionar el contenedor del slider
    const sliderClone = slider.innerHTML;  // Clonar el contenido actual del slider
    slider.innerHTML += sliderClone;  // Duplicar el contenido del slider para un desplazamiento continuo
});
