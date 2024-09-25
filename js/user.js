"use strict"
if(localStorage.getItem("username") && localStorage.getItem("Guest") === "false" )
{
       document.getElementById("username").textContent=localStorage.getItem("username");
       document.querySelector(".user-info").classList.remove("d-none");
       document.querySelector(".links").remove();
       document.querySelector(".navbar-brand").parentElement.classList.add("mb-2")
}
else
{
    document.querySelectorAll(".add-to-cart").forEach((button)=>{
        button.onclick=()=>{
            alert("You must log in to add products to the cart.")
        }
    })
    document.querySelectorAll(".fa-heart").forEach((heart)=>{
        heart.onclick=()=>{
            alert("You must log in to like ❤️ products")
        }
    })
}
document.getElementById("log_out").onclick=()=>{
    localStorage.clear()
    setTimeout(()=>{
     location="login.html"
    }, 1000)
}
