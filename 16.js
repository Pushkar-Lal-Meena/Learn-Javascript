// AND, OR Operator

let firstName = "Harshit"
let age = 2;

// if (firstName[0]=== "p"){
// console.log("your name start with H");
// }
// if (age > 18){
// console.log("you are above 18");
// }


// And operator (BOTH  condition is true are code is run)
if (firstName[0] === "H" && age > 18) {
    console.log("Name starts with H and above 18");
} else {
    console.log("inside else")
}



// OR opertor {any one condition is true are code is run}
if (firstName[0] === "H" || age > 18) {
    console.log("Name starts with H and age above 18");
} else {
    console.log("inside else")
}
