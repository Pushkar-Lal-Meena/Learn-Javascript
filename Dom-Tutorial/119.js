// how to get the dimension of element 
// heught width

const sectionTodo = document.querySelector(".section-todo");
const info = sectionTodo.getBoundingClientRect().width;
console.log(info);