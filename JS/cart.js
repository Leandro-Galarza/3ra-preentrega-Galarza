let inCartProducts = localStorage.getItem("in-cart-products")
inCartProducts = JSON.parse(inCartProducts);


/*CONST*/

const emptyCartContainer = document.querySelector("#empty-cart");
const cartProductsContainer = document.querySelector("#cart-products");
const cartActionsContainer = document.querySelector("#cart-actions");
const boughtCartContainer = document.querySelector("#bought-cart");
let removeButns = document.querySelectorAll(".cart-product-remove");
const clearButn = document.querySelector("#cart-actions-clear");
const totalContainer = document.querySelector("total");
const buyButn = document.querySelector("#cart-actions-buy");


/*LOAD PRODUCTS FUNCTION*/

function loadCartProducts (){
    if (inCartProducts && inCartProducts.length > 0) {
        
        emptyCartContainer.classList.add("disabled");
        cartProductsContainer.classList.remove("disabled");
        cartActionsContainer.classList.remove("disabled");
        boughtCartContainer.classList.add("disabled");
    
        cartProductsContainer.innerHTML = "";
    
        inCartProducts.forEach(product => {
    
            const div = document.createElement("div");
            div.classList.add("cart-products")
            div.innerHTML = `
            <img class="image-cart-product" src="${product.image}" alt="${product.title} " />
            <div class="cart-product-name">
              <small>title</small>
              <h3>${product.title} </h3>
            </div>
            <div class="cart-product-quantity">
              <small>quantity</small>
              <p>${product.quantity}</p>
            </div>
            <div class="cart-product-price">
              <small>Price</small>
              <p>${product.price}</p>
            </div>
            <div class="cart-product-subtotal">
              <small>Subtotal</small>
              <p>$${product.price * product.quantity}</p>
            </div>
            <button class="cart-product-remove" id=${product.id} >Remove</button>`;
    
            cartProductsContainer.append(div);
    
        })
    }
    
     else {
    
        emptyCartContainer.classList.remove("disabled");
        cartProductsContainer.classList.add("disabled");
        cartActionsContainer.classList.add("disabled");
        boughtCartContainer.classList.add("disabled");
    }
    removeButnsRefresh();
    totalRefresh();

}

loadCartProducts();



function removeButnsRefresh (){
    removeButns = document.querySelectorAll(".cart-product-remove"); 

    removeButns.forEach(butn =>{
        butn.addEventListener("click", removeFromCart);
    })
}

/*REMOVE FROM CART FUNCTION*/

function removeFromCart (e){
    Toastify({
        text: "Removed From Cart",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, rgb(255, 0, 170), rgb(0, 38, 207)",
        },
        offset: {
            x: '1.5rem', 
            y: '1.5rem'
          },
        onClick: function(){} // Callback after click
      }).showToast();
    const butnId = e.currentTarget.id;
    const index = inCartProducts.findIndex(product => product.id === butnId);

    inCartProducts.splice(index,1);
    loadCartProducts();

    
    localStorage.setItem("in-cart-products",JSON.stringify(inCartProducts));

}

/*CLEAR CART BUTTON FUNCTION*/

clearButn.addEventListener("click", clearCart);

function clearCart  (){

    Swal.fire({
        title: 'ARE YOU SURE?',
        icon: 'question',
        html: 'ALL YOUR ITEMS WILL BE REMOVED FROM YOUR CART',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText:'YES!',
        cancelButtonText:'NOPE',
      }).then((result) => {
        if (result.isConfirmed) {    
            inCartProducts.length = 0;
            localStorage.setItem("in-cart-products",JSON.stringify(inCartProducts));
            loadCartProducts(); 
        } 
      })


}

/*PURCHASE'S TOTAL AMOUNT FUNCTION*/

function totalRefresh (){
    const totalcal =  inCartProducts.reduce((acc, product) => acc + (product.quantity * product.price), 0);
    total.innerText = `$${totalcal}`;   
}


buyButn.addEventListener("click", buyCart);

/*BUY BUTON FUNCION*/

function buyCart(){

    

    inCartProducts.length = 0;
    localStorage.setItem("in-cart-products", JSON.stringify(inCartProducts));


    emptyCartContainer.classList.add("disabled");
    cartProductsContainer.classList.add("disabled");
    cartActionsContainer.classList.add("disabled");
    boughtCartContainer.classList.remove("disabled");
}
