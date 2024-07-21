function encriptar() {
    let texto = document.getElementById('inputText').value;
    if (validarTexto(texto)) {
        let textoEncriptado = texto.replace(/e/g, 'enter')
                                   .replace(/i/g, 'imes')
                                   .replace(/a/g, 'ai')
                                   .replace(/o/g, 'ober')
                                   .replace(/u/g, 'ufat');
        document.getElementById('outputText').innerText = textoEncriptado;
        mostrarImagen('gato');
    } else {
        alert('El texto contiene caracteres no permitidos.');
    }
}

function desencriptar() {
    let texto = document.getElementById('inputText').value;
    if (validarTexto(texto)) {
        let textoDesencriptado = texto.replace(/enter/g, 'e')
                                      .replace(/imes/g, 'i')
                                      .replace(/ai/g, 'a')
                                      .replace(/ober/g, 'o')
                                      .replace(/ufat/g, 'u');
        document.getElementById('outputText').innerText = textoDesencriptado;
        mostrarImagen('nube');
    } else {
        alert('El texto contiene caracteres no permitidos.');
    }
}

function validarTexto(texto) {
    // Solo letras minúsculas, sin acentos ni caracteres especiales
    return /^[a-z\s]*$/.test(texto);
}

function mostrarImagen(tipo) {
    let gatoImg = document.getElementById('gatoImg');
    let nubeImg = document.getElementById('nubeImg');

    if (tipo === 'gato') {
        gatoImg.style.display = 'block';
        nubeImg.style.display = 'none';
    } else {
        gatoImg.style.display = 'none';
        nubeImg.style.display = 'block';
    }
}