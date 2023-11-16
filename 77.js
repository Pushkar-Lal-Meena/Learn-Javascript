// function (that function create a  object )
// 2) add key value pair 
// 3) object ko  return krega 

function createUser(firstName, lastName, age, email, address) {
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;
    user.email = email;
    user.address = address;
    user.about = function () {
        return `${this.firstName} is ${this.age} years old `
    }
    user.isAge = function () {
        return this.age >= 18;
    }
    return user;
}

const user1 = createUser("Pushakr", "lal ", 20, "pushakr@gmail.com", "chargadiya");
console.log(user1);
const is18 = user1.isAge();
console.log(is18);
const about = user1.about();
console.log(about);