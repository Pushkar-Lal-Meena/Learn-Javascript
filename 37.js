 // difference between dot and bracket notation
const key = "email";
const person = {
    name: "Pushkar ",
    age: 22,
    "person hobbies": ["guitar", "criket", "Listening music"]
}

console.log(person["person hobbies"]);

person[key] = "pkgamer@gmail.com";
console.log(person);   