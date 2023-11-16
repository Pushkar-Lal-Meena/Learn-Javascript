const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old `
    },
    isAge: function () {
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.isAge;
    return user;
}
const user1 = createUser("Pushakr", "lal ", 20, "pushakr@gmail.com", "chargadiya");
const user2 = createUser("mohit", "lal ", 12, "pushakr@gmail.com", "chargadiya");
const user3 = createUser("goggle", "lal ", 25, "pushakr@gmail.com", "chargadiya");
console.log(user1.about());
console.log(user2.about());
console.log(user3.about());