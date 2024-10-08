"use strict"
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
let cartProducts=localStorage.getItem("Cart Products")? JSON.parse(localStorage.getItem("Cart Products")): [] ; //ternary function
 
function update_cart()
{
  badge.innerHTML=cartProducts.length
  badge.classList.toggle("d-none", !cartProducts.length);
  document.querySelector(".content").innerHTML = cartProducts.length
   ? cartProducts.map(item => `<p>${item.name}</p>`).join("")
   : "<p>Shopping cart is empty</p>"

}
  update_cart()

function add_to_cart(id)
{
    let found_product=products.find(product => product.id === id);
    cartProducts.push(found_product)
    localStorage.setItem("Cart Products",JSON.stringify(cartProducts))
    update_cart()
   
}
document.getElementById("cart").addEventListener("click",()=>{
  const isAdded = cart_list.classList.contains("cart-list-show")
  cart_list.classList.toggle("cart-list-show", !isAdded )
     
})

let hearts=document.querySelectorAll(".fa-heart")

hearts.forEach(heart=>{

    heart.onclick=()=>{
       const isRegular=heart.classList.contains("fa-regular")
       heart.classList.toggle ("fa-solid",isRegular)
       heart.classList.toggle ("fa-regular", !isRegular)
       
       heart.style.color =  isRegular? "red" : ""

    }

})

window.addEventListener("pageshow" , event=>{
  if(event.persisted){
    cartProducts=JSON.parse(localStorage.getItem("Cart Products"))|| []
    update_cart()
  }
})