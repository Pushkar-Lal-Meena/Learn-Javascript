function hello(){
    console.log("hello wolrd ");
}

// const hello = {kry  : "tr"}

// javascript function ===> function  + object

// console.log(hello.name);

// you can add your own properties
// hello.myOwnProperty  = "very uniqe";
// console.log(hello.myOwnProperty);


// name property --> tells function name;

// function provides more usefull properties


// console.log(hello.prototype); //{}

// only functions provide prototype property

hello.prototype.abc = "dop";
hello.prototype.cd= "pop";
hello.prototype.sing = function(){
  return "uh lala re";
}
console.log(hello.prototype.cd);
console.log(hello.prototype.sing());