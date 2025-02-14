document.addEventListener("DOMContentLoaded", function() {
    console.log("✅ script.js se ha cargado correctamente.");

    // Obtener elementos del DOM
    const textoElement = document.getElementById("texto");
    const imagenElement = document.getElementById("imagen");
    const audioElement = document.getElementById("audio");
    const botonAudio = document.getElementById("playAudio");
    const botonAvanzar = document.getElementById("avanzar");
    const botonRetroceder = document.getElementById("retroceder");

    // Contenido de la historia
    const historia = [
        { texto: "Nos conocimos en Badoo... pero le hablé a su hermana gemela.", imagen: "images/badoo.jpg", audio: "audio/badoo.mp3" },
        { texto: "Coincidimos en el Instituto Ícaro, pero no nos hicimos caso.", imagen: "images/icaro.jpg", audio: "audio/icaro.mp3" },
        { texto: "En la pandemia, vimos 'Milagro en la Celda 7' juntos.", imagen: "images/milagro.jpg", audio: "audio/milagro.mp3" },
        { texto: "Nuestro primer encuentro en Nassica… pero al final no salimos del coche.", imagen: "images/nassica.jpg", audio: "audio/nassica.mp3" },
        { texto: "Ella se fue a Londres, y aunque hablamos de vez en cuando, poco a poco nos fuimos alejando.", imagen: "images/londres.jpg", audio: "audio/londres.mp3" },
        { texto: "Cuando volvió, fui a recogerla al aeropuerto y fuimos a comer juntos.", imagen: "images/aeropuerto.jpg", audio: "audio/aeropuerto.mp3" },
        { texto: "Pero esto no duraría mucho, ya que nos dejamos de ver otra vez...", imagen: "images/separacion.jpg", audio: "audio/separacion.mp3" },
        { texto: "Pero desde septiembre nos hemos vuelto a ver y, a pesar de nuestras diferencias...", imagen: "images/reencuentro.jpg", audio: "audio/reencuentro.mp3" },
        { texto: "Ahora estamos más juntos que nunca ❤️.", imagen: "images/juntos.jpg", audio: "audio/juntos.mp3" }
    ];

    let indice = 0;

    // Función para actualizar el contenido con efectos
    function actualizarContenido() {
        console.log("📌 Mostrando historia:", indice);

        // Aplica la clase de fade antes de cambiar la imagen y el texto
        textoElement.classList.add("texto-fade");
        imagenElement.classList.add("fade");

        setTimeout(() => {
            textoElement.textContent = historia[indice].texto;
            imagenElement.src = historia[indice].imagen;
            audioElement.src = historia[indice].audio;
            audioElement.play();

            // Quita la clase de fade después de cambiar el contenido
            textoElement.classList.remove("texto-fade");
            imagenElement.classList.remove("fade");
        }, 300); // 300ms para el efecto de fade
    }

    // Función para avanzar en la historia
    function avanzarHistoria() {
        if (indice < historia.length - 1) {
            indice++;
            actualizarContenido();
        }
    }

    // Función para retroceder en la historia
    function retrocederHistoria() {
        if (indice > 0) {
            indice--;
            actualizarContenido();
        }
    }

    // Eventos de botones
    botonAudio.addEventListener("click", function() {
        console.log("🎵 Reproduciendo audio...");
        audioElement.play();
    });

    botonAvanzar.addEventListener("click", function() {
        console.log("➡️ Botón 'Siguiente' clickeado.");
        avanzarHistoria();
    });

    botonRetroceder.addEventListener("click", function() {
        console.log("⬅️ Botón 'Anterior' clickeado.");
        retrocederHistoria();
    });

    // Inicializar la primera historia
    actualizarContenido();
});
