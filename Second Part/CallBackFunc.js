//CallBack Function
// Function which is executed after certain time when it is completed.


 setTimeout(function(){
     console.log("This code is executed after 2 seconds")

 },2000)


 //What are first class function: if functions are treated like other variables.
 //Function can be used as value in javascript

 function abcd(a){
     a();
 }
 abcd(function(){console.log("Hello")})// In this function is used as variable.