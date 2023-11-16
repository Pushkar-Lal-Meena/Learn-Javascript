// sort method 

//  sort 

// 5, 9, 100, 50, 90, 500
// 5, 9, 50, 90, 100, 500 // (expected)

// const numbers = [5, 9, 100, 50, 90, 500];


const userNames = ["pushkar", "abdx ", "jp", "pk", "P"];
userNames.sort();
// console.log(userNames);


// 1st Way
const numbers = [5, 9, 100, 50, 90, 500];
numbers.sort((a, b) => {
    return a - b;
})
// console.log(numbers);


// 2nd way
numbers.sort((a, b) => b - a);
// console.log(numbers);


// how to work this method 
// 100, 50
// a-b ===> 50
// a-b ===> positive(greter than 0) b,a
// 50 , 100

// a-b ===> negative ===> a,b
// 5,9 ===> -4


// price = lowToHigh , highToLow

const products = [
    { productId: 1, productName: "P1", price: 450 },
    { productId: 2, productName: "P2", price: 5000 },
    { productId: 3, productName: "P3", price: 8000 },
    { productId: 4, productName: "P4", price: 300 },
    { productId: 5, productName: "P5", price: 120 },
    { productId: 6, productName: "P6", price: 45000 }
]
// lowToHigh
const lowToHigh = products.slice(0).sort((a, b) => {
    return a.price - b.price;
});
console.log(lowToHigh);

// highToLow
const highToLow = products.slice(0).sort((a, b) => {
    return b.price - a.price;
});
console.log(highToLow);
