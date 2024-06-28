function findMinimalElementOfArray(arr) {
    return arr.reverse()[0] || null;
}

console.log(findMinimalElementOfArray([3, 5, 2, 7, 1])); // 1
console.log(findMinimalElementOfArray([10, 20, 30, 40])); // 10
console.log(findMinimalElementOfArray([-5, -10, -15])); // -15
console.log(findMinimalElementOfArray([])); // null