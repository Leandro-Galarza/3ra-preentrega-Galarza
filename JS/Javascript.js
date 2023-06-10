let products = [];

async function getProducts() {
const response = await fetch("./js/products.json");
const data = await response.json();
products = data;
loadProducts(products);
}

getProducts();

const productsContainer = document.querySelector("#products-container");
const categoryButns = document.querySelectorAll(".butn-category");
const mainTitle = document.querySelector("#main-title");
let addButns = document.querySelectorAll(".add-product");
const number = document.querySelector("#number");


categoryButns.forEach(butn => butn.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function loadProducts(selectedProducts) {

  productsContainer.innerHTML = "";

    selectedProducts.forEach(product => {

        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
        <img class="product-image" src="${product.image}" alt="${product.title}">
        <div class="product-details">
            <h3 class="producto-name">${product.title}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="add-product" id="${product.id}">Add</button>
        </div>
            `;

            productsContainer.append(div);
    })

    addButnsRefresh();
}

categoryButns.forEach(butn => {
  butn.addEventListener("click", (e) => {

      categoryButns.forEach(butn => butn.classList.remove("active"));
      e.currentTarget.classList.add("active");

      if (e.currentTarget.id != "all") {
          const productsCategory = products.find(product => product.category.id === e.currentTarget.id);
          mainTitle.innerText = productsCategory.category.name;

          const butnProducts = products.filter(product => product.category.id === e.currentTarget.id);
          loadProducts(butnProducts);
      } else {
          mainTitle.innerText = "all";
          loadProducts(products);
      }

  })
});




function addButnsRefresh (){
  addButns = document.querySelectorAll(".add-product"); 

  addButns.forEach(butn =>{
      butn.addEventListener("click", addToCart);
  })
}

let inCartProducts;

let inCartProductsLs = localStorage.getItem("in-cart-products");

if (inCartProductsLs){
    inCartProducts = JSON.parse(inCartProductsLs);
    numberRefresh();
} else {
    inCartProducts = [];
}

function addToCart (e) {
    Toastify({
        text: "Added To Cart",
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
  const addedProduct = products.find (product => product.id === butnId);

 if (inCartProducts.some(product => product.id === butnId)) {
  const index = inCartProducts.findIndex(product => product.id === butnId);
  inCartProducts[index].quantity++;
 } else {
      addedProduct.quantity = 1;
      inCartProducts.push(addedProduct);
 }

 numberRefresh();

 localStorage.setItem("in-cart-products", JSON.stringify(inCartProducts));
}

function numberRefresh(){
  let newNumber = inCartProducts.reduce((acc, product) => acc + product.quantity, 0);
  number.innerText = newNumber;
}
