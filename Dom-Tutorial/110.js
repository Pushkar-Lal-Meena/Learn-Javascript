// innerHTML

const headLine = document.querySelector(".headline");
console.log(headLine.innerHTML);
headLine.innerHTML = "<h1>Inner html changed</h1>";
// += means add more
headLine.innerHTML += "<button class =\"btn\">Learn More </button>"
console.log(headLine.innerHTML);