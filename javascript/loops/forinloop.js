// for...in is used to iterate over the keys of an object.


// for (let key in object) {
//   // code
// }

let user = { name: "Shubham", age: 20 };

for (let key in user) {
  console.log(key, user[key]);
}
