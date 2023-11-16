// filter method

//filer method return value true or false 

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

// const isEven = function (number) {
//     return number % 2 === 0; //even number 
//     // return number%2!==0; //odd number
// }

const evenNumber = numbers.filter((number) => {
    return number % 2 === 0;
});
console.log(evenNumber);