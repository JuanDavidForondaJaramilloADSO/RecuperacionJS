// script principal
import { Calculadora } from "./modulo2.js";

try {
  let elec = prompt("Qué operación desea realizar: \na. Suma \nb. Resta \nc. Multiplicación \nd. División");
  let num1 = parseInt(prompt("Ingrese el primer valor"));
  let num2 = parseInt(prompt("Ingrese el segundo valor"));
  let calculadora = new Calculadora(num1, num2);

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
      throw new Error("Has tenido un error: Elección de caso o números inválidos");
  }
} catch (error) {
  console.error(error.message);
}
