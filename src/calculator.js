#!/usr/bin/env node

/**
 * Node.js CLI Calculator
 *
 * Supports four basic arithmetic operations:
 *   - add      : Addition (a + b)
 *   - subtract : Subtraction (a - b)
 *   - multiply : Multiplication (a × b)
 *   - divide   : Division (a ÷ b), with division-by-zero error handling
 *
 * Usage:
 *   node calculator.js add 5 3        → 8
 *   node calculator.js subtract 9 4   → 5
 *   node calculator.js multiply 6 7   → 42
 *   node calculator.js divide 10 2    → 5
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

// Export functions for unit testing
module.exports = { add, subtract, multiply, divide };

// CLI entry point — only runs when executed directly, not when imported for tests
if (require.main === module) {
  const [, , operation, arg1, arg2] = process.argv;

  if (!operation || arg1 === undefined || arg2 === undefined) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exit(1);
  }

  const a = parseFloat(arg1);
  const b = parseFloat(arg2);

  if (isNaN(a) || isNaN(b)) {
    console.error('Error: Both arguments must be valid numbers.');
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
      default:
        console.error(`Error: Unknown operation "${operation}". Use add, subtract, multiply, or divide.`);
        process.exit(1);
    }
    console.log(result);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
}
