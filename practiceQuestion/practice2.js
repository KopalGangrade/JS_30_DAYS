// for (var i=0; i<10; i++){
//     setTimeout(()=>console.log(i),0);
// } 



// const kopal = {
//     name:"kopal",
//     sayName:function(){
//         console.log(this.name);
//     },
// };

// const john = {
//     name: "John",
//     sayName:function(){
//         console.log(this.name);
//     },
// };

// john.sayName.call(kopal);   // kopal



const kopal = {
    name:"kopal",
    sayName:function(){
        console.log(this.name);
    }
};
setTimeout(kopal.sayName, 3*1000);  // undefined

const kopal1 = {
    name:"kopal",
    sayName:function(){
        console.log(this.name);
    }
};
setTimeout(kopal.sayName.bind(kopal1), 3*1000);



























//10 10 10 10 10 10 10 10 10 10

