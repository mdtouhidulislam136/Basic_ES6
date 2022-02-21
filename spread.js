
const numbers = [12, 32, 32, 56, 34];
console.log(numbers);
// console.log(...numbers);

const max = Math.max(23, 99, 65);

//const maxarr = Math.max(numbers); this way is wrong because it's an array, it's can't print number this way.

// take element out of array using three dot, it's call spread operator
const maxArray = Math.max(...numbers);

// create a new array from another array using spread operator
const numbers2 = [...numbers]; // here we can add many element like [...numbers, 30, 20]
numbers2.push(35);

console.log(max, maxArray, numbers2);

