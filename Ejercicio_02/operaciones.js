// Módulo para operaciones matemáticas
// Módulo para operaciones matemáticas
export const OperacionesMatematicas = {//Exportar el objeTO OPERACIONES MATEn¿maticas  como0 el valor prederteminado 
  sumarNumeros: function (numeros) { // Definir un método llamado sumarNumeros que toma un array de números como argumento
    return numeros.reduce((total, num) => total + num, 0); // Usar el método reduce para sumar todos los números en el array y devolver el resultado
  },
  contarNumerosPrimos: function (numeros) { // Definir un método llamado contarNumerosPrimos que toma un array de números como argumento
    let contador = 0; // Inicializar un contador en 0
    for (let num of numeros) { // Iniciar un ciclo for que recorre cada número en el array
      if (this.esPrimo(num)) { // Si el número es primo, incrementar el contador. 
        contador++; //El objeto this se refiere al contexto actual en el que se está ejecutando el código. Se espera que esPrimo sea un método o función definida en el contexto actual.
      }
    }
    return contador; // Devolver el contador
  },
  contarNumerosPares: function (numeros) { // Definir un método llamado contarNumerosPares que toma un array de números como argumento
    return numeros.filter(num => num % 2 === 0).length; // Usar el método filter para filtrar los números pares y devolver la longitud del array resultante
  },
  calcularPromedio: function (numeros) { // Definir un método llamado calcularPromedio que toma un array de números como argumento
    const sum = numeros.reduce((total, num) => total + num, 0); // Usar el método reduce para sumar todos los números en el array y almacenar el resultado en la variable sum
    return sum / numeros.length; // Devolver el promedio de los números en el array
  },
  calcularPromedioPrimos: function (numeros) { // Definir un método llamado calcularPromedioPrimos que toma un array de números como argumento
    const primos = numeros.filter(num => this.esPrimo(num)); // Usar el método filter para filtrar los números primos y almacenar el resultado en la variable primos
    return this.calcularPromedio(primos); // Llamar al método calcularPromedio y pasarle la variable primos como argumento
  },
  calcularPromedioPares: function (numeros) { // Definir un método llamado calcularPromedioPares que toma un array de números como argumento
    const pares = numeros.filter(num => num % 2 === 0); // Usar el método filter para filtrar los números pares y almacenar el resultado en la variable pares
    return this.calcularPromedio(pares); // Llamar al método calcularPromedio y pasarle la variable pares como argumento
  },

  esPrimo: function(numero) {
    // Si el número es menor o igual a 1, no es primo
    if (numero <= 1) {
        return false;
    }
    
    // Iteramos desde 2 hasta la raíz cuadrada del número para verificar si es divisible
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) 
          // 
          {
            // Si encontramos un divisor, el número no es primo
            return false;
        }
    }
    
    // Si no encontramos ningún divisor, el número es primo
    return true;

  }
}
