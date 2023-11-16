// find method 

// const myArray = ["cat", "dog", "monkey"];

// function isLength(strimg) {
//     return strimg.length === 6;
// }
// const ans = myArray.find(isLength).toLocaleUpperCase();

// console.log(ans);


const user = [
    { useID: 1, userName: "harsh" },
    { useID: 2, userName: "shokin" },
    { useID: 3, userName: "happy" },
    { useID: 4, userName: "pusak" }
]

const myUser = user.find((user) => {
    return user.useID === 3
});
console.log(myUser);