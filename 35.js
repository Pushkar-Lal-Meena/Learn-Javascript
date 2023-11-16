// array destructuring

const myarray = ["value1", "value2", "value3", "value4"];
let [myvar1, myvar2, ...myNewArray] = myarray;
console.log("value of var1 =", myvar1);
console.log("value of var2 =", myvar2);
console.log(myNewArray);
 