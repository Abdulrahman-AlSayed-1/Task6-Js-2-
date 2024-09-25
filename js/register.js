"use strict"
let inputs=document.querySelectorAll(".register input")
let sign_upBtn=document.querySelector("input[type=submit]")
let password=document.querySelector("input[type=password]")
let email=document.querySelector("input[type=email]")
let username=document.querySelector("input[type=text]")
localStorage.setItem("Guest","false")

sign_upBtn.addEventListener("click",(event)=>{
   event.preventDefault()
   if(Array.from(inputs).some(input=>input.value===""))
   {
       alert("Please Fill all Data");
   }
   else
   {
    localStorage.setItem("username",username.value)
    localStorage.setItem("email",email.value)
    localStorage.setItem("password",password.value)
    
    setTimeout(()=>{
        location="login.html"
    }, 1000)
   }
})
document.getElementById("guest").onclick=()=>{
    localStorage.setItem("Guest","true")
}