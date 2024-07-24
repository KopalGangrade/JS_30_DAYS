// console.log("dog" && "cat");

// 
// map is similar to object but little bit advance from object. 
// map key can be any dat type.(object can have straing key only.)
// map has more features. 
// better performace

// map is an object with new feature and better performance. 

// let obj = {
//     name:"kopal",
//     1:'this is me'
// }
// console.log(obj.name); 
// true will take as string
// can only access string as key

// ------------------get object key --------------

let obj = {
    name:"kopal",
    id:'this is me'
}
// let b = Object.keys(obj)
// console.log(b);  // find keys




// -----------using map --------------
let map = new Map([
    ['name', 'kopal'],
    [10, 'this is me']
])
// console.log(map.get(10));
// can access any of data type

// console.log(map.keys());   //find keys

// console.log(map.valuess()); // find values

// console.log(map.size());

map.set("country","india");   
// update using set
// map.delete(10);

// console.log(map.has(104)); 
// check propertys 

// map.forEach((a,b)=>{
//     console.log(b,a);
// })

// -----------for of -----------

for ([x,y] of map){
    console.log(x); // for keys
    console.log(y); // for values
}