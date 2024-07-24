// let list = ['red',
// 'black',
// 'blue',
// 'green',
// 'pink',
// {
//     text:'yellow', cost:3
// }
// ];


let list = [
    {text: 'milk', cost:50, need:true},
    {text: 'butter', cost:120, need:false},
    {text: 'cheese', cost:150, need:true},
    {text: 'curd', cost:20, need:false},
    {text: 'juice', cost:60, need:true}
]

// let item = list.find((element)=>{
//    return element.text ==='milk';
// })
let item = list.find((element)=> element.cost < 151);

console.log(item);
