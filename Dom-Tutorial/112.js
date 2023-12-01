// css class list cheack
const sectionTodo = document.querySelector(".section-todo");
console.log(sectionTodo.classList);

// css class add
// sectionTodo.classList.add('bg-dark');

// css class remove
// sectionTodo.classList.remove('container');
// console.log(sectionTodo.classList);

// css class exitet krti h kr ni
// const ans = sectionTodo.classList.contains('container');
// console.log(ans);

// toggle -->   1.class already exisit than remove class
//              2.class not available than add class
sectionTodo.classList.toggle('bg-dark');
sectionTodo.classList.toggle('bg-dark');