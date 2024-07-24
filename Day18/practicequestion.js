// setTimeout(function() {
//     console.log('I am an asynchronous message');
// }); // You can omit the 0

// console.log('Test 1');

// for (let i = 0; i < 5; ++i) {
//     doSomeStuff(5);
// }

// console.log('Test 2');

// // The 'I am an asynchronous message' will be displayed when the main thread reach here

// function doSomeStuff(a) {
//     return 1 + 1;
// }

// Test 1
// Test 2
// I am an asynchronous message


// 2. 
// let counter = 0;

// let timer = setInterval(function() {
//     console.log('I am an asynchronous message');

//     counter += 1;

//     if (counter >= 5) {
//         clearInterval(timer);
//     }
// }, 1000);

// console.log('I am a synchronous message');


// 3.

// function job(callback1, callback2) {
//     setTimeout(function(){
//         console.log( 'callback1');
//     },2000);
   
//     let count = 0
//     setTimeInterval(function(){
//         console.log('callback')
//         count+=1;
//         if (count>3){
//             clearInterval(timer);
//         }


//     },1000)// }

// module.exports = job;

// 4.

function job1(callback) {
    setTimeout(function() {
        callback('test 1');
    }, 2000);
}

function job2(callback) {
    setTimeout(function() {
        callback('test 2');
    }, 4000);
}

job1(function(data) {
    console.log(data);

    job2(function(data) {
        console.log(data);
    });
});