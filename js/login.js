"use strict"
let password=document.querySelector("input[type=password]")
let username=document.querySelector("input[type=text]")
let inputs=document.querySelectorAll(".login input")
let sign_inBtn=document.querySelector("input[type=submit]")
localStorage.setItem("Guest","false")

sign_inBtn.addEventListener("click",(event)=>{
    event.preventDefault()
    if(Array.from(inputs).some(input=>input.value===""))
    {
        alert("Please Fill all Data");
    }
    else
    {
     if(username.value.trim() === localStorage.getItem("username") && password.value.trim() === localStorage.getItem("password"))
       setTimeout(()=>{
          location="index.html"
      },  1000)
     else
       alert("username or password is incorrect. try again") 
    }
 })

 document.getElementById("guest").onclick=()=>{
  localStorage.setItem("Guest","true")
}
