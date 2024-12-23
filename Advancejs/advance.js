//IIFE
var ans = (function(){
    var privateValue = 12;
    return {
        getter:function(){
            console.log(privateValue)
        },
        setter: function(val){
            privateValue = val

        }
    }

})()
//ans.setter to access the val

//Prototype
obj ={
    name: 'Darling'
}
// WhenEver an object is called it contains an extra property called prototype.


//Prototype Inheritance
var human = {
    canTalk: true,
    canFly:false,
    haveEmotions: true,
}

var me = {
    canMakeAwesomeWebiste: true,
    canWriteGoodCode: true,
    great:true
}
me.__proto__ = human;


// this 
// It is a Special KeyWord
// In global scope this refers to the global object and gives the value window (console.log(this))

// console.log(this)

// In function Scoped also it gives window
function test(){
    console.loog(this)
}

// this in methods  give the value of parent object
var objs = {
    age:12,
    name: function(){
        console.log(this)
    }

}
objs.name()

// In event listener fo the below case it refers to the button
var button = document.querySelector("button");
button.addEventListener('click', function(){
    this.style.color ="red"
    // console.log(this)
})

// call apply bind
// call apply bind are methods of function object
// they are used to change the context of a function

function darling (val1,val2){
    console.log(this,val1,val2)
}
 var babe = {
    name: "babe"
 }
 darling.call(babe,1,2) // call method is used to change the context of a function

// for apply
darling.apply(babe,[1,2]) // apply method is used to change the context of a

var bindFunction = darling.bind(babe)
bindFunction(1,2) // bind method is used to change the context of a function