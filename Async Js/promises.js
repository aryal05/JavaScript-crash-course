let ans = new Promise((res,rej)=>{
     if(true){
          return res();
     }else{
          return rej();
     }
})
ans.then(function(){
     console.log("Resolved")
})
.catch(function(){
     console.log("Rejected")
})

let number = new Promise((res,rej)=>{
     let n = Math.floor(Math.random()*10);
     if(n<5){
          return res();
     }else{
          return rej();
     }
})
number.then(function(){
     console.log("The number is below 5:", number)
})
.catch(function(){
     console.log("Number is greatet than 5:", number)
})

let instruction = new Promise((res,rej)=>{
     return res("Go Home")
})
let inst2 =instruction.then(function(data){
     console.log(data)
     return new Promise((res,rej)=>{
          return res("Open The Gate")
     })

})
let inst3 =inst2.then(function(data){
     console.log(data)
     return new Promise((res,rej)=>{
          return res("Get Freshen Up")
     })
})
inst3.then(function(data){
     console.log(data)
})