const user1 = {
    firstName : "pushksr",
    age : 22,
    about : function(){
        console.log(this.firstName,this.age);
    }
}

// don`t do this mistake
    // user1.about();
    // const func1 = user1.about;
    // func1();

const func = user1.about.bind(user1);
func();