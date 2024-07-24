// why we use promise in js 
// Promises are used in JavaScript to handle asynchronous operations more effectively. They provide a cleaner and more structured way to work with asynchronous code compared to traditional callback functions.
// 1. Readability and Maintainability

// 2. Error Handling ->Promises have built-in error handling using the .catch() method.
// Errors in any part of the promise chain can be caught and handled in a single .catch() block.

// 3. Avoiding Callback Hell -> avoid the callback hell problem, where multiple nested callbacks can lead to unreadable and hard-to-maintain code.
// 4. Sequential Execution  -> Promises provide a way to ensure that asynchronous operations execute in a specific order. 
// 5. Promise Combinators -> Promise.all() and Promise.race()
// 6. ntegration with Modern APIs

// A Promise is a way to handle asynchronous operations in JavaScript. It allows handlers with an asynchronous action's eventual success value or failure reason. This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.

// A Promise is in one of these states:

// pending: initial state, neither fulfilled nor rejected.
// fulfilled: meaning that the operation completed successfully.
// rejected: meaning that the operation failed.

// 1. promise is Object.

// syntax
// let myPromise = new Promise(function(myResolve, myReject) {
//     // "Producing Code" (May take some time)
    
//       myResolve(); // when successful
//       myReject();  // when error
//     });
    
//     // "Consuming Code" (Must wait for a fulfilled Promise)
//     myPromise.then(
//       function(value) { /* code if successful */ },
//       function(error) { /* code if some error */ }
//     );



//   Promise.then() takes two arguments, a callback for success and another for failure.

//   Both are optional, so you can add a callback for success or failure only.


// Basic Promise 1

// let myPromise1 = new Promise((myResolve,myReject)=>{
// let m=0;
//     if (m==0){
//         myResolve("ok");
//     }else{
//         myReject("error")
//     }

// })

// myPromise1.then(result=>{
//     console.log('result');
// })
// .catch(err=>{
//     console.log('error');
// })


// basic 2

// const basicPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     setTimeout(() => {
//       const success = true; // Set to false to simulate rejection
//       if (success) {
//         resolve('Promise Resolved!');
//       } else {
//         reject('Promise Rejected!');
//       }
//     }, 2000);
//   });
  
//   basicPromise
//     .then(result => {
//       console.log(result);
//     })
//     .catch(error => {
//       console.error('Error:', error);
//     });
  



// ----------------------------------------------------------


// PRACTICE

// let resultOutput = new Promise(function(myResolve, myreject){
//     let result = 4;
//     if (result<=3){
//         console.log('false');
//     }
//     else{
//         console.log('true');
//     }
//     setTimeout(()=>{
//         console.log(result);
//     },2000);
// });
    
// resultOutput.then(result =>{
//     console.log('resolved');
// })
// .catch(err =>{
//     console.log('rejected');
// })
// --------------------------------------------------------
  
// PROMISE ALL
// Promise.all is used to wait for all promises to be resolved, or for any to be rejected. It takes an array of promises and returns a new promise that is fulfilled with an array of the results when all the input promises are fulfilled.

// const promise1 = Promise.resolve('Promise 1 Resolved');
// const promise2 = Promise.resolve('Promise 2 Resolved');
// const promise3 = Promise.resolve('Promise 3 Resolved');

// Promise.all([promise1, promise2, promise3])
//   .then(results => {
//     console.log(results);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });

// ----------------------------------------------------------


// PROMISE.RACE

// Promise.race is used to race multiple promises against each other. It returns a promise that fulfills or rejects as soon as one of the input promises fulfills or rejects.

// const promise1 = new Promise(resolve => setTimeout(() => resolve('Promise 1 Resolved'), 2000));
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 Resolved'), 1500));
// const promise3 = new Promise(resolve => setTimeout(() => resolve('Promise 3 Resolved'), 1000));

// Promise.race([promise1, promise2, promise3])
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });




// note 
// catch method JavaScript Promise mein errors ko handle karne ke liye use hota hai. Yeh ek callback function ko specify karne ka tareeka hai jo tab invoke hota hai jab Promise reject hota hai. Isse aapko errors ko saaf aur organized taur par handle karne ka mauka milta hai.
