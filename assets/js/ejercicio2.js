// Obtenemos los botones de los colores y el cuadro principal
let rojo = document.getElementById("btn-1");
let naranjo = document.getElementById("btn-2");
let amarillo = document.getElementById("btn-3");
let verde = document.getElementById("btn-4");
let celeste = document.getElementById("btn-5");
let rosado = document.getElementById("btn-6");

// Obtener el cuadro principal
let cuadro = document.getElementById("caja");

// Agregamos un evento click a cada botón
rojo.addEventListener("click", function() {
  // Cambiamos el color del cuadro a rojo
  cuadro.style.backgroundColor = "#e53e3e";
});

// Agregamos un evento click a cada botón
naranjo.addEventListener("click", function() {
  // Cambiamos el color del cuadro a naranja
  cuadro.style.backgroundColor = "#dd6b20";
});

// Agregamos un evento click a cada botón
amarillo.addEventListener("click", function() {
  // Cambiamos el color del cuadro a amarillo
  cuadro.style.backgroundColor = "#faf089";
});

// Agregamos un evento click a cada botón
verde.addEventListener("click", function() {
  // Cambiamos el color del cuadro a verde
  cuadro.style.backgroundColor = "#48bb78";
});

// Agregamos un evento click a cada botón
celeste.addEventListener("click", function() {
  // Cambiamos el color del cuadro a celeste
  cuadro.style.backgroundColor = "#81e6d9";
});

// Agregamos un evento click a cada botón
rosado.addEventListener("click", function() {
  // Cambiamos el color del cuadro a rosado
  cuadro.style.backgroundColor = "#d53f8c";
});