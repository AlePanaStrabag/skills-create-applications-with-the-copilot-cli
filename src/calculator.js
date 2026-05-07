#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   - add        : Addition (a + b)
 *   - subtract   : Subtraction (a - b)
 *   - multiply   : Multiplication (a × b)
 *   - divide     : Division (a ÷ b), with division-by-zero error handling
 *   - modulo     : Remainder (a % b), with division-by-zero error handling
 *   - power      : Exponentiation (a ^ b)
 *   - squareroot : Square root of a; throws for negative input
 *
 * Usage:
 *   node calculator.js add 5 3           → 8
 *   node calculator.js subtract 9 4      → 5
 *   node calculator.js multiply 6 7      → 42
 *   node calculator.js divide 10 2       → 5
 *   node calculator.js modulo 10 3       → 1
 *   node calculator.js power 2 8         → 256
 *   node calculator.js squareroot 25     → 5
 */

// Addition: returns the sum of a and b
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of a and b
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of a and b
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of a and b; throws if b is zero
function divide(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}

// Modulo: returns the remainder of a divided by b; throws if b is zero
function modulo(a, b) {
  if (b === 0) throw new Error('Division by zero');
  return a % b;
}

// Power: returns a raised to the exponent b
function power(a, b) {
  return Math.pow(a, b);
}

// Square root: returns the square root of a; throws for negative numbers
function squareroot(a) {
  if (a < 0) throw new Error('Cannot take square root of a negative number');
  return Math.sqrt(a);
}

// Export functions for unit testing
module.exports = { add, subtract, multiply, divide, modulo, power, squareroot };

// CLI entry point — only runs when executed directly, not when imported for tests
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  if (!operation || arg1 === undefined) {
    console.error('Usage: node calculator.js <operation> <num1> [num2]');
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = arg2 !== undefined ? parseFloat(arg2) : undefined;

  if (isNaN(a) || (b !== undefined && isNaN(b))) {
    console.error('Error: Arguments must be valid numbers.');
    process.exit(1);
  }

  try {
    let result;
    switch (operation) {
      case 'add':
        result = add(a, b);
        break;
      case 'subtract':
        result = subtract(a, b);
        break;
      case 'multiply':
        result = multiply(a, b);
        break;
      case 'divide':
        result = divide(a, b);
        break;
      case 'modulo':
        result = modulo(a, b);
        break;
      case 'power':
        result = power(a, b);
        break;
      case 'squareroot':
        result = squareroot(a);
        break;
      default:
        console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, divide, modulo, power, or squareroot.`);
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
