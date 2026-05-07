/**
 * Unit tests for calculator.js
 *
 * Covers all four basic operations (add, subtract, multiply, divide)
 * including edge cases such as division by zero, negatives, and decimals.
 *
 * Example operations from image:
 *   2 + 3, 10 - 4, 45 * 2, 20 / 5
 */

const { add, subtract, multiply, divide } = require('../calculator');

// ── Addition ──────────────────────────────────────────────────────────────────
describe('add', () => {
  test('2 + 3 = 5 (from image example)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds two positive numbers', () => {
    expect(add(10, 20)).toBe(30);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -4)).toBe(6);
  });

  test('adds two negative numbers', () => {
    expect(add(-5, -7)).toBe(-12);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.5)).toBeCloseTo(4);
  });

  test('adding zero returns the same number', () => {
    expect(add(7, 0)).toBe(7);
  });
});

// ── Subtraction ───────────────────────────────────────────────────────────────
describe('subtract', () => {
  test('10 - 4 = 6 (from image example)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts two positive numbers', () => {
    expect(subtract(20, 8)).toBe(12);
  });

  test('result is negative when b > a', () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test('subtracts a negative number (double negative)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });

  test('subtracting zero returns the same number', () => {
    expect(subtract(9, 0)).toBe(9);
  });
});

// ── Multiplication ────────────────────────────────────────────────────────────
describe('multiply', () => {
  test('45 * 2 = 90 (from image example)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies two positive numbers', () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test('multiplying by zero returns zero', () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test('multiplying by one returns the same number', () => {
    expect(multiply(8, 1)).toBe(8);
  });

  test('multiplies two negative numbers (positive result)', () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test('multiplies a positive and a negative number (negative result)', () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

// ── Division ──────────────────────────────────────────────────────────────────
describe('divide', () => {
  test('20 / 5 = 4 (from image example)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides two positive numbers', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('divides with a decimal result', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-12, 4)).toBe(-3);
  });

  test('divides two negative numbers (positive result)', () => {
    expect(divide(-9, -3)).toBe(3);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Edge case: division by zero
  test('throws an error when dividing by zero', () => {
    expect(() => divide(5, 0)).toThrow('Division by zero');
  });

  test('throws an error when dividing zero by zero', () => {
    expect(() => divide(0, 0)).toThrow('Division by zero');
  });
});
