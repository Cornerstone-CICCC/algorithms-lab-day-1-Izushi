// Exercise 12: Write a function named 'filterAdults' that takes an array of user objects (each with an 'age' property) and returns a new array with only the users who are 18 or older.

function filterAdults(users) {
  // your code here
  let filteredAdults = [];
  const adultAge = 18;
  for (let i = 0; i < users.length; i++) {
    if (users[i].age >= adultAge) {
      filteredAdults.push(users[i]);
    }
  }
  return filteredAdults;
}

console.log(filterAdults([{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }, { name: 'Jim', age: 17 }])) // [{ name: 'Jane', age: 18 }, { name: 'Joe', age: 19 }]