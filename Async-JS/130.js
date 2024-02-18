// syncronus Programing v/s Asyncronus Programing  
// js is syncronus progaming and single threded

// *-----setTimeOut----*

console.log("script sta  rt");

let id = setTimeout(() => {
    console.log("inside the setTimeOut");
}, 1000);
 
for (let i = 0; i < 100; i++) {
    console.log("...");
}

console.log("setTimeOut is  is",id);
console.log("clearing time out");
clearTimeout(id)
console.log("script end");
