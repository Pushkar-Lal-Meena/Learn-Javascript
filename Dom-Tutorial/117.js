//  some old methods to support poor IE 
// appendChild
// insertBefore
// replaceChild
// removeChild

// 1. appendChild
    // const ul = document.querySelector(".todo-list");
    // const li =  document.createElement("li");
    // li.textContent ="NEW TODO"
    // ul.append(li)

// 2. insertBefore   naw
    // const ul = document.querySelector(".todo-list");
    // const li =  document.createElement("li");
    // const referenceNode = document.querySelector(".fisrt-todo")
    // li.textContent ="NEW TODO"
    // ul.insertBefore(li, referenceNode)  

// 3. replaceChild  naw
    // const ul = document.querySelector(".todo-list");

    // // //   new element
    // const li = document.createElement("li");
    // li.textContent = "NEW TODO";

    // const referenceNode = document.querySelector(".fisrt-todo");
    // ul.replaceChild(li, referenceNode);


//RemoveChild

const ul = document.querySelector(".todo-list");
    const li = document.createElement("li");
    li.textContent = "NEW TODO";
    const referenceNode = document.querySelector(".fisrt-todo");
    ul.removeChild(referenceNode);