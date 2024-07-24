// searching array 

let list = ['red',
'black',
'blue',
'green',
'pink',
{
    text:'yellow', cost:3
}
];

console.log(list.indexOf('black'));
console.log(list.lastIndexOf('black'));
console.log(list.findIndex((item)=>{
    item.text==="pink"
}));

// list.find((arr)=>{
//     if 
//     console.log();
// })
// console.log(list);