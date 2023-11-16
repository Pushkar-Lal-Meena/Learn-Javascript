const obj1 = {
    key1 : 'value1',
    key2 : "value2"
}

const obj2 = Object.create(obj1); //{}
// there is one more way to create empty object 
obj2.key3 = "value3";
// obj2.key2 = "unique"
console.log(obj2);

// this is happning 
console.log(obj2.__proto__);



// 

const userMethods = {
    about: function () {
        return `${this.firstName} is ${this.age} years old `
    },
    isAge: function () {
        return this.age >= 18;
    },
    sing: function () {
        return "tu tu tarara taraaaraa"
    }
}

function createUser(firstName, lastName, age, email, address) {
    const user = Object.create(userMethods); //{}
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    return user;
}
const user1 = createUser("Pushakr", "lal ", 20, "pushakr@gmail.com", "chargadiya");
const user2 = createUser("mohit", "lal ", 12, "pushakr@gmail.com", "chargadiya");
const user3 = createUser("goggle", "lal ", 25, "pushakr@gmail.com", "chargadiya");
console.log(user1);
console.log(user1.about());
// console.log(user2.sing());