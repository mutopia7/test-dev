const reverseString = require('./reverseString');

describe('reverseString function', () => {
  test('reverses a basic string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
  });

  test('works with empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('works with single character strings', () => {
    expect(reverseString('a')).toBe('a');
    expect(reverseString('Z')).toBe('Z');
  });

  test('works with palindromes', () => {
    expect(reverseString('racecar')).toBe('racecar');
    expect(reverseString('madam')).toBe('madam');
  });

  test('works with spaces and special characters', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
    expect(reverseString('123! abc')).toBe('cba !321');
  });
});