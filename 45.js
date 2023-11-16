// function expression

const singSong = function () {
    console.log("baby ko bass pasand haiii !..");

}
singSong();


const sumThreeNumber = function (number1, number2, number3) {
    return number1 * number2 + number3;
}
const ans = sumThreeNumber(2, 3, 4);
console.log(ans);


// isEven 
// input : 1 number
// output : true , false

const isEven = function (number) {
    return number % 2 === 0;
}
console.log(isEven(5));
