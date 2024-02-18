// Promise

console.log("script star");
const bucket = ['coffe', 'chips', 'vegitables', 'salt', 'rice'];

// produce
const firedRisePromise = new Promise((resolve, reject) => {
    if (bucket.includes("vegitables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("lts,Eat firedRice");
    } else {
        reject("something missing bucket");
    }
})


// cunsume
//how to cunsume
firedRisePromise.then(
    // jab promise resolve hoga
    (myfiredRice) => {
        console.log(myfiredRice);
    }
).catch(
    // jab promise rejcet hoga
    (error) => {
        console.log(error);
    })


    setTimeout(() => {
    console.log("hello from setTimeOut");        
    }, 0);

    for (let i = 0; i < 100; i++) {
        console.log(Math.random(),i);
        
    }

    console.log("script end !!!!!!");