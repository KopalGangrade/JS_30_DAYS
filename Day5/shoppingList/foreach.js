
let shopping_list1 = [
    {text: 'milk', cost:50, need:true, place:'UP'},
    {text: 'butter', cost:120, need:false, place:"MP"},
    {text: 'cheese', cost:150, need:true, place:"HP"},
    {text: 'curd', cost:20, need:false, place:"KT"},
    {text: 'juice', cost:60, need:true, place:"MH"}
];
let html1='';
let total = 0;
// shopping_list1.forEach((item) => {
// shopping_list1.forEach(({text, cost, need ,place}) => {
//     if(need){
//         html1+= `<li>${text} : ${cost} at ${place}</li>`;
//         total+=cost;
//     }
// });

for (let {text , cost, need} of shopping_list1.enteries()){
    if (need){
        html1+=`<li>${text}</li>`;
        total+=cost;
    }
}

document.getElementById('list').innerHTML = html1;
document.getElementById('cost').innerHTML = `$${total}`;


// forEach using arrow function
// array.forEach(element => {
    
// });


// forEach using anon function 
// array.forEach(function(element, index, array){

// });