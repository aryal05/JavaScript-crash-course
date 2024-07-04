//If your are writing code inside:

//SetTimeout
//setInterval
//promises
//fetch
//axios
//XMLHttpRequest

//Then we can understand that it is async. 
//OtherWise Everything is Sync

console.log("Hello")
setTimeout(function(){
console.log("This line will come after 3 seconds")
},3000)
console.log("Hey")




//Asyn Await is used to to reduce the use of .then
async function abc(){
     let raw = await fetch(`https://randomuser.me/api/`);
     let answer = await raw.json();
     console.log(answer)
}
abc()

