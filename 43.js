// nested destructuring 

const users = [
    { userId: 1, userName: "Pushkar", gender: "male" },
    { userId: 2, userName: "Hiina", gender: "Female" },
    { userId: 3, userName: "other ", gender: "other" },
];

const [{ userName: firstName, gender: gender1, userId }, ,{ gender }] = users;
console.log(firstName);
console.log(userId);
console.log(gender1); 