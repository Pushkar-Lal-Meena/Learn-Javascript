class animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name}is eating`;
    }
    isSuperCute() {
        return this.age <= 1;
    }
    isCute() {
        return true;
    }
}

class Dog extends animal{

}

const tommy = new Dog ("Tommy ",2);
console.log(Dog);
console.log(tommy.eat());