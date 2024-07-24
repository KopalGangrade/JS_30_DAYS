// let shopping_list = ['milk','butter','cheese','bread','curd','juice'];

// let html=""

// for (let i=0 ; i<shopping_list.length; i++) {
//     html+=`<li>${shopping_list[i].}</li>`
// }

// document.getElementById('list').innerHTML = html;




let shopping_list1 = [
    {text: 'milk', cost:50, need:true},
    {text: 'butter', cost:120, need:false},
    {text: 'cheese', cost:150, need:true},
    {text: 'curd', cost:20, need:false},
    {text: 'juice', cost:60, need:true}
]

let html1=""
let total = 0;

//note ->> in object write .text to access elements.

// use of for loop

// for (let i=0 ; i<shopping_list1.length; i++) {
//     let item =shopping_list1[i];
//     if (item.need){
//         html1+=`<li>${item.text}</li>`
//         total+=item.cost;
//     }
//     // html1+=`<li>${shopping_list1[i].text}</li>`
// }

// using while loop


let i=0;
let item;
// while (i<shopping_list1.length)
while(item = shopping_list1[i++])
{
    // const item = shopping_list1[i]; instance of using this line
    if (item.need){
        html1+=`<li>${item.text}</li>`
        total+=item.cost;
    }
    // i++;
}

document.getElementById('list').innerHTML = html1;
document.getElementById('cost').innerHTML = `$${total}`;
