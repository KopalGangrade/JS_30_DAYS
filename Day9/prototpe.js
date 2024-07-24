// Prototypes 
//  Prototypes are the mechanism by which js objects inherit features from one another. 

// DEFINATION 
//EXAMPEL
//REAL TIME USE
//INTERVIEW QUESTION MARK


// prototypes

let user={
    getFullName: function(){
        return this.name + this.lastname
    },
    getAge:function(){
        let age = new Date().getFullYear()-this.birth;
        return age;
    }
}

let student = {
    name:"kopal",
    lastname:"gangrade",
    birth:2000,
    getAge: user.getAge
}



let employee = {
    name:"riya",
    lastname:"sharma",
    birth:1980,
    getAge: user.getAge
}
// employee.__proto__ = user;
// student.__proto__ = user;


// console.log(employee.getFullName());
// console.log(student.getFullName());
console.log(employee.getAge());
console.log(student.getAge());

// note -> if we directly access prototype then all properties will load instantly but if we will access properties using proto then what we want to access that can only access.