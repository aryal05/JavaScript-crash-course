//Diffreence between var/ let/const
 // var is a scoped function which means that var function can be used annywhere inside the function.
 //Var add itself to the window object
function VarScoped(){
     for(var i =1; i<12; i++){
          console.log(i)
     }
     console.log(i)
}
VarScoped()


 // let is braces scoped function (Same for the Const also)
 //let dose not add itself to the window object
 function letScoped(){
     for(let i =2; i<20; i++){
          console.log(i)//Only this line will be executed
     }
     console.log(i) // This line of code will not be executed it will through error
 }



 //Browser Context API
 //Window is inside the Broweser context API

 //Heap Memory : Middle Data where the Data is Stored before executing the final answer



 //HOW TO COPY REFERENCE VALUE
 var a =[1,5,8,9,7,6]
 var b =[...a] // (...) which is written is called spread operator. 
 b.pop()
 console.log(a)
 console.log(b)