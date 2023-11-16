//  CALL , APPLY , BIND


function About(hobby, favmusician) {
    console.log(this.firstName, this.Age, hobby, favmusician);
}

const user1 = {
    firstName: "pushkar",
    Age: 28,


}
const user2 = {
    firstName: "pushpa",
    Age: 22
}


// call
About.call(user2, "gitar", "mikha")

// appply
About.apply(user2,["cricket", "akk"]);

// Bind -> bind is the return a function
const func = About.bind(user2,"cricket", "puvh");
func();