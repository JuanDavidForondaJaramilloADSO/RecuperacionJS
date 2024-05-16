// modulo2.js
export class Calculadora {
  constructor(val1, val2) {
    this.val1 = val1;
    this.val2 = val2;
  }

  sumar() {
    return this.val1 + this.val2;
  }

  restar() {
    return this.val1 - this.val2;
  }

  multiplicacion() {
    return this.val1 * this.val2;
  }

  division() {
    if (this.val2 === 0) {
      throw new Error("No se puede dividir por cero");
    }
    return this.val1 / this.val2;
  }
}
