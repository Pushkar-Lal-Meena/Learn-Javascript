// key print


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

// key print  
for(let key in user1){
    // console.log(key);

    // only object key
    if(user1.hasOwnProperty(key)){
        console.log(key);
    }
}