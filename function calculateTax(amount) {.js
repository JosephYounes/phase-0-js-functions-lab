function calculateTax(amount) {
  return amount * 0.10;
}
console.log(calculateTax(100)); // Output: 10
function convertToUpperCase(text) {
  return text.toUpperCase();
}
console.log(convertToUpperCase("hello")); // Output: "HELLO"
function findMaximum(num1, num2) {
  return Math.max(num1, num2);
}

console.log(findMaximum(10, 20)); // Output: 20
function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}
console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
function calculateDiscountedPrice(originalPrice, discountPercentage) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  return originalPrice - discountAmount;
}
console.log(calculateDiscountedPrice(100, 20)); // Output: 80