function isPalindrome(word) {
  // Write your algorithm here
  let theWord = word.split('');
  
  let newArray = []  
  do {
    newArray.unshift(theWord.shift())
    }
  while (theWord.length > 0)
  let newWord = newArray.toString().replaceAll(',', '')
  return newWord === word
}

/* 
  Add your pseudocode here
  -take in word as a string, then theWord = word.split(''). Using theWord, I want to create a newArray that takes in the contents of theWord in reverse order.  Then with newArray, convert it to newWord as a string, then if word == newWord then return true, otherwise return false
*/

/*
  Add written explanation of your solution here
  I need to write code that will compare a provided word to its mirror image to see if they are the same word.  If so, return true, otherwise return false
*/

// You can run `node index.js` to view these console logs

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("duck"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("jjjjjj"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("q"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hey"));
}

module.exports = isPalindrome;

