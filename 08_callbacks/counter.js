// setInterval works the same way as setTimeout
// rather than executing the given function once after a delay, it executes it repeatedly. 
// For example, if we give 2000 for the number of milliseconds, 
// the function will execute every 2 seconds:
// E.g.
// setInterval(myFunction, 2000); // myFunction will execute every 2 seconds


// let used rather than const as counter will need to change
let counter = 0 
const increment = () => {
  
  console.log(counter++)
}
setInterval(increment, 1000)
