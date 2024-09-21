
// pdp.js
document.addEventListener("DOMContentLoaded", function() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const productId = urlParams.get('product');

    const product = products.ChudiProducts.find(p => p.id == productId) || products.BlouseProducts.find(p => p.id == productId);
    
    if (product) {
        const productDetails = document.getElementById('product-details');
        
        productDetails.innerHTML = `
            <div class="aariwork"><img src="${product.image}" alt="${product.name}"></div>
            <div class="product"> <h2>${product.name}</h2>
            <p>${product.price}</p>
            <p>${product.description}</p>
            <button onclick="addToCart('${product.name}')" id="add-to-cart">Add to Cart</button> </div>
        `;
    } else {
        document.getElementById('product-details').innerHTML = "<p>Product not found!</p>";
    }

    // Add event listener for Add to Cart button
    document.getElementById('add-to-cart').addEventListener('click', function() {
        handleAddToCart(product);
    });

    
    //show or hide login btn    
    const accountMenu = document.getElementById('account-menu');
    if (sessionStorage.getItem("loginStatus") === "true") {
        accountMenu.innerHTML = '<a href="myaccount.html"><i class="fa fa-user-circle-o"></i> My Account</a>';
    } else {
        accountMenu.innerHTML = '<button class="btn" id="loginButton"><a href="login.html"><i class="fa fa-user-circle-o"></i> Login</a></button>';
    }
});


function handleAddToCart(product) {
    if (!isUserLoggedIn()) {
        redirectToLogin();
    } else {
        addProductToCart(product);
    }
}

function isUserLoggedIn() {
    return sessionStorage.getItem("loginStatus") === "true";
}

function redirectToLogin() {
    window.location.href = "login.html";
}

function addProductToCart(product) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    cart.push(product);
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} has been added to your cart!`);
}
