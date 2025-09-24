function firstChar(str) {
  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== ' ') {
      return str[i]; // return first non-space char
    }
  }
  // If no non-space character found
  return '';
}
