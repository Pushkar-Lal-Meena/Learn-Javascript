let number = [1,2,3,4];

console.log(Object.getPrototypeOf(number));
console.log(Array.prototype);
console.log(number);

function hello() {
    console.log("kello");
}
console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);