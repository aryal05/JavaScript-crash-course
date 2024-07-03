//Hoisting - Variable and functions are hoisted which means there declaration is moved on the top of code.

// console.log(a)
// var a = 12; converts this line into the down line form
// var a; // Declaration
// a =12 // Initialization


var a;

console.log(a)
a =12

// The code write in the down is not the part of hoisting its an object .
var student = {
     name: "Rajat",
     age:20,
     address:"Kathmandu"
}

student.name = "Arya"
console.log(student)