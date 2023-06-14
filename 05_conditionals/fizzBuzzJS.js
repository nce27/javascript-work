const fizzBuzz = (number) => {
  if (number % 3 === 0){
    console.log('Fizz');
  } else if (number % 5 === 0){
    return 'Buzz';
  } else if (number % 5 === 0 && number % 3 == 0){
    return'FizzBuzz'
  } else {
    return number; 
  }
}
module.exports = fizzBuzz;
