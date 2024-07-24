// filter
// Filter: Filter out items which full fill filtering conditions and return a new array.

let a = [2,3,4,5,6,8];
let b = a.filter(function(e){
   return (e>4)
})
console.log(b);