const capitalize = require('./capitalize');

describe('capitalize function', () => {
  test('capitalizes the first letter of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
  });

  test('works with empty string', () => {
    expect(capitalize('')).toBe('');
  });

  test('does not change already capitalized strings', () => {
    expect(capitalize('Hello')).toBe('Hello');
    expect(capitalize('TEST')).toBe('TEST');
  });

  test('works with single character strings', () => {
    expect(capitalize('a')).toBe('A');
    expect(capitalize('z')).toBe('Z');
  });

  test('works with strings containing numbers or special chars', () => {
    expect(capitalize('1hello')).toBe('1hello');
    expect(capitalize('@test')).toBe('@test');
  });
});