// find
// find: Return the first element which satisfies the condition

// const ages = [24, 22, 25, 32, 35, 18]
// const age = ages.find((age) => age < 20)

// console.log(age)


const lang = ["js",'react','c'];
const findLang = lang.find((e)=> {
    if (e === "js"){
        console.log(e);
    }
})