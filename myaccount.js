document.addEventListener("DOMContentLoaded", function() {
    // Retrieve cart from sessionStorage
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];

    const cartItemsContainer = document.getElementById('cart-items');
    const noDataMessage = document.getElementById('no-data-message');

    // Check if the cart has any items
    if (cart.length === 0) {
        // Show the "No data" message if the cart is empty
        noDataMessage.style.display = "block";
    } else {
        // Hide the "No data" message and display cart items
        noDataMessage.style.display = "none";

        // Loop through the cart and display each product
        cart.forEach(product => {
            cartItemsContainer.innerHTML += `
                <div class="cart-item">
                    <img src="${product.image}" alt="${product.name}" class="cart-item-image">
                    <div class="cart-item-details">
                        <h3>${product.name}</h3>
                        <p>Price: ${product.price}</p>
                        <p>${product.description}</p>
                    </div>
                </div>
            `;
        });
    }
});
