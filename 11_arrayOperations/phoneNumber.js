const checkLength = (phoneNumber) => {
  if (phoneNumber.length <= 10) {
    //if 10 characters or less
    return true;
  } else return false;
}

// checkLength('1763687364')
// -> true

// checkLength('1763664')
// -> true

// checkLength('176366444444')
// false


const numbers = [
  '1763687364',
  '1763664',
  'aaaabbbccddddddddd' //should be filtered
  ]

  numbers.filter((numbers) => {
    return false;
  });
  // -> []

  numbers.filter((numbers) => {
    return true;
  });
  // -> [ '1763687364', '1763664', 'aaaabbbccddddddddd' ]
  
   
  const filterLongNumbers = (numbers) => {
  return numbers.filter(checkLength);
  }
  
  // filterLongNumbers(numbers)
  // -> [ '1763687364', '1763664' ]