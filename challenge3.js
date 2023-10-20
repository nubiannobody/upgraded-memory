/**
 * Challenge 3
Create a function lastLetter that takes a word (string) and console.logs the last character/letter of that word.
Hint: Remember that each character/letter in a string has an index position that you can access with brackets: [] 
 */


function lastLetter(word) {
   return word.charAt(word.length - 1); // pulls the character from the length of the word -1 which is always the last character. hello.charAt(word.length - 1) = o
}
  //Uncomment the lines below to test your code
  console.log(lastLetter("hello")) //=> "o"
  console.log(lastLetter("goodbye!")) //=> "!"
  console.log(lastLetter("ZeltoiD")) //=> "D"