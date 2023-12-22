console.log("hellow");

const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// Capturing 
// child.addEventListener("click", () => {
//     console.log("capture !!!! child");
// },true)

// parent.addEventListener("click", () => {
//     console.log("capture !!!! parent");
// },true)
// grandparent.addEventListener("click", () => {
//     console.log("capture !!!! grandparent");
// },true)


// document.body.addEventListener("click", () => {
//     console.log("capture !!!! body");
// },true)


// no capturing
// bubbling
// child.addEventListener("click", () => {
//     console.log("Bubble -- child");
// })

// parent.addEventListener("click", () => {
//     console.log("Bubble -- parent");
// })
// grandparent.addEventListener("click", () => {
//     console.log("Bubble -- grandparent");
// })


// document.body.addEventListener("click", () => {
//     console.log("Bubble -- body");
// })

// event Deligation

grandparent.addEventListener("click",(e)=>{
    console.log(e);
})