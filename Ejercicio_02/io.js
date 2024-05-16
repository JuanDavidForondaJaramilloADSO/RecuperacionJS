// Módulo para manejar la entrada/salida
export const IO = { // Crear un objeto llamado IO; Exportar el objeto IO como el valor predeterminado

  leerNumeros: function () { // Definir un método llamado leerNumeros
    let cantidad = parseInt(prompt("Ingrese la cantidad de números:")); // Solicitar al usuario que ingrese la cantidad de números y convertir la entrada a un entero
    let numeros = []; // Crear un array vacío para almacenar los números
    for (let i = 0; i < cantidad; i++) { // Iniciar un ciclo for que se repita la cantidad de veces indicada por el usuario
      let num = parseFloat(prompt(`Ingrese el número ${i + 1}:`)); // Solicitar al usuario que ingrese cada número y convertir la entrada a un número de punto flotante
      numeros.push(num); // Agregar cada número al array
    }
    return numeros; // Devolver el array de números
  },

  mostrarResultado: function (resultado) { // Definir un método llamado mostrarResultado
    alert(`El resultado es: ${resultado}`); // Mostrar una alerta con el resultado
  }

};

