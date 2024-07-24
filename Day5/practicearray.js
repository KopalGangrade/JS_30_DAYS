myFun(); // second  

var myFun=function(){
    console.log("first");
};

myFun();   // first

function myFun(){
    console.log("second");
};
myFun();  

// myfun =undefined;   first  second  



// console.log(age);
// var age = 3;
// console.log(age);

// let age =2;
// console.log(age);

// var variable = 10;
// (() => {
// 	console.log(variable); // 10
// 	variable = 20;
// 	console.log(variable); // 20
// })();

// console.log(variable); //20 
// var variable=30;




// let a= [1,2,3,4,5,6];
// let b=a.splice(1,5);
// console.log(b);
// console.log(a);

let a= [1,2,3,4,5,6];
let b=a.slice(1,5);
console.log(b);
console.log(a);



