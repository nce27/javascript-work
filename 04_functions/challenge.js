

// function result (add, multiply){
//   return multiply * add
// }

// console.log(multiply(2 *(add(2+2))));

const add = require('./add');
const multiply = require('./multiply');

const result = multiply(2, add(4, 4));
console.log(result);