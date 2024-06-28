for (let i = 0; i < 3; i++) {
    var varValue = i;
    let letValue = i;
    const constValue = i;
}
  
console.log(varValue); // 2
console.log(letValue); // ReferenceError: letValue is not defined
console.log(constValue); // ReferenceError: constValue is not defined