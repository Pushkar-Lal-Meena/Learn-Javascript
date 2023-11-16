// Arrow fuctions
// in case this - 1 level up 

const  usre1 = {
    firstName : "Pushakr",
    age : 25 ,
    about : ()=>{
        console.log(this.firstName,this.age);
    }
}
usre1.about(usre1);
