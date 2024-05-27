//  This variable bring to information of localStorage
let shoppingCartProducts = localStorage.getItem("products-in-cart");
shoppingCartProducts = JSON.parse(shoppingCartProducts);

// This seccion help me to change the DOM 
const containerEmptyCart = document.querySelector("#cart-empty");
const containerCartProducts = document.querySelector("#cart-products");
const containerCartActions = document.querySelector("#cart-actions");
const containerCartPurchased = document.querySelector("#cart-purchase");
let buttonDelete = document.querySelectorAll(".cart-product-delete");
const buttonEmpty = document.querySelector(".cart-actions-empty");
const containerTotal = document.querySelector("#total");
const buttonBuy = document.querySelector(".cart-actions-purchase");

function loadProductsCart() {
    if(shoppingCartProducts && shoppingCartProducts.length > 0) {

        containerEmptyCart.classList.add("disabled");
        containerCartProducts.classList.remove("disabled");
        containerCartActions.classList.remove("disabled");
        containerCartPurchased.classList.add("disabled");
    
        containerCartProducts.innerHTML = "";
    
        shoppingCartProducts.forEach(product => {
            const div = document.createElement ("div");
            div.classList.add("cart-product")
            div.innerHTML = `
            <img class="cart-product-image" src="${product.imagen} " alt="${product.title} ">
            <div class="cart-product-title">
                <small>Title</small>
                <h3>${product.title}</h3>
            </div>    
            <div class="cart-product-quantity">
                <small>Quantity</small>
                <p>${product.quantity}</p>
            </div>
                <div class="cart-product-price">
                    <small>Price</small>
                    <p>$${product.price}</p>
                </div>
                <div class="cart-product-subtotal">
                    <small>Subtotal</small>
                    <p>$${(product.price * product.quantity)}</p>
                </div>
                <button class="cart-product-delete" id="${product.id}"><i class="bi bi-trash"></i></button> 
            `;
    
            containerCartProducts.append(div);
        })
    } else{
        containerEmptyCart.classList.remove("disabled");
        containerCartProducts.classList.add("disabled");
        containerCartActions.classList.add("disabled");
        containerCartPurchased.classList.add("disabled");
    }

    updateButtonsRemove();
    updateTotal();
}

loadProductsCart();


function updateButtonsRemove(){
    buttonDelete = document.querySelectorAll(".cart-product-delete");
    buttonDelete.forEach(button => {
        button.addEventListener("click", removeFromShoppingCart);
    });
}

function removeFromShoppingCart(e) {
    Toastify({
        text: "Product removed",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
        background: "linear-gradient(to right, #c59695, #393432)",
        color:"black",
        borderRadius: "2rem",
        },
        offset: {
            x: "2rem", 
            y: "2rem" 
        },
        onClick: function(){} 
    }).showToast();
    const idBoton = e.currentTarget.id;
    const index = shoppingCartProducts.findIndex(product => product.id === idBoton)
    shoppingCartProducts.splice(index, 1)
    loadProductsCart();

    localStorage.setItem("products-in-cart", JSON.stringify(shoppingCartProducts));
}

buttonEmpty.addEventListener("click", emptyShoppingCart);

function emptyShoppingCart() {
    // This function can shopping cart empty of my page.
    // This part of code have the sweetalert function that alert the user if want to delete data of your buy.
    Swal.fire({
        title: "¿Are you sure?",
        icon: "warning",
        html: `They are going to be deleted ${shoppingCartProducts.reduce((acc, product) => acc + product.quantity, 0)} products.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `Yes`,
        cancelButtonText: `No`,
    }).then((result) => {
        if (result.isConfirmed) {
        shoppingCartProducts.length = 0;
        localStorage.setItem("products-in-cart", JSON.stringify(shoppingCartProducts));
        loadProductsCart();
        }
    });
}

function updateTotal() {
    const totalCalculated = shoppingCartProducts.reduce((acc, product) => acc + (product.price * product.quantity), 0);
    total.innerText = `$${totalCalculated}`;
}

buttonBuy.addEventListener("click", buyShoppingCart);

function buyShoppingCart() {
    // This part of code I bring the sweetalert funtion that make alert the user when purschase anything in the electronic shop 
    Swal.fire({
        position: "top-center",
        icon: "success",
        title: "¡Your purchase has been made!",
        showConfirmButton: false,
        timer: 1500
    });
    shoppingCartProducts.length = 0;
    localStorage.setItem("products-in-cart", JSON.stringify(shoppingCartProducts));
    
    containerEmptyCart.classList.add("disabled");
    containerCartProducts.classList.add("disabled");
    containerCartActions.classList.add("disabled");
    containerCartPurchased.classList.remove("disabled");

}
