
let list = [
    {text: 'milk', cost:50, need:true},
    {text: 'butter', cost:120, need:false},
    {text: 'cheese', cost:150, need:true},
    {text: 'curd', cost:20, need:false},
    {text: 'juice', cost:60, need:true}
]



let listelement = list.filter((item)=>item.need && item.cost<60)
.map(({text, cost, need})=>{
    if(need){
        return `<li>${text}</li>`;
    }else{
        return '';
    }
})
// console.log(listelement);
document.getElementById("list").innerHTML = listelement.join('');



