// Obtenemos los botones y el elemento resultado
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let suma = document.getElementById("suma");
let resta = document.getElementById("resta");
let igual = document.getElementById("igual");
let resultado = document.getElementById("resultado");

// Declaramos variables para almacenar los operandos y el operador
let operandoa;
let operandob;
let operacion;

// Agregamos un evento click a cada botón
uno.addEventListener("click", function() {
  // Agregamos el número 1 al resultado
  resultado.textContent = resultado.textContent + "1";
});

dos.addEventListener("click", function() {
  // Agregamos el número 2 al resultado
  resultado.textContent = resultado.textContent + "2";
});

tres.addEventListener("click", function() {
  // Agregamos el número 3 al resultado
  resultado.textContent = resultado.textContent + "3";
});

cuatro.addEventListener("click", function() {
  // Agregamos el número 4 al resultado
  resultado.textContent = resultado.textContent + "4";
});

cinco.addEventListener("click", function() {
  // Agregamos el número 5 al resultado
  resultado.textContent = resultado.textContent + "5";
});

seis.addEventListener("click", function() {
  // Agregamos el número 6 al resultado
  resultado.textContent = resultado.textContent + "6";
});

siete.addEventListener("click", function() {
  // Agregamos el número 7 al resultado
  resultado.textContent = resultado.textContent + "7";
});

ocho.addEventListener("click", function() {
  // Agregamos el número 8 al resultado
  resultado.textContent = resultado.textContent + "8";
});

nueve.addEventListener("click", function() {
  // Agregamos el número 9 al resultado
  resultado.textContent = resultado.textContent + "9";
});

suma.addEventListener("click", function() {
  // Guardamos el primer operando y el operador
  operandoa = resultado.textContent;
  operacion = "+";
  // Limpiamos el resultado
  resultado.textContent = "";
});

resta.addEventListener("click", function() {
  // Guardamos el primer operando y el operador
  operandoa = resultado.textContent;
  operacion = "-";
  // Limpiamos el resultado
  resultado.textContent = "";
});

igual.addEventListener("click", function() {
  // Guardamos el segundo operando
  operandob = resultado.textContent;
  // Llamamos a la función resolver para realizar la operación
  resolver();
});

// Creamos una función para resolver la operación
function resolver() {
  // Declaramos una variable para almacenar el resultado
  let res = 0;
  // Convertimos los operandos a números
  operandoa = parseFloat(operandoa);
  operandob = parseFloat(operandob);
  // Verificamos el operador y realizamos la operación
  switch (operacion) {
    case "+":
      res = operandoa + operandob;
      break;
    case "-":
      res = operandoa - operandob;
      break;
  }
  // Si el resultado es negativo, mostramos un 0
  if (res < 0) {
    res = 0;
  }
  // Mostramos el resultado
  resultado.textContent = res;
}