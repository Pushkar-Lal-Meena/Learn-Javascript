// spread opretor

// const array1 = [1,2,3];
// const array2 = [4,5,6];

// // const newArray = [...array1,...array2,7,8,9];
// const newArray = [..."2454542"];
// console.log(newArray);


// spread operator in object

const obj1 = {
    key1: "value1",
    key2: "value2",
};

const obj2 = {
    key1: "value11",
    key3: "value22",
    key4: "value33",

};

const newObject1 ={..."ABCD"};
// const newObject2 ={...obj2,...obj1};
const newObject3 = { ...["item1", "item2"] };
console.log(newObject3);