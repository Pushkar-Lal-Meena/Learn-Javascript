// objects inside array
// very useful in real world application

const users = [
    { userId: 1, userName: "Pushkar", gender: "male" },
    { userId: 2, userName: "Chandu", gender: "male" },
    { userId: 3, userName: "Yogend", gender: "male" },
];
for (let user of users) {
    console.log(user.userName);
}
