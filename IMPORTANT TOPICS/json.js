// In JavaScript, JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate. JSON data is represented as key-value pairs, where keys are strings and values can be strings, numbers, objects, arrays, boolean values, or null. Here's a basic example of JSON in JavaScript:

var jsonData = '{"name": "John", "age": 30, "city": "New York"}';

console.log(jsonData);
// Parse JSON string to JavaScript object
var parsedData = JSON.parse(jsonData);

console.log(parsedData);

// Accessing values in the JavaScript object
console.log(parsedData.name); // Output: John
console.log(parsedData.age);  // Output: 30
console.log(parsedData.city); // Output: New York

// Convert JavaScript object back to JSON string
var jsonString = JSON.stringify(parsedData);
console.log(jsonString); // Output: {"name":"John","age":30,"city":"New York"}