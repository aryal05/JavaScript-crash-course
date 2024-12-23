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


