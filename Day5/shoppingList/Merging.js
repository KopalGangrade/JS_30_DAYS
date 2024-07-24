// let odd = [1,3,5,7];
// let even = [2,4,6,8];
// let number = odd.concat(even);
// console.log(number);

// let number1 = [...odd, ...even];
// console.log(number1);



// Copying Arrays

// slice - create a new array.


let list = [
    {text: 'milk', cost:50, need:true},
    {text: 'butter', cost:120, need:false},
    {text: 'cheese', cost:150, need:true},
    {text: 'curd', cost:20, need:false},
    {text: 'juice', cost:60, need:true}
]

let copy = list.slice(0,3);
// console.log(copy === list[0]);
console.log(copy);



// Transforming Arrays

// Filtering Arrays