const numbers = [1, 2, 3, 4]

numbers.map((number) => {
  return 'a';
});
// iterates over each element of the array (numbers),
// calls the function, executes it and generates a new array

// ->[ 'a', 'a', 'a', 'a' ]



const numbers2 = [1, 2, 3, 4]

numbers2.map((number) => {
  return number;
});

// -> [ 1, 2, 3, 4 ] 



const numbers3 = [1, 2, 3, 4]

numbers3.map((number) => {
  return number + 1;
});

// -> [ 2, 3, 4, 5 ] 



const numbers4 = [1, 2, 3, 4]

numbers4.map((number) => {
  return number * number;
});

// -> [ 1, 4, 9, 16 ] 