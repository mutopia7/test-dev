function analyzeArray(arr) {
  // Validation checks
  if (!Array.isArray(arr)) throw new Error('Input must be an array');
  if (arr.length === 0) throw new Error('Array must not be empty');
  if (arr.some(item => typeof item !== 'number' || isNaN(item))) {
    throw new Error('Array must contain only numbers');
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    average,
    min,
    max,
    length: arr.length
  };
}

module.exports = analyzeArray;