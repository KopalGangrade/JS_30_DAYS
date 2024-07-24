// findIndex
// findIndex: Return the position of the first element which satisfies the condition

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

// const result = names.findIndex((name) => name.length > 7)
// console.log(result) // 0

const age = ages.findIndex((age) => age < 25)
console.log(age) // 5