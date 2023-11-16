// 1. array push pop

// 2. array shift unshift

let fruit = ["apple ", "mango", "grapes"];

// push  = add element to last
fruit.push("banana", "carry");
console.log(fruit);

// pop = remove element to last
let poppedFruit = fruit.pop();
console.log(fruit);
console.log("popped fruits is :-", poppedFruit);

// unshift => add item to first 
fruit.unshift("banana", "carry")
console.log(fruit);

// shift => remove element to first
let removedFruits = fruit.shift();
console.log(fruit);
console.log(" removed fruits is => ", removedFruits);