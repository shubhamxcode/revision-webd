// forEach() is used to loop through an array and perform an action on each element, but it does not return a new array.


// array.forEach((element, index, array) => {
//   // code
// });


const stocks=["tatasilver","pw","tatagold"]

stocks.forEach((name,index)=>{
    stocks[index]=name.toUpperCase()
})

console.log(stocks)