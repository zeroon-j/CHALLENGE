const sustituciones = [
    { letra: "e", encriptado: "enter" },
    { letra: "i", encriptado: "imes" },
    { letra: "a", encriptado: "ai" },
    { letra: "o", encriptado: "ober" },
    { letra: "u", encriptado: "ufat" }
];

// Selección de elementos del DOM
const campoTexto = document.querySelector(".areaTexto");
const campoMensaje = document.querySelector(".mensaje");

// Validación del texto para asegurar que no contiene caracteres no permitidos
function validarEntrada(texto) {
    const patron = /[^a-z\s]/g; // Permitir solo letras minúsculas y espacios
    if (patron.test(texto)) {
        alert("Por favor, ingresa solo letras minúsculas y sin acentos.");
        return false;
    }
    return true;
}

// Función para encriptar texto
function encriptarTexto(texto) {
    return sustituciones.reduce((textoActual, item) => {
        return textoActual.replaceAll(item.letra, item.encriptado);
    }, texto.toLowerCase());
}

// Función para desencriptar texto
function desencriptarTexto(texto) {
    return sustituciones.reduce((textoActual, item) => {
        return textoActual.replaceAll(item.encriptado, item.letra);
    }, texto.toLowerCase());
}

// Manejo de la acción de encriptar
function btnEncriptar() {
    if (validarEntrada(campoTexto.value)) {
        const textoEncriptado = encriptarTexto(campoTexto.value);
        campoMensaje.value = textoEncriptado;
        campoMensaje.style.backgroundImage = "none";
        campoTexto.value = ""; // Limpiar el campo de texto después de encriptar
    }
}

// Manejo de la acción de desencriptar
function btnDesencriptar() {
    const textoDesencriptado = desencriptarTexto(campoMensaje.value);
    campoMensaje.value = textoDesencriptado;
    campoMensaje.style.backgroundImage = "none";
}

// Copiar el texto encriptado al portapapeles
function btnCopiar() {
    campoMensaje.select();
    navigator.clipboard.writeText(campoMensaje.value)
        .then(() => alert("Texto copiado al portapapeles!"))
        .catch(err => console.error("Error al copiar el texto", err));
}