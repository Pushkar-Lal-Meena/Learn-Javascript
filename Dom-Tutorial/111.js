const rootNode = document.getRootNode();
const htmlElementNode =(rootNode.childNodes[0]);
// console.log(htmlElementNode.childNodes);  // --- NodeList(3) [head, text, body]

const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
// console.log(headElementNode.nextSibling);

// --**--nextElementSibling that provide next element node, not a text node
// console.log(headElementNode.nextElementSibling);

// **sibling relation ----bhoter and sister
// console.log(headElementNode.nextSibling.textContent);
// console.log(headElementNode.childNodes);

// -**--change color for childNode to parentNode 
// const h1 = document.querySelector("h1")
// const body = h1.parentNode.parentNode;
// body.style.color = "black";
// body.style.backgroundColor = "yellow"


// const body = document.body;
// body.style.color = "black";
// body.style.backgroundColor = "yellow"

// const head = document.querySelector("head");
// const title = head.querySelector("title");
// console.log(title.childNodes);


const contianer = document.querySelector(".container");
console.log(contianer.children);