// static list vs live list

// querySelecterAll hamein static list degi
// getElementBySomething hamain live list degi


// static list
    // const listItems = document.querySelectorAll(".todo-list li");
    // const sixthLi  = document.createElement("li");
    // sixthLi.textContent = "item 6 ";
    // const ul  = document.querySelector(".todo-list");
    // ul.append(sixthLi);
    // console.log(listItems);



// live list
    const ul  = document.querySelector(".todo-list");
    const listItems = ul.getElementsByTagName("li");

    const sixthLi = document.createElement("li");
    sixthLi.textContent = " item 6";

    ul.append(sixthLi);
    console.log(listItems);