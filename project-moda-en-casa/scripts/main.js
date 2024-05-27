let products = [];

// I do this FETCH to fetch all my products from my "products.json" file.

fetch("./scripts/products.json")
    .then(response => response.json())
    .then(data => {
        products = data;
        addProducts(products);
    })

// With this variable I could manipulate DOM

const containerProducts = document.querySelector("#container-products");
const buttonsCategories = document.querySelectorAll(".button-category");
const mainTitle = document.querySelector("#main-title");
let buttonsAdd = document.querySelector(".add");
const littleNumber = document.querySelector(".littleNumber");

// This function could add products using the products.json file to bring the objects. I created the HTML code and so view in the browser the result
const addProducts = (productsChosen) => {
    
    containerProducts.innerHTML = "";
    productsChosen.forEach(product=> {

        const div = document.createElement("div");
        div.classList.add("products");
        div.innerHTML = `
        <img class="product-image" src="${product.imagen}" alt="${product.title}" loading="lazy">
        <div class="product-details">
            <h3 class="product-title">${product.title}</h3>
            <p class="product-price">$${product.price}</p>
            <button class="add" id="${product.id}">Add</button>
        </div>
        `;

        containerProducts.append(div);
    })

    updateButtonsAdd();
    console.log(buttonsAdd)
};


buttonsCategories.forEach(button => {
    button.addEventListener("click", (e) =>{
        buttonsCategories.forEach(button => button.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "all"){
            const productCategory = products.find( product => product.category.id === e.currentTarget.id);

            mainTitle.innerText = productCategory.category.id;

            const buttonProducts = products.filter(product => product.category.id === e.currentTarget.id);
            addProducts(buttonProducts);
        } else{
            mainTitle.innerText = "All products";
            addProducts(products);
        }
    })
});

// This function could add the products using to addEventListener and addToShoppingCart function

function updateButtonsAdd(){
    buttonsAdd = document.querySelectorAll(".add");
    buttonsAdd.forEach(button => {
        button.addEventListener("click", addShoppingCart);
    });
};

let shoppingCartProducts;

let  shoppingCartProductsLS = localStorage.getItem("products-in-cart");

if (shoppingCartProductsLS) {
    shoppingCartProducts = JSON.parse(shoppingCartProductsLS);
    upgradeLittleNumber();
} else{
    shoppingCartProducts = [];
}

// This funticion use the toastifay a JavaScript library. This library could create an alert every time you add products in the shopping cart. This funticion could see how many products you a purchased

function addShoppingCart (e) {

    Toastify({
        text: "¡Product added!",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #183446,  #38AECC)",
        color:"black",
        borderRadius: "2rem",
        },
        offset: {
            x: "2rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: "2rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productAdd = products.find (product => product.id === idBoton);

    if(shoppingCartProducts.some(product => product.id === idBoton)){
        const index = shoppingCartProducts.findIndex(product => product.id === idBoton);
        shoppingCartProducts[index].quantity++;
    } else{
        productAdd.quantity = 1;
        shoppingCartProducts.push(productAdd);
    }

    upgradeLittleNumber();

    localStorage.setItem("products-in-cart", JSON.stringify(shoppingCartProducts));
}

// This funtion help me to update the number counter of products 

function upgradeLittleNumber () {
    let newNumber = shoppingCartProducts.reduce((acc, product) => acc + product.quantity, 0);
    littleNumber.innerText = newNumber;
}