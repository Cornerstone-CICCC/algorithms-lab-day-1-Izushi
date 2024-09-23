// Exercise 10: Write a function named 'formatDate' that takes a date string (in the format 'YYYY-MM-DD') and returns a formatted date string (e.g., 'January 1, 2022').

function formatDate(dateStr) {
  // your code here
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
  ];
  let formattedDate = '';
  const dateArr = dateStr.split('-');
  const year = dateArr[0];
  const month = months[parseInt(dateArr[1]) - 1];
  const date = parseInt(dateArr[2]);

  return formattedDate = `${month} ${date}, ${year}`
}

console.log(formatDate('2022-01-01')) // 'January 1, 2022'