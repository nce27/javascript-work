const printHello = () => {
  console.log('Hello there!');
}


const executeAfterDelay = (delayTime, callbackFunction) => {
  setTimeout(callbackFunction, delayTime * 1000);
  //delayTime * 1000 as setTimeout works with milliseconds
}
  executeAfterDelay(5, printHello);
  
  
  // (after 5 seconds) -> Hello there!