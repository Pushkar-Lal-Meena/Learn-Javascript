// same method in subclass


class Animal {
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

class Dog extends Animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    eat(){
        return(`Modified Eat : ${this.name}is eating`)
    }
    run() {
        return `${this.name} is runnig ${this.speed} kmph`
    }
}

// object = instance
const tommy = new Dog("Tommy ", 2, 25);
console.log(tommy.eat());
console.log(tommy.run());