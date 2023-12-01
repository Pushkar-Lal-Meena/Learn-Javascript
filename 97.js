// Lexical environment, scope chain

const lastName = "varshistha";

const printName = function () {
    const firstName = "Harshist";
    function myFunction() {
        console.log(firstName);
        console.log(lastName);
    }
    myFunction()
}
printName(); 