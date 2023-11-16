// how to clone array 

// how to concatenate two arrays

let array1 = ["item1", "item2"];

// let array2 = array1.slice(0).concat(["item3","item4"]);   //concat to add more item      // 1 way create clone
// let array2 = [].concat(array1,["item3","item4"]);     // 2 way create clone


// new  way create clone / spread operator
let oneMoreArray = ["item3", "item4"];
let array2 = [...array1, ...oneMoreArray];          // 3 way create clone


array1.push("item6");


console.log(array1 === array2);
console.log(array1);
console.log(array2);