//forEach is only used with array
var a =[1,2,4,5,6,7,8]

a.forEach(function(val){
     console.log(val+2)
})


//forIn loop is used for objects

var obj = {
     name: "Rajat",
     age:20
}
for(var key in obj){
     console.log(key, obj[key]);
}


//do-while loop

var a = 15

do{
     console.log("Arya")
     a++;
}
while(a<17)