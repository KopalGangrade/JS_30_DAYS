// slice():

// The slice() method returns a shallow copy of a portion of an array into a new array object.
// It does not modify the original array; instead, it returns a new array containing the selected elements.
// slice() takes two optional parameters: start and end. It extracts up to, but not including, the end index.
// If start is negative, it indicates an offset from the end of the sequence, and if end is negative, it indicates the length of the sequence plus the offset.

const fruits = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Extracting a portion of the array
const slicedFruits = fruits.slice(1, 3); // Returns ['banana', 'cherry']
console.log(slicedFruits); // Output: ['banana', 'cherry']

// Original array remains unchanged
console.log(fruits); // Output: ['apple', 'banana', 'cherry', 'date', 'elderberry']


// -----------------splice():--------------------------

// The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
// It modifies the original array and returns an array containing the deleted elements, if any.
// splice() takes three parameters: start, deleteCount, and optional itemsToAdd.
// start specifies the index at which to start modifying the array. deleteCount specifies the number of elements to remove from the array. If deleteCount is 0, no elements are removed. itemsToAdd are optional elements to be added to the array.

const fruits1 = ['apple', 'banana', 'cherry', 'date', 'elderberry'];

// Removing elements from the array
const removedFruits = fruits.splice(1, 2); // Removes ['banana', 'cherry']
console.log(removedFruits); // Output: ['banana', 'cherry']
console.log(fruits); // Output: ['apple', 'date', 'elderberry']

// Adding elements to the array
fruits.splice(2, 0, 'blueberry', 'grape'); // Adds 'blueberry' and 'grape' at index 2
console.log(fruits); // Output: ['apple', 'date', 'blueberry', 'grape', 'elderb

