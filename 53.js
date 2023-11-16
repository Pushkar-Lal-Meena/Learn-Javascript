// parameter destructuring 

// Object
// React use

const person = {
    name: "pushkar",
    gender: "male",
    age: 22,
}

// function printDetail(obj) {
//     console.log(obj.name);
//     console.log(obj.gender);
// }


// parameter destructuring 
function printDetail({ name, gender, age }) {
    console.log(name);
    console.log(gender);
    console.log(age);
}
printDetail(person);