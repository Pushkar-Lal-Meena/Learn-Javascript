// lexical scope


const myvar = "pk";

function myapp() {
    // const myvar = "Hello";

    function myFunc() {
        // const myvar = "value52";
        const myfunc2 = () => {
            console.log("inside myvar", myvar);
        }
        myfunc2();
    }

    // const myFun2 = function () { }
    // const myfun3 = () => { }

    console.log(myvar);
    myFunc();
}
myapp();
