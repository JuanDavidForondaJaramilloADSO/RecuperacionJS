// Definición de la clase Calculadora
export class Calculadora {
  // Constructor de la clase
  constructor(val1, val2) {
    // Inicialización de los valores de la calculadora
    this.val1 = val1;
    this.val2 = val2;
  }

  //para lo que nos sirve el contrusctor es que cuando creas una nueva calculadora con let calculadora = new Calculadora(5, 3);, 
  //el constructor se ejecuta automáticamente y asigna 5 a val1 y 3 a val2. 
  //Esto significa que la nueva calculadora está lista para realizar operaciones con estos valores.Automatiza eso

  // Método para realizar una suma
  sumar() {
    return this.val1 + this.val2;
  }

  // Método para realizar una resta
  restar() {
    return this.val1 - this.val2;
  }

  // Método para realizar una multiplicación
  multiplicacion() {
    return this.val1 * this.val2;
  }

  // Método para realizar una división
  division() {
    // Verificar si el segundo valor es cero para evitar la división por cero
    if (this.val2 === 0) {
      // Lanzar un error si se intenta dividir por cero
      throw new Error("No se puede dividir por cero");
    }
    // Devolver el resultado de la división si el divisor no es cero
    return this.val1 / this.val2;
  }
}
