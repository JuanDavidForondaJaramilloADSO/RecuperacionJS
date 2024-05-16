// script principal
import { Calculadora } from "./modulo2.js";

try {
  // Solicitar al usuario que elija la operación a realizar
  let elec = prompt("Qué operación desea realizar: \na. Suma \nb. Resta \nc. Multiplicación \nd. División");

  // Solicitar al usuario que ingrese los dos valores para la operación
  let num1 = parseInt(prompt("Ingrese el primer valor"));
  let num2 = parseInt(prompt("Ingrese el segundo valor"));

  // Crear una instancia de la calculadora con los valores ingresados
  let calculadora = new Calculadora(num1, num2);

  // Evaluar la elección del usuario y realizar la operación correspondiente
  switch (elec) {
    case "a":
      console.log(`El resultado de la suma es ${calculadora.sumar()}`);
      break;
    case "b":
      console.log(`El resultado de la resta es ${calculadora.restar()}`);
      break;
    case "c":
      console.log(`El resultado de la multiplicación es ${calculadora.multiplicacion()}`);
      break;
    case "d":
      console.log(`El resultado de la división es ${calculadora.division()}`);
      break;
    default:
      // Lanzar un error si la elección del usuario no es válida
      throw new Error("Has tenido un error: Elección de caso o números inválidos");
  }
} catch (error) {
  // Capturar cualquier error que ocurra dentro del bloque try y manejarlo
  console.error(error.message);
}


//Al capturar errores, puedes evitar que el programa se detenga abruptamente debido a un problema.
// En lugar de eso, puedes tomar medidas para manejar el error y continuar ejecutando el programa de manera controlada.