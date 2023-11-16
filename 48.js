// Function inside function

function app() {
    const myFun = function () {
        console.log("hello for myFunc");
    }


    const addTwo = function (num1, num2) {
        return num1 + num2;
    }

    const mulFun = function (num1, num2) {
        return num1 * num2;
    }
    console.log("inside ");
    myFun();
    console.log(addTwo(5, 5));
    console.log(mulFun(5, 5));
}
app();