// default parameters


// ECMA script before use
// function addTwo(a,b) {
//     if (typeof b==="undefined") {
//         b=1;
//     }
//     return a+b;
// }
// const ans = addTwo(8);
// console.log(ans);



// now use 

function addTwo(a, b = 2) {
    return a + b;
}
const ans = addTwo(8,5);
console.log(ans);