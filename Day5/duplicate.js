// Table of Content

// Using Javascript filter() Method


let arr = ["apple", "mango", "apple",
          "orange", "mango", "mango"];
 
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
console.log(removeDuplicates(arr));


// Using Javascript set() Method


let arr1 = ["apple", "mango", "apple",
		"orange", "mango", "mango"];

function removeDuplicates(arr1) {
	return [...new Set(arr1)];
}

console.log(removeDuplicates(arr1));


// Using Javascript forEach() Method


let arr2 = ["apple", "mango",
		"apple", "orange", "mango", "mango"];

function removeDuplicates(arr2) {
	let unique = [];
	arr2.forEach(element => {
		if (!unique.includes(element)) {
			unique.push(element);
		}
	});
	return unique;
}
console.log(removeDuplicates(arr2));


// Using Javascript reduce() Method


let arr3 = ["apple", "mango",
		"apple", "orange", "mango", "mango"];

function removeDuplicates(arr3) {
	let unique = arr3.reduce(function (acc, curr) {
		if (!acc.includes(curr))
			acc.push(curr);
		return acc;
	}, []);
	return unique;
}
console.log(removeDuplicates(arr3));


// Using Javascript indexOf() Method

let arr4 = ["apple", "mango",
		"apple", "orange", "mango", "mango"];

function removeDuplicates(arr4) {
	let unique = [];
	for (i = 0; i < arr4.length; i++) {
		if (unique.indexOf(arr4[i]) === -1) {
			unique.push(arr4[i]);
		}
	}
	return unique;
}
console.log(removeDuplicates(arr4));



// Using third-party Library

// <!DOCTYPE html>
// <html>

// <head>
// 	<script src=
// "https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.1/underscore-min.js">
// 	</script>
// </head>

// <body>
// 	<script type="text/javascript">
// 		console.log(_.uniq([1, 2, 3, 4, 5, 4, 3, 2, 1]));
// 	</script>
// </body>

// </html>
