//---------------------------------------------
//  Multiply without multiplication operator
//---------------------------------------------

/**
 * Multiply two numbers.
 * @param {number} num1 - The first number.
 * @param {number} num2 - The second number.
 */
class Multiply {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
    this.isNegative = (num1 < 0 && num2 > 0) || (num1 > 0 && num2 < 0);
    this.multiply();
  }

  multiply() {
    let result = 0;
    const absNum1 = Math.abs(this.num1);
    const absNum2 = Math.abs(this.num2);

    for (let i = 0; i < absNum2; i++) {
      result += absNum1;
    }

    const product = this.isNegative ? -result : result;
    console.log(product);
  }
}

const multiply = new Multiply(11, 26);
