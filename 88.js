// Super


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

class Dog extends animal {
    constructor(name, age, speed) {
        super(name, age);
        this.speed = speed;
    }
    run() {
        return `${this.name} is runnig ${this.speed} kmph`
    }
}

// object = instance
const tommy = new Dog("Tommy ", 2, 25);
console.log(Dog);
console.log(tommy.run());