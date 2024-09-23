// Exercise 11: Write a function named 'reverseWords' that takes a string of text and returns the string with the order of the words reversed.

function reverseWords(text) {
  // your code here
  let wordsArr = text.split(' ');
  let reversedWords = '';
  for (let i = wordsArr.length - 1; i >= 0; i--) {
    reversedWords += `${wordsArr[i]} `;
  }
  return reversedWords;
}

console.log(reverseWords('The quick brown fox')) // 'fox brown quick The'