// while loop in array
const fruits = ["apple ", "mango", "grapes"];
const fruits2 = [];
let i = 0;
while (i < fruits.length) {
  fruits2.push(fruits[i].toLocaleUpperCase());
  i++;
}
console.log(fruits2); 