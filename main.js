// Obtiene los elementos de entrada y salida de mensaje
const textInput = document.querySelector(".text-input");
const textResult = document.querySelector(".text-result");
// Obtiene la imagen del muñeco, los elementos del mensaje y el boton copiar.
const muniecoImg = document.querySelector(".munieco-img");
const messageTitle = document.querySelector(".message-title");
const messageText = document.querySelector(".message-text");
const copyButton = document.querySelector(".copy-button");
const alertText = document.querySelector(".info-text");

// Esta función se encarga de validar la entrada del mensaje a encriptar a desenecriptar, dejando solo digitar letras minusculas y sin acentos
function validarTexto(e) {
  const caracter = e.key;
  const regex = /^[a-z\s]*$/;

  // Si el caracter no forma parte del regex entonces no deja digitarlo
  if (!regex.test(caracter)) {
    e.preventDefault();
    // Alerta se pinta de rojo
    alertText.style.color = "red";
  } else {
    // Alerta vuleve a color gris
    alertText.style.color = "#495057";
  }
}
// Esta función se encarga de procesar el mensaje. Toma como argumento una función procesadora que será aplicada sobre el mensaje actual.
function processMessage(processor) {
  // Se obtiene el mensaje actual.
  let currentMessage = textInput.value;

  // Aplicar la función procesadora al mensaje actual.
  let processedMessage = processor(currentMessage);

  // Si el mensaje actual no está vacío:
  if (currentMessage.length != 0) {
    // Limpiar el contenido del título y del texto del mensaje.
    messageTitle.textContent = "";
    messageText.textContent = "";
    // Esconder la imagen del muñeco.
    muniecoImg.style.display = "none";
    // Mostrar el boton copiar
    copyButton.style.display = "block";
    // Mostrar el mensaje procesado en el campo de resultado.
    textResult.value = processedMessage;
  } else {
    // Si el mensaje actual está vacío:
    // Mostrar la imagen del muñeco.
    muniecoImg.style.display = "block";
    // Ocultar el boton copiar
    copyButton.style.display = "none";
    // Mostrar un título y texto que indiquen que el usuario debe ingresar un mensaje.
    messageTitle.textContent = "Ningún mensaje fue encontrado";
    messageText.textContent =
      "Ingresa el texto que deseas encriptar o desencriptar";
    // Limpiar el campo de resultado.
    textResult.value = "";
  }
}

// Esta función se encarga de encriptar el mensaje actual.
function encrypt() {
  // Llamar a la función de procesar el mensaje, pasando como argumento una función anónima que encripta el mensaje actual.
  processMessage((currentMessage) => {
    return currentMessage
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  });
}

// Esta función se encarga de desencriptar el mensaje actual.
function decrypt() {
  // Llamar a la función de procesar el mensaje, pasando como argumento una función anónima que desencripta el mensaje actual.
  processMessage((currentMessage) => {
    return currentMessage
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
  });
}

copyButton.addEventListener("click", () => {
  // Copiar el texto encriptado o desencriptado al portapapeles

  navigator.clipboard
    .writeText(textResult.value)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
  // Cambiar el texto del botón de "Copiar" a "¡Copiado!"
  copyButton.innerText = "¡Copiado!";
  // Volver a cambiar el texto del botón después de 2 segundos
  setTimeout(() => {
    copyButton.innerText = "Copiar";
  }, 2000);
});
