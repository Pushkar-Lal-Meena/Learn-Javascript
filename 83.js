//    NEW Keyword 
// 1.) empty object this = {}
// 2.) return this {}
// 3.) proto set kr dega

//  Constructer function
//  new laga ke call krene ke liye capital me likinege
function CreateUser(firstName, lastName, age, email, address) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
    this.address = address;
}


CreateUser.prototype.about = function () {
    return `${this.firstName} is ${this.age} years old `;
};
CreateUser.prototype.isAge = function () {
    return this.age >= 18;
};
CreateUser.prototype.sing = function () {
    return "tu tu tarara taraaaraa";
};

const user2 = new CreateUser("mohit", "lal ", 12, "pushakr@gmail.com", "chargadiya");
const user1 = new CreateUser("Pushakr", "lal ", 20, "pushakr@gmail.com", "chargadiya");
const user3 = new CreateUser("goggle", "lal ", 25, "pushakr@gmail.com", "chargadiya");
console.log(user1);
console.log(user1.about());