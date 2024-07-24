let number = [1,2,3,4,5];
console.log(number);

// modify the number using indexing
number[4]=12;
console.log(number);

// push the number at the end
number.push(32)
console.log(number);

// push the number at beginning of the array

number.unshift(13);
console.log(number);


// remove the number from the end of the array
let popout=number.pop();
console.log(popout);


//remove the number from the beginning of the array

let popout1=number.shift();
console.log(popout1);
//remove the number from the indexing of the array
console.log(number);

number.splice(2,1) //(index.number , remove element number)
console.log(number);



