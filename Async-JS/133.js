// asynchronous programming in 
// callbacks , callback hell, pyraamid of doom


const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");
const heading8 = document.querySelector(".heading8");
const heading9 = document.querySelector(".heading9");
const heading10 = document.querySelector(".heading10");


// Text           Delay         Color
// one             1s           voilet
// two             2s           purple
// three           2s           red 
// four            1s           pink
// five            2s           green
// six             3s           blue        
// seven           1s           brown


// ~~~ callback hell ~~~

// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet"
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "purple"
//         setTimeout(() => {
//             heading3.textContent = "three";
//             heading3.style.color = "red"
//             setTimeout(() => {
//                 heading4.textContent = "four";
//                 heading4.style.color = "pink"
//                 setTimeout(() => {
//                     heading5.textContent = "five";
//                     heading5.style.color = "green"
//                     setTimeout(() => {
//                         heading6.textContent = "six";
//                         heading6.style.color = "blue"
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000)








function changeText(element, text, color, time, onSuccessCallback, onFailureCallback) {
    setTimeout(() => {
        if (element) {
            element.textContent = text;
            element.style.color = color;
            if (onSuccessCallback) {
                onSuccessCallback();
            }
        } else {
            if (onFailureCallback) {
                onFailureCallback()
            }
        }
    }, time)
}

// pyraamid of doom
changeText(heading1, "one", "violet", 1000,()=>{
    changeText(heading2, "two", "yellow", 1000,()=>{
        changeText(heading3, "three", "red", 1000,()=>{
            changeText(heading4, "four", "purple", 1000,()=>{
                changeText(heading5, "five", "orange", 1000,()=>{
                    changeText(heading6, "six", "black", 1000,()=>{
                        changeText(heading7, "seven", "gray", 1000,()=>{
                            changeText(heading8, "eight", "purple", 1000,()=>{
                                changeText(heading9, "nine", "red", 1000,()=>{
                                    changeText(heading10, "ten", "green", 1000,()=>{
    
                                    },()=>{console.log("heading10 does not exist");})
                                },()=>{console.log("heading9 does not exist");})
                            },()=>{console.log("heading8 does not exist");})
                        },()=>{console.log("heading7 does not exist");})
                    },()=>{console.log("heading6 does not exist");})
                },()=>{console.log("heading5 does not exist");})
            },()=>{console.log("heading4 does not exist");})
        },()=>{console.log("heading3 does not exist");})
    },()=>{console.log("heading2 does not exist");})
},()=>{console.log("heading1 does not exist");})

