// let arr = [1,2,3,4,5,6];

// arr.forEach(function(e,i){
//     console.log(e);
//     console.log(i);
// })


// forEach: Iterate an array elements. We use forEach only with arrays. It takes a callback function with elements, index parameter and array itself. 

let a=["kopal",3,6,"mom"];
a.forEach((e)=>{
    console.log(e);
});


// let sum = 0;
// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(num => console.log(num))
// console.log(sum)

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(num => sum+=num)
console.log(sum);