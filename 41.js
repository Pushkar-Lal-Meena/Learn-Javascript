// object destructuring 

const band = {
    bandName: "PK",
    famousSong: "staring to heaven",
    year: 1900,
    anotherFamusSong: "kashmir se",
}



// change variable name
// const { bandName:var1, famousSong:var2 } = band
// console.log(var1);
// console.log(var2);


const { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);