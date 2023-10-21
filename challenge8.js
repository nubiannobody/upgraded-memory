/**
 * Challenge 8
Create a function range that console.logs 
all numbers between 'start' and 'end' in sequential order. 
 */

function range(start, end) {
  let rangeNumbers = [];
  for (let i = start; i <= end; i++){
   rangeNumbers.push(i);
  }
  return rangeNumbers;
  
  }
  
  //Uncomment the lines below to test your code
console.log(range(1,4)) //=> 1, 2, 3, 4
console.log(range(4,2)) //=> []
  