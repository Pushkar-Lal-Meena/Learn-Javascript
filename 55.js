// function returning function

function myFun() {
    function hello() {
        console.log("hello world");
    }
    return hello;

}
const ans = myFun();
ans();

// console.log(ans());