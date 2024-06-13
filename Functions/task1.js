function findUniqueElement(input){
    if(Array.isArray(input)){
        return input.find(element => input.indexOf(element) === input.lastIndexOf(element)) || null
    }
    else return input.split("").find(element => input.indexOf(element) === input.lastIndexOf(element)) || null
} // не понял, где конктретно по заданию нужно искать элемент, в строке, или массиве

console.log(findUniqueElement([2, 2, 1, 2, 2, 2])); // 1
console.log(findUniqueElement([2, 2, 2, 2, 2])); // null
console.log(findUniqueElement("ffffffafff")); // a