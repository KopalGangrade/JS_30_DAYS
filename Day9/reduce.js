// reduce
// reduce: Reduce takes a callback function. The call back function takes accumulator, current, and optional initial value as a parameter and returns a single value. It is a good practice to define an initial value for the accumulator value. If we do not specify this parameter, by default accumulator will get array first value. If our array is an empty array, then Javascript will throw an error.

// arr.reduce((acc, cur) => {
//   // some operations goes here before returning a value
//  return 
// }, initialValue)                        

const numbers = [1, 2, 3, 4, 5]
const sum = numbers.reduce((acc, cur) => 2+cur)

console.log(sum)