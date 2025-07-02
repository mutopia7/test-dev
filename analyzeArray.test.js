const analyzeArray = require('./analyzeArray');

describe('analyzeArray', () => {
  test('returns correct analysis for basic array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });

  test('handles single-element array', () => {
    expect(analyzeArray([5])).toEqual({
      average: 5,
      min: 5,
      max: 5,
      length: 1
    });
  });

  test('handles negative numbers', () => {
    expect(analyzeArray([-1, -8, -3, -4, -2])).toEqual({
      average: -3.6,
      min: -8,
      max: -1,
      length: 5
    });
  });

  test('handles decimal numbers', () => {
    expect(analyzeArray([1.5, 2.5, 3.5])).toEqual({
      average: 2.5,
      min: 1.5,
      max: 3.5,
      length: 3
    });
  });

  test('handles empty array', () => {
    expect(() => analyzeArray([])).toThrow('Array must not be empty');
  });

  test('throws error for non-number elements', () => {
    expect(() => analyzeArray([1, 2, 'three'])).toThrow('Array must contain only numbers');
  });
});