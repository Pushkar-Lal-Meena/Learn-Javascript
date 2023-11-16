// Maps
// Map is an iterable

// store data in ordered fastion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol
// as key 

// in maps you can use anything as key 
// like array , number ,string 


// object Literal 
// key -> string
// key  -> symbol 
// const person  ={
//     firstName : "Pushkar",
//     age : 56,
//     1 : "one",
// }

// // console.log(person.firstName);
// // console.log(person['firstName']);
// console.log(person['1']);

// for (let key in person){
//     console.log(typeof key);
// }



// key value pair
// const person = new Map();
// person.set('firstName','pushkar');
// person.set('age', 25);
// person.set(1,'one')

// console.log(person);
// console.log(person.get('firstName'));
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key,value ] of person){
//     // console.log(Array.isArray(key));
//     console.log(key,value);
// }

// const user = new Map([['userName', 'pushkar'], ['age',22]])
// console.log(user);


const person1 = {
    id  : 1,
    firstName: "Pushkar"
}

const extrainfo = new Map();
extrainfo.set(person1,{age:23, gender: "male"})
console.log(person1.id);
console.log(extrainfo);
console.log(extrainfo.get(person1).age);