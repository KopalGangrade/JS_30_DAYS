// Q1 There are some aditional properties, you have to display only original property of the array.
// Array.prototype.extraProperty = "kopal";

// const myArray = [1,2,3,4,5,6];
// for (let i in myArray) {
//     // console.log(i);
//     if (myArray.hasOwnProperty(i)) {
//         console.log(i);
//     }
// }

// Q2  use case

// set object ,  includes() , some() , reduce() , find(), findindex() , concat(), push()

const user = [
  {
    id: 1,
    name: "kopal",
    isActive: true,
    age: 23,
  },
  {
    id: 2,
    name: "riya",
    isActive: false,
    age: 27,
  },
  {
    id: 3,
    name: "mira",
    isActive: true,
    age: 24,
  },
  {
    id: 4,
    name: "siya",
    isActive: false,
    age: 21,
  },
];

// 1. check if user with such name exists

// SOLUTION 1

// const isNameExist =(name,user)=>{
//     let exist = false;
//     for (let i=0; i<user.length;i++){
//         if(user[i].name===name){
//             exist=true;
//         }
//     }
//     return exist;
// }
// console.log(isNameExist("siya",user));

// SOLUTION 2

// const isNameExist = (name, user) => {
//   let users = user.find((users) => users.name === name);
//     return Boolean(users);
// };
// console.log(isNameExist("siya", user));

// SOLUTION 3

// const isNameExist = (name, user) => {
//   let users = user.findIndex
//   ((users) => users.name === name);
//     return Boolean(users);
// };
// console.log(isNameExist("siya", user));

// SOLUTION 4

// const isNameExist = (name, user) => {
//       let users = user.some((users) => users.name === name);
//         return users;
//     };
//     console.log(isNameExist("siya", user));

// 2. adding element to  the Array.

// const arr = [1,2,3,4,5];
// let array1 = arr.push(4);
// console.log(array1);
// console.log(arr);

// const arr = [1,2,3,4,5];
// const append =(arr , ele)=>{
//     arr.push(ele);
//     return arr;
// }
// console.log(append(arr,7));

// ------------------------------------------------------------
// spread method help to create new array not modify original array.
// const arr = [1,2,3,4,5];
// const append =(arr , ele)=>{
//     return [...arr,ele];
// }
// console.log(append(arr,7));

// remove duplicates element in the array.

// const duplicate = [1,2,3,4,5];
// const arr = duplicate.set();

// const arr = [1,2,4,3,2,1,5];
// const removeDuplicate = (arr)=>{
//     const newArr = [];
//     arr.forEach((element) => {
//         if(!newArr.includes(element)){
//             newArr.push(element);
//         }
//     });
//     return newArr;
// }
// console.log(removeDuplicate(arr));

// ---------------set-------------------

//  -----------using set-------------
// const arr = [1,2,4,3,2,1,5];
// const arr1 = new Set(arr);
// console.log(arr1);
// console.log(arr);

// using set + Array.from
// const arr = [1, 2, 4, 3, 2, 1, 5];
// function arr2(arr){
//     const set = new Set(arr);
//     const arr1 = Array.from(set);
//     return arr1
// }

// console.log(arr2,arr);


// --------using spread operator --------
// const arr = [1, 2, 4, 3, 2, 1, 5];
// function duplicateSet(arr){
//     return [...new Set(arr)];
// }

// console.log(duplicateSet,arr);

// const arr = [1,2,3,4,5,12,7,3];
// const uniqueArray = (arr)=>{
//     return arr.reduce((acc,ele)=>{
//         return acc.includes(ele)? acc : [...acc,ele]
//     },[]);
// }
// console.log(uniqueArray(arr));

// concatenating the array.

// const mergeArray = (arr11, arr12) =>{
//     arr1.push(...arr2);
//     return arr1;
// }
// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];
// const result = mergeArray(arr1, arr2);
// console.log(result,arr1,arr2);


// const mergeArray = (arr11, arr12) =>{

//     return [...arr1,...arr2];
// }
// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];
// const result = mergeArray(arr1, arr2);
// console.log(result,arr1,arr2);

