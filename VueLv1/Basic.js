/**
 * Review Array & String
 *
 *Array: map, filter, find, reduce, replace, charAt,  push, pop, join, sort
 */

// map method
let ArrNumberBeforeMap = [1, 2, 3, 4, 5];
let ArrNumberAfterMap = ArrNumberBeforeMap.map((x) => {
  return x * x;
});

console.log(ArrNumberBeforeMap);
console.log(ArrNumberAfterMap);

let ArrStringBeforeMap = ["banana", "apple", "mango"];
let ArrStringAfterMap = ArrStringBeforeMap.map((x) => {
  return ` ${x} is eaten by me :)) `;
});

console.log(ArrStringBeforeMap);
console.log(ArrStringAfterMap);

// filter method

let ArrNumberBeforeFilter = [1, 2, 3, 4, 5];
let ArrNumberAfterFilter = ArrNumberBeforeFilter.filter((x) => {
  return x % 2 === 0;
});

console.log(ArrNumberBeforeFilter);
console.log(ArrNumberAfterFilter);

let ArrStringBeforeFilter = ["banana", "apple", "mango", "blue strawberry"];
let ArrStringAfterFilter = ArrStringBeforeFilter.filter((x) => {
  return x.length > 6;
});

console.log(ArrStringBeforeFilter);
console.log(ArrStringAfterFilter);

//reduce

let ArrReduce = [1, 2, 3, 4, 5];
let ArrAfterReduce = ArrReduce.reduce((a, b) => {
  return a + b;
}, 0);

console.log(ArrReduce);
console.log(ArrAfterReduce);

let listProducts = [
  { productName: "Banana", quantity: 3, unitPrice: 3400 },
  { productName: "Apple", quantity: 4, unitPrice: 4400 },
  { productName: "eggs", quantity: 10, unitPrice: 2500 },
];
let totalPrices = listProducts.reduce((a, b) => {
  return a + b.quantity * b.unitPrice;
}, 0);
console.log(listProducts);
console.log(totalPrices);

// join

let stringBeforeJoin = ["banana", "apple", "grape"];
let stringAfterJoin = stringBeforeJoin.join(" ");
console.log(stringBeforeJoin);
console.log(stringAfterJoin);

//sort

let arrNumber = [3, 2, 5, 8, 4, 1, 10];

console.log(
  arrNumber.sort((a, b) => {
    return a - b;
  })
);

let ArrBeforeSplice = ["banana", "apple", "kiwi"];
let ArrAfterSplice;
ArrAfterSplice = ArrBeforeSplice.splice(1, 0, "pear", "lemon");
console.log(ArrBeforeSplice);
console.log(ArrAfterSplice);

let str = "hello world";
console.log(str);
console.log(str.split("o"));
