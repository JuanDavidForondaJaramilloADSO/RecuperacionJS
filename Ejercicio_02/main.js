import {IO} from './io.js'; // Importar el objeto IO desde el archivo io.js
import {OperacionesMatematicas} from './operaciones.js'; // Importar el objeto OperacionesMatematicas desde el archivo operaciones.js

// Función principal
const iniciarPrograma = () => {
  const numeros = IO.leerNumeros(); // Llamar al método leerNumeros del objeto IO para leer los números ingresados por el usuario
  const operacion = prompt("¿Qué operación desea realizar?\n a. Sumar los números\n b. Contar los números primos\n c. Contar los números pares\n d. Calcular el promedio de los números primos\n e. Calcular el promedio de números pares").toLowerCase(); // Solicitar al usuario que ingrese la operación que desea realizar y convertir la entrada a minúsculas

  switch (operacion) { // Iniciar un switch que evalúe la operación ingresada por el usuario
    case 'a': // Si la operación es "a"
      IO.mostrarResultado(OperacionesMatematicas.sumarNumeros(numeros)); // Llamar al método sumarNumeros del objeto OperacionesMatematicas y mostrar el resultado usando el método mostrarResultado del objeto IO
      break;
    case 'b': // Si la operación es "b"
      IO.mostrarResultado(OperacionesMatematicas.contarNumerosPrimos(numeros)); // Llamar al método contarNumerosPrimos del objeto OperacionesMatematicas y mostrar el resultado usando el método mostrarResultado del objeto IO
      break;
    case 'c': // Si la operación es "c"
      IO.mostrarResultado(OperacionesMatematicas.contarNumerosPares(numeros)); // Llamar al método contarNumerosPares del objeto OperacionesMatematicas y mostrar el resultado usando el método mostrarResultado del objeto IO
      break;
    case 'd': // Si la operación es "d"
      IO.mostrarResultado(OperacionesMatematicas.calcularPromedioPrimos(numeros)); // Llamar al método calcularPromedioPrimos del objeto OperacionesMatematicas y mostrar el resultado usando el método mostrarResultado del objeto IO
      break;
    case 'e': // Si la operación es "e"
      IO.mostrarResultado(OperacionesMatematicas.calcularPromedioPares(numeros)); // Llamar al método calcularPromedioPares del objeto OperacionesMatematicas y mostrar el resultado usando el método mostrarResultado del objeto IO
      break;
    default: // Si la operación no es válida
      alert("Operación no válida"); // Mostrar una alerta con un mensaje de error
  }
};

// Iniciar el programa
iniciarPrograma(); // Llamar a la función iniciarPrograma