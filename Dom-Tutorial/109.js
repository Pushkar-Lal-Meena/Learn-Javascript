// get multiply element using by class name 
// get multiply element items using by querySelectorAll
// Array like Object --> indexing, length property


// {1}.HTML Collection

// let navItems = document.getElementsByTagName("a"); //HTML Collection
// console.log(navItems);

// we can't use forEach method to iterate though HTMLCollection
// 1. simple for loop
// 2. for of loop
// 3. forEach

// 1. simple for loop
// for (i = 0; i < navItems.length; i++) {
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "black";
// }

// 2. for of loop
// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }


// 3. ForEach Methods =>

// navItems = Array.from(navItems);     //HTML Collection change to Array
// // console.log(Array.isArray(navItems));

// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "green";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// });



// {2}.NodeList ==>

// console.log(Array.isArray(navItems));
// const navItems = document.querySelectorAll(".nav-item"); //NodeList
// console.log(navItems[1]); 

// 1. simple for loop
// 2. for of loop
// 3. forEach

let navItems = document.querySelectorAll("a");
        // // NodeList to change to Array
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));

// 1. simple for loop
// for (i = 0; i < navItems.length; i++) {
//     // console.log(navItems[i]);
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "black";
// }


// 2. for of loop
// for (let navItem of navItems) {
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// }

// 3. ForEach Methods =>
// navItems.forEach((navItem) => {
//     navItem.style.backgroundColor = "white";
//     navItem.style.color = "black";
//     navItem.style.fontWeight = "bold";
// });

