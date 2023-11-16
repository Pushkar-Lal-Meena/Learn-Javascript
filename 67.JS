// Set (it is iterable )
// store data
// sets also have its own methods
// No index-based access
// order is not guaranted
// unique items only (no duplicates allowed)

const items = ["items1 ", "items2"]
const numbers = new Set();
numbers.add(1);
numbers.add(2);
numbers.add(3);
numbers.add(4);   
numbers.add(5); 
numbers.add(6);
numbers.add(7);
numbers.add(["item2"]);
numbers.add(["item2"])

//    if(numbers.has(1)){
//             console.log("1 is present");
//         }else {
//             console.log(" 1 is not present");
//         }

// for (let number of numbers){
//         console.log(number);
// }
// console.log(numbers); 

const myArray = [1,2,2,3,4,5,4,6,58];
const unipueElement = new Set(myArray);
console.log(unipueElement);


let length = 0;
for(let num of unipueElement){
        length++;
}
console.log(length );