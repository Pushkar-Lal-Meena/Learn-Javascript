// little practice with event 

const allButton =document.querySelectorAll(".my-buttons button");
// console.log(allButton.length);

allButton.forEach(button =>{
    button.addEventListener("click", (e) =>{
        // console.log(e.target);
        e.target.style.backgroundColor="yellow";
        e.target.style.color="red"
    })
})