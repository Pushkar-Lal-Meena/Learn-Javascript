// closures

// function can return functions

// function  outerFunction(){
//     function innerFunction(){
//         console.log("Hello Wolrd");
//     }
//     return innerFunction;
// }

// const ans = outerFunction();
// // console.log(ans);
// ans()


function printFullName(firstName, lastName) {
    function printName() {
        console.log(firstName, lastName);
    }
    return printName;
}

const ans = printFullName("pushkar", "lal");
// console.log(ans);
ans()