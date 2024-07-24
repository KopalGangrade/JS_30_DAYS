
const callback = (n) =>{
    return n*2;
}

function add(callback,n){
    return callback(n)+n;
}
console.log(add(callback,5));

// Returning function
// Higher order functions return function as a value​

// Higher order function returning an other function
const higherOrder = n => {
  const doSomething = m => {
    const doWhatEver = t => {
      return 2 * n + 3 * m + t
    }
    return doWhatEver
  }
  return doSomething
}
console.log(higherOrder(2)(3)(10))