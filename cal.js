// Variable para almacenar la expresión de la calculadora
let expression = '';

// Función para agregar números y operadores a la expresión
function appendInput(value) {
  expression += value;
  document.getElementById('screen').value = expression;
}

// Función para borrar la pantalla de la calculadora
function clearScreen() {
  expression = '';
  document.getElementById('screen').value = expression;
  document.getElementById('resultImage').style.display = "none"; // Oculta la imagen al limpiar la pantalla
}

// Función para calcular el resultado de la expresión
function calculate() {
  try {
    expression = eval(expression); // Evalúa la expresión y calcula el resultado
    document.getElementById('screen').value = expression;
    document.getElementById('resultImage').src = "gatillo.gif"; // Reemplaza "ruta_de_la_imagen.jpg" con la ruta real de tu archivo de imagen
    document.getElementById('resultImage').style.display = "block";
  } catch (error) {
    document.getElementById('screen').value = 'Error'; // Maneja los errores, como división por cero
  }
}
