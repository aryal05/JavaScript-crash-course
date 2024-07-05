//Document Object Model

let a = document.querySelector(".dom")
a.innerHTML = "Changed Dom" // To change the content
a.style.color = "yellow"
a.style.backgroundColor = "black"


//Event Listener
a.addEventListener("click",function(){
    a.innerHTML = "This section was changed due to click"
    a.style.color = "blue"
    a.style.backgroundColor = "khaki"
})



 let bulb = document.querySelector("#bulb")
 let btn = document.querySelector(".btn")
 let light = 0
 btn.addEventListener("click",function(){
     if(light == 0){
           btn.innerHTML = "On"
     bulb.style.backgroundColor = "yellow"
     light = 1
     }else{
          btn.innerHTML = "Off"
          bulb.style.backgroundColor = "white"
          light = 0
     }
    
 })
