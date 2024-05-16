//Aquí se está definiendo y exportando una función llamada validarTipoTarjeta. 
//Esta función toma un argumento, numTarjeta, que es el número de la tarjeta de crédito que se quiere validar.


export const validarTipoTarjeta = (numTarjeta) => {
  // Definir expresiones regulares para validar el tipo de tarjeta
  let regex_American = /^(34|35|36|37)\d{13}$/; // American Express: 34, 35, 36 o 37 seguido de 13 dígitos
  let regex_Diners = /^(30[0-5]|36[0-9]|37[0-9]|38[0-9])\d{11}$/; // Diners Club: 300-305, 360-369, 370-379 o 380-389 seguido de 11 dígitos
  let regex_Discover = /^6011\d{12}$/; // Discover: 6011 seguido de 12 dígitos
  let regex_Mastercard = /^5[1-5]\d{14}$/; // Mastercard: 51-55 seguido de 14 dígitos
  let regex_Visa = /^4\d{15}$/; // Visa: 4 seguido de 15 dígitos



  // Validamos el tipo de tarjeta de crédito 
  if (regex_American.test(numTarjeta)) { 
    return "American Express"; 
  } else if (regex_Diners.test(numTarjeta)) { 
    return "Diners Club"; 
  } else if (regex_Discover.test(numTarjeta)) { 
    return "Discover"; // 
  } else if (regex_Mastercard.test(numTarjeta)) { 
    return "Mastercard"; // Devolver "Mastercard"
  } else if (regex_Visa.test(numTarjeta)) { 
    return "Visa"; 
  } else { 
    return "Desconocida"; 
  }
};

// Exportar la función validarNumeroTarjeta para validar el número de tarjeta de crédito
export const validarNumeroTarjeta = (numTarjeta) => {
  // Validar que el número de tarjeta no contenga caracteres no numéricos
  if (/[^0-9]/.test(numTarjeta)) { // Si la expresión regular /[^0-9]/ coincide con el número de tarjeta
    return false; // Devolver false
  }
  //El método .test() se utiliza en expresiones regulares en JavaScript para comprobar si un patrón se encuentra dentro de una cadena

  // Validar que el número de tarjeta no tenga más de 16 dígitos
  if (numTarjeta.length > 16) { // Si la longitud del número de tarjeta es mayor a 16
    return false; // Devolver false
  }

  // Validar que el número de tarjeta sea un entero positivo
  if (numTarjeta <= 0 || isNaN(numTarjeta)) { // numTarjeta <= 0: Esta condición verifica si el valor de numTarjeta es menor o igual a 0 
    //isNaN(numTarjeta): Esta función verifica si el valor de numTarjeta no es un número
    return false; // Devolver false
  }

  // Si todo queda correcto devuelve true y que significa que devuelva true 🤓? pues que se ejecutara el bloque de codigo del if
  return true;
};

// Mostrar un mensaje de alerta al usuario indicando que se va a validar el número de tarjeta de crédito
alert("Validando la tarjeta de credito");
let numTarjeta; // Declarar una variable llamada numTarjeta sin inicializar

while (true) { // Iniciar un ciclo infinito
  numTarjeta = prompt("Ingrese el número de la tarjeta de crédito: "); // Solicitar al usuario que ingrese el número de tarjeta de crédito y asignarlo a la variable numTarjeta

  if (validarNumeroTarjeta(numTarjeta)) { // Validar si el número de tarjeta de crédito es válido usando la función validarNumeroTarjeta
    let tipoTarjeta = validarTipoTarjeta(numTarjeta); // Si el número de tarjeta es válido, determinar el tipo de tarjeta usando la función validarTipoTarjeta y asignar el resultado a la variable tipoTarjeta
    alert(`El tipo de tarjeta de crédito es: ${tipoTarjeta}`); 
    // ${tipoTarjeta}`) se llama (template string)  interpolacion de variables 
    // Cuando se utiliza dentro de una plantilla de cadena, ${} se reemplaza por el valor actual de la variable  en la cadena resultante.
    // Mostrar una alerta con el tipo de tarjeta de crédito
    break; // Salir del ciclo infinito
  } else { // Si el número de tarjeta no es válido
    alert("El número de tarjeta de crédito ingresado no es válido. Por favor, inténtelo de nuevo."); // Mostrar una alerta con un mensaje de error
  }
}




