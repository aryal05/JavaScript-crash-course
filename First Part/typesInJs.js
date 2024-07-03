// premitive and reference

// primitive = number, string, boolean,null,undefined
// refrence = [], (), {} 


 //Argument is the real value that we give while running the function 
 // And Parameter are the variable in which values are stored
 //For Example

 function abcd(a){ // The a inside the (a) is the parameter
     console.log(a)

 }
 abcd(12) // This is argument


 //Push POP SHIFT UNSHIFT
 var arr =[1,2,5,4,8]
 arr.push(45) // to add a element we use push which is added at the end
 console.log(arr)

 //POP: to remove the last element

 // UnShift: to add a element at the first
 
 //Shift:  to remove the first element

 //Splice: to remove a certain value by writing its staring index and up to which you wanna delete the last index
 //For example
 var newArr = [45,78,98,65]
 newArr.splice(2,1) // In this 98 is removed and other are kept same 