// Methods
// Function inside object

function personInfo() {
    console.log(`My name is ${this.FirstName} And MY Age is ${this.Age}`);
}

const person1 = {
    FirstName: "pushakr",
    Age: 25,
    about: personInfo

}
const person2 = {
    FirstName: "Puspha raj",
    Age: 20,
    about: personInfo

}
const person3 = {
    FirstName: "Dooop",
    Age: 22,
    about: personInfo

}

person1.about();
person2.about();
person3.about();