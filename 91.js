// static method and properties

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // direct class related method
    static classInfo(){
        return "this is person class"
    }

    // static property
    static decs = "static proprty"

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    set fullName(fullName) {
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat() {
        return `${this.firstName} is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }

}
const person1 = new Person("harshit","mali",25)
console.log(person1.eat());
console.log(Person.classInfo());
console.log(Person.decs);