// condition controlled loops

// for (let i = 0 ; i < 10 ; i++){
//   console.log(i)
// }


// let counter = 0;
// while (counter <= 10){
//   console.log(counter)
//   counter++;
// }

// for (let x = 0 ; x <= 20 ; x++) {
//   if (x % 2 === 0){
//     console.log(`${x} is even`)
//   } else {
//     console.log(`${x} is odd`)
//   }
// }

const oddOrEven = (number) => {
  if (number % 2 === 0){
    return 'even';
  } else {
    return 'odd';
  }
}

for (let x = 0 ; x <= 20 ; x++) {
  const parity = oddOrEven(x)
  console.log(`${x} is ${parity(x)}`);
  }