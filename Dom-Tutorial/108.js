// get multiply element using by class name 
// get multiply element items using by querySelectorAll

const navItems = document.getElementsByClassName("nav-item"); //HTML Collection
console.log(navItems[2]); 
console.log(Array.isArray(navItems)); 

const navItems0 = document.querySelectorAll(".nav-item"); //NodeList
console.log(navItems0[2]); 