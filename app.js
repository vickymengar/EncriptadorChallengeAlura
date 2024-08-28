// Selectores
const textoOriginal = document.querySelector("#textoOriginal");
const textoResultado = document.querySelector("#textoResultado");

// Función de encriptado
function encriptarTexto(texto) {
    return texto
        .replace(/a/g, "ai")
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

// Función de desencriptado
function desencriptarTexto(texto) {
    return texto
        .replace(/ai/g, "a")
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

// Validación para aceptar solo letras minúsculas sin caracteres especiales
function validarTexto(texto) {
    const regex = /^[a-z\s]+$/;
    return regex.test(texto);
}

// Función para mostrar el texto encriptado
function mostrarTextoEncriptado() {
    let texto = textoOriginal.value;

    if (validarTexto(texto)) {
        textoResultado.value = encriptarTexto(texto);
    } else {
        alert("El texto solo debe contener letras minúsculas y sin caracteres especiales.");
    }
}

// Función para mostrar el texto desencriptado
function mostrarTextoDesencriptado() {
    let texto = textoOriginal.value;

    if (validarTexto(texto)) {
        textoResultado.value = desencriptarTexto(texto);
    } else {
        alert("El texto solo debe contener letras minúsculas y sin caracteres especiales.");
    }
}

// Función para copiar el texto encriptado o desencriptado
function copiarTexto() {
    textoResultado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles!");
}

// Event Listeners
document.querySelector("button.encriptar").addEventListener("click", mostrarTextoEncriptado);
document.querySelector("button.desencriptar").addEventListener("click", mostrarTextoDesencriptado);
document.querySelector("button.copiar").addEventListener("click", copiarTexto);
