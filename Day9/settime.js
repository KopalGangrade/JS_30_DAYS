// In JavaScript we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.

// setInterval
// setTimeout

// setTimeout()
// setTimeout higher order function to execute some action at some time in the future. The setTimeout global method take a callback function and a duration as a parameter.
setTimeout(function () {
  console.log("add");
}, 8000);

// setInterval higher order function to do some activity continuously with in some interval of time. The setInterval global method take a callback function and a duration as a parameter. The duration is in milliseconds and the callback will be always called in that interval of time.

// setInterval(function () {
//   console.log("hello world");
// }, 2000);

// or

// let a=5;
// let b=10;
// function add(){
//     console.log(a+b);
// }

// setInterval(add,2000);


