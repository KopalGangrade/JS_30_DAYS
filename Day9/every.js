// every
// every: Check if all the elements are similar in one aspect. It returns boolean

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook',1]
const areAllStr = names.every((name) => typeof name === 'string') // Are all strings?

console.log(areAllStr)