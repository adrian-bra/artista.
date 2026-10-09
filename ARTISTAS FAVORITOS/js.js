const formulario = document.getElementById("formulario");
const respuesta = document.getElementById("respuesta");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const artista = document.getElementById("artista").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    if (!nombre || !artista || !mensaje) {
        respuesta.textContent = "Completa todos los campos.";
        return;
    }

    respuesta.textContent =
        `¡Gracias, ${nombre}! Tu artista favorito es ${artista}.`;

    formulario.reset();
});