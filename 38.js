// how to iterate object

const person = {
    name: "Pushkar ",
    age: 22,
    hobbies: ["guitar", "criket", "Listening music"]
}


// for in loop 
// object .keys

// for (let key in person) {
//     console.log(`${key} : ${person[key]}`);
// //         console.log(key,":",person[key]);
// }


// object .keys

        // console.log(typeof(Object.keys(person)));
        // const val = Array.isArray((Object.keys(person)))
        // console.log(val);



// for of loop in use object


for (const key of Object.keys(person)) {
    console.log(key,":",person[key]);   
}