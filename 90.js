//  getter and setters
class person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

    }

    // getter method  = function ki tarah call nakrke proprty to call 
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    // setter = set a fullname to firstname and lasrname
    set fullName(fullName){
        const [firstName,lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
const person1 = new person("pushkar","lal", 25);
console.log(person1.fullName);
person1.fullName = "mohit kumar";
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);