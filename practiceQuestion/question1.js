// let y=5
// // console.log(++x *x+10+ --x);
// // console.log(++x * x);
// // console.log(++x * x +10 + --x);

// let x=5;
// let result = (x>0)? -x:x;
// console.log(result);
// result = (result<0)? result+1:result-1;
// console.log(result);

// let i=0;
// let array=[1,2,3,4,6,7,8,9];
// for (let j=0; j<array.length; j++){
//     let n =  (array[j+1] - array[j]);
//     if (n==2){
//         console.log(array[j-1]);
//         break;
//     }
// }

// let i=1;
// let j=1;
// let arr = [1,2,3,4,6,7,8,9];
// while (i<arr.length) {
//     if (arr[i] != j) {
//         console.log(j);
//         j++;
//         break
//     }
//     i++;
// }


// function add(n1,n2){
//     return(n1+n2);
// }
// add(2,4)

// let a = [1,3,2,1,5,4,2,1];
// for (let i = 0; i < a.length; i++){
//     for (let j = 0; j< a[i].length;j++){
//         if (a[i]!=a[j]){
//             console.log(i);
//         }
//     }
// }

// let a = [1, 3, 2, 1, 5, 4, 2, 1];

// for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < a.length; j++) {
//         if (a[i] != a[j]) {
//             console.log(i);
//         }
//     }
// }

// et b = [1, 3, 2, 1, 5, 4, 2, 1];
// d=b.filter()
// console.log(d);l
let b = [1, 3, 2, 1, 5, 4, 2, 1];
let d = b.filter((value, index) => b.indexOf(value) === index);
console.log(d);