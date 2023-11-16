// importent arrray methods

// forEach

const numbers = [3, 4, 2, 5];

        //  function myFunc(number, index) {
        //     console.log(`index is ${index} , number is ${number}`);
        // }

        // numbers.forEach(function(number ,index){
        //     console.log(`index is ${index} , number is ${number}`);
        // });

        
//   FOREACH USED
        
// numbers.forEach(function(number, index){
//     console.log(number*3,index);
// })


const users = [
    { fisrtName: "pushkar", age: 22 },
    { fisrtName: "jeevan", age: 20 },
    { fisrtName: "natwar", age: 21 },
    { fisrtName: "karan", age: 25 },
]

// users.forEach(function (user) {
//     console.log(user.fisrtName);  
// });

users.forEach(user => {
    console.log(user.fisrtName.toLocaleUpperCase());
});


// for (const user of users) {
//     console.log(user.fisrtName);
// }