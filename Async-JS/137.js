//    Promise.resolve      
//  Promise chainig 


// const myPromise = Promise.resolve(5);
//  myPromise.then((value)=>{
//     console.log(value);
//  })

//  then()
// then method hamesha promise return karta hai 

function myPromise(){
    return new Promise((resolve,reject)=>{
        resolve("foo");
    })
}
myPromise()
    .then(value=>{
        console.log(value);
        value +="tor";
        return value;
    })
    .then((value)=>{
        console.log(value);
        value +=" AS";
        return value
    })
    .then((value)=>{
        console.log(value);
    })