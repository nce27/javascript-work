const addToBatch = (theArray, theNumber) => {
  if (theArray.length >= 5){
    return theArray
  }
  theArray.concat(theNumber)
}

// in node 
// > const addToBatch = require("./addToBatch.js")
