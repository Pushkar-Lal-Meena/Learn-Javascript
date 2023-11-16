// rest parameters

function myFunc(a, b, ...c) {
    console.log(` a is ${a}`);
    console.log(` b is ${b}`);
    console.log(` c is ${c}`);

}

myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);


function addAll(...num) {
    let total = 0;
    for (let number of num) {
        total = total + number;
    }
    return total;
}

const ans = addAll(1, 4, 5, 6, 7, 8, 9);
console.log(ans);  