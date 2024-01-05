// Write a function to check if a given string is a palindrome.

function isPalindrome(str) {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedStr = cleanStr.split("").reverse().join("");
  return cleanStr === reversedStr;
}

const result = isPalindrome("A man, a plan, a canal, Panama");
console.log(result);