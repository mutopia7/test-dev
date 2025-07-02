function caesarCipher(str, shift) {
  // Handle empty string and zero shift
  if (!str || shift === 0) return str;

  // Normalize shift to handle large values
  shift = shift % 26;
  if (shift < 0) shift += 26; // handle negative shifts

  return str.split('').map(char => {
    // Only shift alphabetic characters
    if (/[a-z]/.test(char)) {
      const code = char.charCodeAt(0);
      return String.fromCharCode(((code - 97 + shift) % 26) + 97);
    }
    if (/[A-Z]/.test(char)) {
      const code = char.charCodeAt(0);
      return String.fromCharCode(((code - 65 + shift) % 26) + 65);
    }
    // Return unchanged for non-alphabetic
    return char;
  }).join('');
}

module.exports = caesarCipher;