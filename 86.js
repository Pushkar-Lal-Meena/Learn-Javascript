// 2015  -- es6
// class kerword
// class are fake 

class CreateUser {
    constructor(firstName, lastName, age, email, address) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
        this.address = address;
    }
    about() {
        return `${this.firstName} is ${this.age} years old `;
    }
    is18() {
        return this.age >= 18;
    }
    song() {
        return "tu tu tarara taraaaraa";
    }
}

const user1 = new CreateUser("pushakr", "lal", 18, "pk@gmail.com", "chargadiaya")
console.log(user1.email);
console.log(Object.getPrototypeOf(user1));