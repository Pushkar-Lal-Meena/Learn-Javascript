// clone using object.assign

// memory

const obj ={
    key1 : "Value1",
    key2 : "value2"
}

// new 
const obj2 = {...obj};

// old 
// const  obj2 = Object.assign({},obj);

obj.key3 = "value3";
console.log(obj);
console.log(obj2);