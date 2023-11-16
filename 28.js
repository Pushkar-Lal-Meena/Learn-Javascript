// primitive vs reference data types


// primitive type => var, let 

let num1 = 6;
let num2 = num1;
console.log("value is num 1 is ", num1);
console.log("value is num 2 is", num2);
num1++;
console.log("After the increment num 1");
console.log("value is num 1 is ", num1);
console.log("value is num 2 is", num2);


// reference types => array, object

let array1 = ["item1", "item2"];
let array2 = array1;
console.log(array1);
console.log(array2);
array1.push("item3");
console.log("after the pust item ");
console.log(array1);
console.log(array2);
