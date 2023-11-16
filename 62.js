// every method 

// const numbers = [, 2, 4, 6, 8, 10];

// const ans = numbers.every((number) => number % 2 === 0);

// // call back function ---> true / false

// // every method ---> true / false

// console.log(ans);




// check every product price < 30000

const products = [
    { productId: 1, productName: "P1", price: 450 },
    { productId: 2, productName: "P2", price: 5000 },
    { productId: 3, productName: "P3", price: 8000 },
    { productId: 4, productName: "P4", price: 300 },
    { productId: 5, productName: "P5", price: 120 },
    { productId: 6, productName: "P6", price: 45000 }
]

const ans = products.every((carditem) => carditem.price < 50000);
console.log(ans);