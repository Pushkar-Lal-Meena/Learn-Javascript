// Add new HTML element to page


// innerHTML to add html element

const todolist = document.querySelector(".todo-list");
console.log(todolist);
todolist.innerHTML = "<li>new todo</li>";
// todolist.innerHTML +=  "<li>new todo2</li>";
// todolist.innerHTML +=  "<li>new todo3</li>";

// 1. When you should use it --> use to replce  ,
//  2. when you should not --> new element to not use 