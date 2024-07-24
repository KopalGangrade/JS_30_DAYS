// let list = ['red','black','blue','green','pink'];

// // accending order [sort]
// // decending order [sort, reverse]
// // list.sort().reverse();

// list.sort((a,b)=>{
//     if (a===b) return 0;
//     if (a<b) return 1;
//     return -1;
// })

// let html='';

// list.forEach((element) => {
//     html+=`<li>${element}</li>`;
// });

// document.getElementById("list").innerHTML=html;


let list = [
    {text:'milk', cost:14, need:true},
    {text:'butter', cost:12, need:true},
    {text:'ghee', cost:16, need:true},
    {text:'curd', cost:17, need:true},
    {text:'bread', cost:19, need:true}
];

// accending order [sort]
// decending order [sort, reverse]
// list.sort().reverse();

list.sort((a,b)=>{
    if (a===b) return 0;
    if (a<b) return 1;
    return -1;
})

let html='';

list.forEach(({text, cost, need}) => {
    html+=`<li>${text} ${cost}</li>`;
});

document.getElementById("list").innerHTML=html;

