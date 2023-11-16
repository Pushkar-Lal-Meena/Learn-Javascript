// some method 

// const number = [1, 23, 35, 64, 698];

// // ak bhi number yesa hai jo even hai = true

// const ans = number.some((numbers) => numbers % 2 === 0);
// console.log(ans);

const products = [
    { productId: 1, productName: "P1", price: 450 },
    { productId: 2, productName: "P2", price: 5000 },
    { productId: 3, productName: "P3", price: 8000 },
    { productId: 4, productName: "P4", price: 30000 },
    { productId: 5, productName: "P5", price: 120 },
    { productId: 6, productName: "P6", price: 100000 }
]

const pdrd = products.some((itemCard) => itemCard.price > 100000);
console.log(pdrd);