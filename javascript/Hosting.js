//javascript interview question

// variable Hosting
console.log("hey my name is: ",Name)
let Name="shubham"
console.log("hey my name is: ",Name)



// Function declarations → fully hoisted
sayHello(); // ✅ Works

function sayHello() {
  console.log("Hello");
}

// Function expressions → not fully hoisted
sayHi(); // ❌ Error

const sayHi = function () {
  console.log("Hi");
};



//Hosting is a behavior where variable and function declare before the code execution 

/////////////

// Important interview points (very short):

// var → hoisted and initialized as undefined

// let & const → hoisted but not initialized (Temporal Dead Zone)

// Function declarations → fully hoisted

// Function expressions → not fully hoisted

/////////////

