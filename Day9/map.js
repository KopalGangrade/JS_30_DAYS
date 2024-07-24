// map
// map: Iterate an array elements and modify the array elements. It takes a callback function with elements, index , array parameter and return a new array.

// let arr = [1,3,5,6,7,8];
// let add = arr.map((e)=>{
//     console.log(e*2);
// })

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

  let countryUpperCase = countries.map((country)=>{
     return country.toUpperCase();
  })
console.log(countries);
