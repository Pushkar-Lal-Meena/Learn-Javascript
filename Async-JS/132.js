// underStand Callback in syncronus js

// exaple1
// function myfunc(callback) {
//     console.log("functuon is doing task 1");
//     callback();
// }

// myfunc(() => {
//     console.log("function is doing task2");
// })


// example2
function getTwoNumberAndAdd(number1, number2, onSuccess, Onfailure) {
    if (typeof number1 === "number" && typeof number2 === "number") {
        onSuccess(number1, number2);
    }
    else {
        Onfailure();
    }
}

getTwoNumberAndAdd(5, 4, (num1, num2) => {
    console.log(num1 + num2);
}, () => {
    console.log("wrong data type ");
    console.log("please pass number only");
})
