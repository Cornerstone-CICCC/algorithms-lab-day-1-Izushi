// Exercise 8: Write a function named 'longestWord' that takes a string of text and returns the longest word in the string.

function longestWord(text) {
  // your code here
  let words = text.split(' ');
  let longest = '';
  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

console.log(longestWord('The quick brown poodle jumps over the lazy dog')) // 'jumps'