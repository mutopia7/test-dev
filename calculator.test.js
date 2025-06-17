const calculator = require('./calculator');

describe('Calculator', () => {
  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds negative and positive numbers', () => {
      expect(calculator.add(-1, 5)).toBe(4);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(5, 2)).toBe(3);
    });

    test('subtracts negative from positive', () => {
      expect(calculator.subtract(5, -2)).toBe(7);
    });

    test('subtracts two negative numbers', () => {
      expect(calculator.subtract(-2, -3)).toBe(1);
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(3, 4)).toBe(12);
    });

    test('multiplies positive and negative', () => {
      expect(calculator.multiply(3, -4)).toBe(-12);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-3, -4)).toBe(12);
    });

    test('multiplies by zero', () => {
      expect(calculator.multiply(5, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(10, 2)).toBe(5);
    });

    test('divides negative by positive', () => {
      expect(calculator.divide(-10, 2)).toBe(-5);
    });

    test('divides two negative numbers', () => {
      expect(calculator.divide(-10, -2)).toBe(5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero');
    });
  });
});