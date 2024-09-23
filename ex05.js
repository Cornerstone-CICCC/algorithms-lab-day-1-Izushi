// Exercise 5: Write a function named 'groupByCategory' that takes an array of product objects and returns an object where the keys are categories and the values are arrays of products in those categories.

function groupByCategory(products) {
  // your code here
  let groupedCategory = {};

  for (let i = 0; i < products.length; i++) {
    let category = products[i].category;
    if (groupedCategory[category]) {
      groupedCategory[category].push(products[i]);
    } else {
      groupedCategory[category] = [products[i]];
    }
  }
  return groupedCategory;
}

console.log(groupByCategory([{ name: 'Apple', category: 'Fruit' }, { name: 'Carrot', category: 'Vegetable' }, { name: 'Banana', category: 'Fruit' }])) // { Fruit: [{ name: 'Apple', category: 'Fruit' }, { name: 'Banana', category: 'Fruit' }], Vegetable: [{ name: 'Carrot', category: 'Vegetable' }] }