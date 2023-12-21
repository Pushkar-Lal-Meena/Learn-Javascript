//  --* clickEvent.html file use 

// event object 
// const firstButton = document.querySelector("#one");

// firstButton.addEventListener("click",function(e){
//     console.log(e.currentTarget);
// })

// jab bhi mai kisi bhi element pe event listener add hoga 
// js Engine --- line by line code execute karta hai 
// browser --- js Engine + extra features 
// browser --- js Engine + webApi

// jab browser ko pta chala ki user ne event perform kia
// jo hum listen kar rahe hai 
// browser ----2 kam krega
// 1.) callback function hai vo js Engine ko dega
// 2.)callback function ke sath browser jo event hua hai uski information bhi dega 
// ye info ak object ke form mai milegi 


const allButtons = document.querySelectorAll(".my-buttons button");

for (let button of allButtons) {
    button.addEventListener("click", (e) => {
        console.log(e.currentTarget);
    })
}