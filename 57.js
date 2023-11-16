// map mathod

const numbers = [3, 32, 5, 4, 5];

// const square = function (number) {
//     return number * number;
// }


// const squareNumber = numbers.map((number, index) => {
//     return `index : ${index},${number * number}`;
// });
// console.log(squareNumber);




const users = [
    { fisrtName: "pushkar", age: 22 },
    { fisrtName: "jeevan", age: 20 },
    { fisrtName: "natwar", age: 21 },
    { fisrtName: "karan", age: 25 },
]

const userNames = users.map((user) => { 
    return user.fisrtName;
});
console.log(userNames);