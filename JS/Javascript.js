// PRODUCTS

const products = [

    /*GUITAR PEDALS*/

  {
    id: "pedal-01",
    title: "Boss Flanger",
    image: "./img/Guitar pedals/bf_3_top_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-02",
    title: "Boss Chorus",
    image: "./img/Guitar pedals/ch_1_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-03",
    title: "Boss Compressor Susteiner",
    image: "./img/Guitar pedals/cs_3_top_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-04",
    title: "Boss Digital Delay",
    image: "./img/Guitar pedals/dd-3t_tn.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-05",
    title: "Boss Distortion",
    image: "./img/Guitar pedals/ds1_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-06",
    title: "Boss Equalizer",
    image: "./img/Guitar pedals/ge_7_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-07",
    title: "Boss Line Selector",
    image: "./img/Guitar pedals/ls2_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-08",
    title: "Boss Mega Distortion",
    image: "./img/Guitar pedals/md_2_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-09",
    title: "Boss Metal Core",
    image: "./img/Guitar pedals/ml_2_top_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-10",
    title: "Boss Metal Zone",
    image: "./img/Guitar pedals/mt-2_top_tn.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-11",
    title: "Boss Noise Supressor",
    image: "./img/Guitar pedals/ns2_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-12",
    title: "Boss Octave",
    image: "./img/Guitar pedals/oc-5_tn.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-13",
    title: "Boss Phase Shifter",
    image: "./img/Guitar pedals/ph3_2_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-14",
    title: "Boss Reverb",
    image: "./img/Guitar pedals/rv_6_top_tn.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-15",
    title: "Boss Super OverDrive",
    image: "./img/Guitar pedals/sd1_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-16",
    title: "Boss Tremolo",
    image: "./img/Guitar pedals/tr2_tn_thumb.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-17",
    title: "Boss Chromatic Tuner",
    image: "./img/Guitar pedals/tu-3_top_tn.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-18",
    title: "Boss Chromatic Tuner Waza-Craft",
    image: "./img/Guitar pedals/tu-3w_top_tn.jpg",
    category: {
      name: "Guitar Pedals",
      id: "Guitar pedals",
    },
    price: 50000,
  },

  /*BASS PEDALS*/

  {
    id: "pedal-19",
    title: "Boss Bass Driver",
    image: "./img/Bass pedals/bb-1x_top_tn.jpg",
    category: {
      name: "Bass Pedals",
      id: "Bass pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-20",
    title: "Boss Bass Comp",
    image: "./img/Bass pedals/bc-1x_top_tn.jpg",
    category: {
      name: "Bass Pedals",
      id: "Bass pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-21",
    title: "Boss Bass Chorus",
    image: "./img/Bass pedals/ceb_3_top_tn_thumb.jpg",
    category: {
      name: "Bass Pedals",
      id: "Bass pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-22",
    title: "Boss Bass Equalizer",
    image: "./img/Bass pedals/geb_7_tn_thumb.jpg",
    category: {
      name: "Bass Pedals",
      id: "Bass pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-23",
    title: "Boss Bass Limiter Enhancer",
    image: "./img/Bass pedals/lmb3_tn_thumb.jpg",
    category: {
      name: "Bass Pedals",
      id: "Bass pedals",
    },
    price: 50000,
  },
  {
    id: "pedal-24",
    title: "Boss Bass OverDrive",
    image: "./img/Bass pedals/odb_3_tn_thumb.jpg",
    category: {
      name: "Bass Pedals",
      id: "Bass pedals",
    },
    price: 50000,
  },

  /*GUITAR AMPS*/

  {
    id: "Guitar amp-01",
    title: "Marshall 1960b",
    image: "./img/Guitar amps/Marshall 1960b .jpg",
    category: {
      name: "Guitar Amps",
      id: "Guitar Amps",
    },
    price: 320000,
  },
  {
    id: "Guitar amp-02",
    title: "Marshall DSL DSL20HR",
    image: "./img/Guitar amps/Marshall DSL DSL20HR.jpg",
    category: {
      name: "Guitar Amps",
      id: "Guitar Amps",
    },
    price: 360000,
  },
  {
    id: "Guitar amp-03",
    title: "Micro Dark Ppc 108",
    image: "./img/Guitar amps/Micro Dark Cabezal Y Caja Ppc 108.jpg",
    category: {
      name: "Guitar Amps",
      id: "Guitar Amps",
    },
    price: 310900,
  },
  {
    id: "Guitar amp-04",
    title: "PEAVEY 112",
    image: "./img/Guitar amps/PEAVEY 112.jpg",
    category: {
      name: "Guitar Amps",
      id: "Guitar Amps",
    },
    price: 96900,
  },
  {
    id: "Guitar amp-05",
    title: "peavey 6505",
    image: "./img/Guitar amps/peavey 6505.jpg",
    category: {
      name: "Guitar Amps",
      id: "Guitar Amps",
    },
    price: 550000,
  },

  /*BASS AMPS*/

  {
    id: "Bass amp-01",
    title: "ampeg micro cl stack",
    image: "./img/Bass amps/ampeg micro cl stack.jpg",
    category: {
      name: "Bass Amps",
      id: "Bass Amps",
    },
    price: 305000,
  },
  {
    id: "Bass amp-02",
    title: "Hartke Ha2500",
    image: "./img/Bass amps/ha2500.jpg",
    category: {
      name: "Bass Amps",
      id: "Bass Amps",
    },
    price: 310000,
  },
  {
    id: "Bass amp-03",
    title: "Vx410",
    image: "./img/Bass amps/Vx410.jpg",
    category: {
      name: "Bass Amps",
      id: "Bass Amps",
    },
    price: 330000,
  },
  {
    id: "Bass amp-04",
    title: "ha2500+Vx410",
    image: "./img/Bass amps/ha2500+Vx410.jpg",
    category: {
      name: "Bass Amps",
      id: "Bass Amps",
    },
    price: 625000,
  },
];



const productsContainer = document.querySelector("#products-container");
const categoryButns = document.querySelectorAll(".butn-category");
const mainTitle = document.querySelector("#main-title"); 
let addButns = document.querySelectorAll(".add-product"); 
const number = document.querySelector("#number")


function loadProducts(selectedProducts) {

    productsContainer.innerHTML = "";

    selectedProducts.forEach((product) => {

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

loadProducts(products);

categoryButns.forEach(butn=>{
    butn.addEventListener("click", (e) => {

        categoryButns.forEach(butn =>butn.classList.remove("active"));
        e.currentTarget.classList.add("active")

        if (e.currentTarget.id !="all") {
            const productsCategory = products.find(product => product.category.id === e.currentTarget.id);
            mainTitle.innerText = productsCategory.category.name;

            const butnProducts = products.filter(product => product.category.id === e.currentTarget.id);
            loadProducts(butnProducts);
        } else {
            mainTitle.innerText = "Todos los productos";
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
    let newNumber = inCartProducts.reduce((acc, product) => acc + product.quantity,0);
    number.innerText = newNumber
}
