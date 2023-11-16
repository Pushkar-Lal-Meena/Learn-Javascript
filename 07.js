// trim()
// toUpperCase()
// toLowerCase()
// slice


// trim
let firstName = "   Pushkar   ";

console.log(firstName.length);
    firstName = firstName.trim();
    console.log(firstName);
    console.log(firstName.length);

// toUpperCase
let firstName1 = "pushkar";
    firstName1 = firstName1.toUpperCase();
console.log(firstName1);

// toLowerCase
let firstName2 = "PUSHKAR";
    firstName2 = firstName2.toLowerCase();
console.log(firstName2);

// Slice 
// 1. start index to end index
let firstName3 = "Pushkar";
     firstName3 = firstName3.slice(0,4); //Push
console.log(firstName3)