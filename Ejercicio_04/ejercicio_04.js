// Función para encontrar la palabra más larga
const encontrarPalabraMasLarga = (...palabras) => {
  let palabraMasLarga = "";
  for (let palabra of palabras) {
    if (palabra.length > palabraMasLarga.length) {
      palabraMasLarga = palabra;
    }
  }
  return palabraMasLarga;
};

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
