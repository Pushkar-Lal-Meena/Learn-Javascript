// SAME BOTH METHOD


// const  user1 = {
//     firstName : "Pushakr",
//     age : 25 ,
//     about : function(){
//         console.log(this.firstName,this.age);
//     }
// }
 

// same as
const  usre1 = {
    firstName : "Pushakr",
    age : 25 ,
    about(){
        console.log(this.firstName,this.age);
    }
}

usre1.about();