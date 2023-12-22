// keypress event
// mouseover event


const body = document.body;

// keypress event
body.addEventListener("keypress", (e) => {
    console.log(e.key);
})

// mouseover event
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover", () => {
    console.log("mouseover event occourd..");
});

// mouseleave event
mainButton.addEventListener("mouseleave", ()=>{
    console.log("mouseleave event occourd");
})