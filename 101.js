//  closures example = 4

function fun() {
    let counter = 0;
    return function () {
        if (counter < 1) {
            console.log("HII you called me");
            counter++;
        } else {
            console.log("I`m already called ");
        }
    }
}

const myFunc = fun();
myFunc();
myFunc();
