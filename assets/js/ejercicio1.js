// Obtenemos el formulario y el campo de texto
let formulario = document.getElementById("formulario");
let campo = document.getElementById("campo");

// Creamos una expresión regular que solo acepte letras de la A a la Z
let regex = /^[A-Za-z]+$/;

// Agregamos un evento submit al formulario
formulario.addEventListener("submit", function(event) {
  // Evitamos que el formulario se envíe por defecto
  event.preventDefault();
  // Obtenemos el valor del campo de texto
  let valor = campo.value;
  // Verificamos si el valor cumple con la expresión regular
  if (regex.test(valor)) {
    // Si cumple, mostramos un mensaje de éxito
    alert("El formulario se ha enviado correctamente");
  } else {
    // Si no cumple, mostramos un mensaje de error
    alert("El campo solo debe contener letras de la A a la Z");
  }
});