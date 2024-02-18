// function returning promise

function ricePromise(){
    const bucket = ['coffe', 'chips', 'vegitables', 'salt', 'rice'];
return new Promise((resolve, reject) => {
    if (bucket.includes("vegitables") && bucket.includes("salt") && bucket.includes("rice")) {
        resolve("lt's Eat firedRice");
    } else {
        reject("something missing bucket");
    }
})
}

ricePromise().then(
    // jab promise resolve hoga
    (myfiredRice) => {
        console.log(myfiredRice);
    }
).catch(
    (error) => {
        console.log(error);
    })