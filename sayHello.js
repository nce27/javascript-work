const sayHello = (name) => {
  return 'Hello ' + name;
  // return `Hello ${name}`
}
module.exports = sayHello;

// (in Node REPL) 
// const helloThere = require('./sayHello');
// helloThere('Noah') 
          // (outputs) => 'Hello Noah'
