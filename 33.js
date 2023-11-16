// for of loop in array
const fruits = ["apple", "mango", "grapes", "fruit4", "fruits5"];
const fruits2 = [];

for (let fruit of fruits) {
    fruits2.push(fruit.toLocaleUpperCase());
}
console.log(fruits2);