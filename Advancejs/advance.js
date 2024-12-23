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
