const caesarCipher = require('./caesarCipher');

describe('caesarCipher', () => {
  test('shifts letters by positive factor', () => {
    expect(caesarCipher('hello', 3)).toBe('khoor');
    expect(caesarCipher('world', 5)).toBe('btwqi');
  });

  test('shifts letters by negative factor', () => {
    expect(caesarCipher('khoor', -3)).toBe('hello');
    expect(caesarCipher('btwqi', -5)).toBe('world');
  });

  test('wraps around alphabet (z -> a)', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
    expect(caesarCipher('abc', -3)).toBe('xyz');
  });

  test('preserves case', () => {
    expect(caesarCipher('Hello World', 3)).toBe('Khoor Zruog');
    expect(caesarCipher('JavaScript', 5)).toBe('OfafXhwnuy');
  });

  test('handles non-alphabetic characters', () => {
    expect(caesarCipher('hello, world!', 3)).toBe('khoor, zruog!');
    expect(caesarCipher('12345', 5)).toBe('12345');
  });

  test('handles large shift factors', () => {
    expect(caesarCipher('hello', 26)).toBe('hello'); // full rotation
    expect(caesarCipher('hello', 53)).toBe('ifmmp'); // 26*2 + 1
  });

  test('handles empty string', () => {
    expect(caesarCipher('', 5)).toBe('');
  });
});