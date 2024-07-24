
let duplicate = [2,3,4,1,2,3,5,7];
// let add=new Set(duplicate);
// let d=Array.from(add)
// console.log(d);
// let add1= [...new Set(duplicate)];
// console.log(add1); 


// Using Reduce
const arr = [1, 2, 3, 4, 1, 2, 3];
const uniqueArr = arr.reduce((acc, curr) => {
    if (acc.indexOf(curr) === -1) {
        acc.push(curr);
    }
    return acc;
}, []);
console.log(uniqueArr); // Output: [1, 2, 3, 4]


