//  closures example = 3 ;

function myFunction(power) {
    return function (number) {
        return number ** power;
    }
}

// Square calculate
const square = myFunction(3);
const ans = square(2);
console.log(ans);

// Cube calculate
const cube = myFunction(3);
const ans2 = cube(3);
console.log(ans2);


// short code this  function work are both same

const myFunction = power => number => number ** power;

// 


