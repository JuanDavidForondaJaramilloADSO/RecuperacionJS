// Importar las funciones de validación desde el módulo
import { validarTipoTarjeta, validarNumeroTarjeta } from "./modulo.js";

// Mostrar un mensaje de alerta al usuario indicando que se va a validar el tipo de tarjeta de crédito
alert("Validando el tipo de tarjeta de crédito");

// Bucle infinito para solicitar al usuario que ingrese el número de tarjeta de crédito hasta que se ingrese un número válido
while (true) {
  // Solicitar al usuario que ingrese el número de tarjeta de crédito
  let numTarjeta = prompt("Ingrese el número de su tarjeta de crédito:");

  // Validar el número de tarjeta ingresado
  if (!validarNumeroTarjeta(numTarjeta)) {
    // Si el número de tarjeta no es válido, mostrar un mensaje de error y continuar con el siguiente ciclo
    alert("El número de tarjeta ingresado no es válido. Por favor, inténtelo de nuevo.");
    continue; // Volver al inicio del bucle para solicitar nuevamente el número de tarjeta
  }

  // Validar el tipo de tarjeta de crédito
  let tipoTarjeta = validarTipoTarjeta(numTarjeta);

  // Mostrar el resultado de la validación
  alert(`El tipo de tarjeta de crédito es: ${tipoTarjeta}`);//

  // Salir del bucle
  break;
}