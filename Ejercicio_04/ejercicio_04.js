// Función para encontrar la palabra más larga
const encontrarPalabraMasLarga = (...palabras) => {
  // Inicialización de la variable palabraMasLarga como una cadena vacía
  let palabraMasLarga = "";

  // Iteración sobre todas las palabras del array palabras
  for (let palabra of palabras) {
    // Verifica si la longitud de la palabra actual es mayor que la longitud de la palabra más larga encontrada hasta el momento
    if (palabra.length > palabraMasLarga.length) {
      // Asigna la palabra actual como la palabra más larga
      palabraMasLarga = palabra;
    }
  }

  // Retorna la palabra más larga encontrada
  return palabraMasLarga;
};
//El operador rest (...) en JavaScript 
//se utiliza en la definición de funciones para capturar un número arbitrario de argumentos y agruparlos en un array

// Función principal del programa
const programa = () => {
  const cantidadPalabras = parseInt(prompt("Ingrese la cantidad de palabras:"));
  const palabras = [];

  // Solicitar las palabras por teclado
  for (let i = 0; i < cantidadPalabras; i++) {
    const palabra = prompt(`Ingrese la palabra ${i + 1}:`);
    palabras.push(palabra);
  }

  // Encontrar la palabra más larga
  const palabraMasLarga = encontrarPalabraMasLarga(...palabras);

  // Mostrar la palabra más larga
  console.log(`La palabra más larga es: ${palabraMasLarga}`);
};

// Ejecutar el programa
programa();
