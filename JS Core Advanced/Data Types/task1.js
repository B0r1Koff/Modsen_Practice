function isDivisible(num1, num2) {
    return num1 % num2 === 0;
}

console.log(isDivisible(10, 2)); // true
console.log(isDivisible(15, 4)); // false
console.log(isDivisible(24, 6)); // true
console.log(isDivisible(35, 30)); // false