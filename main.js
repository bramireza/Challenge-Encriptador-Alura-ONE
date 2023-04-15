// Esta función se encarga de procesar el mensaje. Toma como argumento una función procesadora que será aplicada sobre el mensaje actual.
function processMessage(processor) {
  // Obtener el mensaje actual, la imagen del muñeco, los elementos del mensaje, y el resultado del texto.
  let currentMessage = document.querySelector(".text-input").value;
  let muniecoImg = document.querySelector(".munieco-img");
  let messageTitle = document.querySelector(".message-title");
  let messageText = document.querySelector(".message-text");
  let textResult = document.querySelector(".text-result");

  // Aplicar la función procesadora al mensaje actual.
  let processedMessage = processor(currentMessage);

  // Si el mensaje actual no está vacío:
  if (currentMessage.length != 0) {
    // Limpiar el contenido del título y del texto del mensaje.
    messageTitle.textContent = "";
    messageText.textContent = "";
    // Esconder la imagen del muñeco.
    muniecoImg.style.display = "none";
    // Mostrar el mensaje procesado en el campo de resultado.
    textResult.value = processedMessage;
  } else {
    // Si el mensaje actual está vacío:
    // Mostrar la imagen del muñeco.
    muniecoImg.style.display = "";
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
