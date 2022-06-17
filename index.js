function isPalindrome(word) {
  // Write your algorithm here
  let reversed = word.split("").reverse().join("");
  if (reversed === word) {
    return true;
  } else {
    return false;
  }
}
isPalindrome("musa")

/* 
  Add your pseudocode here
  reverse the input string

if the reversed string is the same as the input
  return true
else
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
