// Función para mostrar los números en una tabla por consola
const mostrarNumerosEnTabla = (...numeros) => {
  const numerosOrdenados = numeros.sort((a, b) => b - a);//
  console.log("Números ordenados de mayor a menor:");
  console.table(numerosOrdenados);
};

// Función principal del programa
const programa = () => {
  const cantidadNumeros = parseInt(prompt("Ingrese la cantidad de números:"));
  const numeros = [];

  // Solicitar los números por teclado
  for (let i = 0; i < cantidadNumeros; i++) {
      const numero = parseFloat(prompt(`Ingrese el número ${i + 1}:`));
      numeros.push(numero);
  }

  // Mostrar los números en una tabla por consola
  mostrarNumerosEnTabla(...numeros);
};

// Ejecutar el programa
programa();