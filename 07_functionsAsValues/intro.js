// > getName()
// 'Michael'
// > const anotherGetName = getName;
// undefined
// > anotherGetName()
// 'Michael'
// > const callFunction = (aFunction) => {
// ... console.log(aFunction);
// ... }
// undefined
// > callFunction(getName);
// [Function: getName]
// undefined
// > callFunction(getName());
// Michael