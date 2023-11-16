
// const userMethods = {
//     about: function () {
//         return `${this.firstName} is ${this.age} years old `
//     },
//     isAge: function () {
//         return this.age >= 18;
//     },
//     sing: function () {
//         return "tu tu tarara taraaaraa"
//     }
// }

function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}

createUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old `
};
createUser.prototype.isAge = function () {
    return this.age >= 18;
};
createUser.prototype.sing = function () {
    return "tu tu tarara taraaaraa"
};

const user1 = createUser("Pushakr", "lal ", 20, "pushakr@gmail.com", "chargadiya");
const user2 = createUser("mohit", "lal ", 12, "pushakr@gmail.com", "chargadiya");
const user3 = createUser("goggle", "lal ", 25, "pushakr@gmail.com", "chargadiya");
console.log(user1);
console.log(user1.about());
// console.log(user2.sing());