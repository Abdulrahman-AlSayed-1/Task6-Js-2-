"use strict"
let cartProducts=JSON.parse(localStorage.getItem("Cart Products"))

function show()
{
    if(!cartProducts || !cartProducts.length ){
        document.querySelector(".products").innerHTML= `
        <div class="container-fluid emptycart">
         <h2>Cart is empty ☹️</h2>
        </div> 
    `
    }
    else{

   let showed=cartProducts.map((product,index)=>{
        return  `
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
              <button class="btn btn-primary col-lg-6" onclick="remove_from_cart(${index})">remove from cart</button>
              <i class="fa-regular fa-heart"></i>
            </div>
          </div>
        </div>`
          
    }).join("")

    document.querySelector(".products").innerHTML=showed;
  }
}
show()

function remove_from_cart(index)
{
    cartProducts.splice(index,1)
    localStorage.setItem("Cart Products",JSON.stringify(cartProducts))
    show()
 
}

