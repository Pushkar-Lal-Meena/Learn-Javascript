// Arrow Function

const singSong = () => {
    console.log("baby ko bass pasand haiii !..");

}
singSong();


const sumThreeNumber = (number1, number2, number3) => {
    return number1 * number2 + number3;
}
const ans = sumThreeNumber(2, 3, 4);
console.log(ans);

// even num
const isEven = number => number % 2 === 0;

console.log(isEven(5));