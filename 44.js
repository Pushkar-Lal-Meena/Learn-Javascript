// Function Declaration

function singSong() {
    console.log("baby ko bass pasand haiii !..");

}
singSong();


function sumOfthreeNumber(number1, number2, number3) {
    return number1 * number2 + number3;
}
const returnedValuev = sumOfthreeNumber(2, 3, 4);
console.log(returnedValuev);



// isEven
// input : 1 number 
// output : true , false

// function isEven(number) {
//     return number % 2 === 0;
// }
// console.log(isEven(6));


// function
// input : string 
// // output : firstCharater

// function firstChar(anyString) {
//     return anyString[0];
// }
// console.log(firstChar("Pushkar")); 




// function
// input : array, target (number)
// output : index of target if target persent in array

function findTarget(myArray, target) {
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] === target) {
            return i;
        }
    }
    return "array not found";
}
const myArray = [1, 5, 9, 50];
const ans = findTarget(myArray, 2);
console.log(ans);


