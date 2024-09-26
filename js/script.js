"use strict"

window.addEventListener("pageshow", (event)=> {
  if (event.persisted) {
   location.reload()
  }
  
});
let products=[

    {
        id:1,
        name:"iphone 11",
        size:"64 GB",
        color:"Black",
        price:"500$",
        address:"images/Iphone 11 64g.webp"
   
   
    },

    {
     id:2,
     name:"iphone x",
     size:"64 GB",
     color:"Silver",
     price:"350$",
     address:"images/iphone x 64g.webp"


    },
    {
        id:3,
        name:"iphone 12",
        size:"128 GB",
        color:"Black",
        price:"700$",
        address:"images/iphone 12 128g.webp"
    },

    {
        id:4,
        name:"iphone 14",
        size:"128 GB",
        color:"white",
        price:"800$",
        address:"images/iphone 14 128g.jpg"
    },

    {
        id:5,
        name:"iphone 15",
        size:"128 GB",
        color:"white",
        price:"950$",
        address:"images/Apple-iPhone-15 128g.jpg"
    }
]

function appendElements()
{
    let productsElements=products.map((product)=>{

    return `
      <div class="container mt-5">
        <div class="row col-10 col-md-9 mx-auto mx-md-0 rounded-4 overflow-hidden bg-light">
          <img class="col-md-4 col-lg-3 p-0" src="${product.address}" alt="${product.name}">
          <div class="info p-3">
            <h2>${product.name}</h2>
            <p class="text-secondary">${product.size}</p>
            <p class="text-secondary">Color : ${product.color}</p>
            <h3>${product.price}</h3>
          </div>
          <div class="actions p-1">
            <button class="add-to-cart btn btn-primary col-lg-6" onclick="add_to_cart(${product.id})">add to cart</button>
            <i class="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>`
        
    
    }).join("")
   document.querySelector(".products").innerHTML=productsElements
}

appendElements();



let cart_list=document.querySelector(".cart-list")
let badge=document.querySelector("#cart span")
let cartProducts= localStorage.getItem("Cart Products")? JSON.parse(localStorage.getItem("Cart Products")): [] ; //ternary function
 
badge.innerHTML=cartProducts.length

if(badge.innerHTML!=="0"){
    badge.classList.remove("d-none")
    document.querySelector("#empty").remove();
}

document.querySelector(".content").innerHTML+=(()=>{
    let items=cartProducts.map(item=>`<p>${item.name}</p>`)

     return items.join("")
   })()

function add_to_cart(id)
{
    let found_product=products.find(product => product.id === id);
    cartProducts.push(found_product)
    localStorage.setItem("Cart Products",JSON.stringify(cartProducts))
    
    document.querySelector(".content").innerHTML+=`<p>${found_product.name}</p>`
    
    badge.classList.remove("d-none");

    if(document.querySelector("#empty"))
      document.querySelector("#empty").remove();

    badge.innerHTML=cartProducts.length;
   
}
document.getElementById("cart").addEventListener("click",()=>{
   
    if(cart_list.classList.contains("cart-list-show"))
        cart_list.classList.remove("cart-list-show")
    
    else
     cart_list.classList.add("cart-list-show")
     
})

let hearts=document.querySelectorAll(".fa-heart")

hearts.forEach(heart=>{

    heart.onclick=()=>{

        if(heart.classList.contains("fa-solid")){
          heart.classList.replace("fa-solid","fa-regular")
          heart.style.color=""
        }
        else{
         heart.classList.replace("fa-regular","fa-solid")
         heart.style.color="red"
        }
         
    }
})
