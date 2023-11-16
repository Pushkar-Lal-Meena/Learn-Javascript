// reduce

// const numbers = [1, 2, 3, 4, 5];

// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });
// console.log(sum);

// accumulator      currentValue     return 
// 1                    2               3
// 3                    3               6   
// 6                    4               10  
// 10                   5               15



const product = [
    { productId: 1, productName: "Laptop", productPrice: 30000 },
    { productId: 2, productName: "Mobile", productPrice: 15000 },
    { productId: 3, productName: "TV", productPrice: 20000 },
    { productId: 4, productName: "Desktop", productPrice: 25000 },
];

const totalAmount = product.reduce((totalPrice, currentProduct) => {
    return totalPrice + currentProduct.productPrice;
}, 0);
console.log(totalAmount);

// totalPrice     currentProduct   return
//  0               {}              30000
// 30000            15000           45000
// 45000            20000           65000
// 65000            25000           90000
