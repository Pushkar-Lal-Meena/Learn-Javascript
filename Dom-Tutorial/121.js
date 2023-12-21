// this keyword

// 1. this value = function declatinon ke case me this ki value {button} hogi ---
// 2. this value = Arrow function ke case me this ki value {window} hogi ---- 1level up

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click", function(){
    console.log("you clicked me ")
    console.log("value of this")
    console.log(this);
});
