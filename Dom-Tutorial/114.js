// element create 

// document.createElement()
// Append
// prepend
// remove

// Append =  new element add in last element  
const newTodoItem = document.createElement("li")
newTodoItem.textContent = "Teach students";
const todoList = document.querySelector(".todo-list");
todoList.append(newTodoItem)

// // prepend =  new element add in starting element 
// todoList.prepend(newTodoItem)

// // remove = remove the element
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();


// before
// after 
 const newTodoItem1 = document.createElement("li")
 newTodoItem1.textContent= "Tech student";
 const todoList1 = document.querySelector(".todo-list")
todoList1.before(newTodoItem1)
