const products = {
    BlouseProducts : [
        {
            id: 1,
            name: "Aari Work",
            image: "image/b1.jfif",
            price: "$600",
            description: "Aari work blouse designs are a literal thing for almost every Tamilian Bride. Their exorbitant bridal accessories play really well with such a beautiful outfit."
        },
        {
            id: 2,
            name: "Blouse Model",
            image: "image/b4.jfif",
            price: "$550",
            description: "Saree blouse designs are a canvas for creativity and self-expression, where fabrics, patterns, and embellishments blend seamlessly to create a stunning and personalized fashion statement."       
        },
        {
            id: 3,
            name: "Back Neck Model",
            image: "image/b5.jfif",
            price: "$400",
            description: "The back is the most visible part of the blouse and is ideal for playing around with designs. Here are some of the latest features that can be expected from the new pattern blouse back neck designs."
        },
        {
            id: 4,
            name: "Deep Front V Neck ",
            image: "image/b6b.jfif",
            price: "$580",
            description: "At first glance, this charming blouse pattern shows a traditional feeling, while its deep V-cut neckline gives a romantic appeal."
        },
        {
            id: 5,
            name: "Boat Neck Design",
            image: "image/b7.jfif",
            price: "$450",
            description: "Boat neck blouse designs are gaining popularity as they come with modern and elegant touch. A saree blouse is an essential part of the traditional Indian wear for women."
        }
    ],
    ChudiProducts : [
        {
            id: 6,
            name: "Collar Neck Chudidhar",
            image: "image/c1c.jfif",
            price: "$730",
            description: "Adding a collar to your churidar can never go wrong. It looks best on v-shaped neck designs. Buttons can accentuate the look. "
        },
        {
            id: 7,
            name: "Georgette long Churidhar",
            image: "image/c2.jfif",
            price: "$700",
            description: "This lovely long churidar style has full sleeves in georgette fabric. It is a straight-fit kurta with beautiful thread work in pink colour. It is a lovely long Kurti churidar dress with rich embroidery"
        },
        {
            id: 8,
            name: "Oval  Neck Chudidhar",
            image: "image/c3c.jfif",
            price: "$800",
            description: "Half collar necklines with a V front pattern work well for a variety of different churidaar suit patterns. You can try this with daily wear suits, office wear salwars or even party wear outfits too."
        },
        {
            id: 9,
            name: "side Panel chudidhar",
            image: "image/c4.jfif",
            price: "$800",
            description: "This churidar may be the best bet if you fancy wearing something traditional and colourful! Made with fine chanderi silk, the ensemble speaks of class and elegance."
        },
        {
            id: 10,
            name: "purple Embellished chudidhar",
            image: "image/c5.jfif",
            price: "$1000",
            description: "Indian women wear many different types of outfits. They have separate attire for work, a different outfit for home, something different for party scenes and so on. The saree is perhaps the most talked about outfit in India."
        }
        
    ]
};


// const BlouseProducts = [
//     {
//         id: 1,
//         name: "Aari Work",
//         image: "image/b1.jfif",
//         price: "$29.99",
//         description: "This is a description for Product 1."
//     },
//     {
//         id: 2,
//         name: "Blouse Model",
//         image: "image/b4.jfif",
//         price: "$49.99",
//         description: "This is a description for Product 2."
//     },
//     {
//         id: 3,
//         name: "Back Neck Model",
//         image: "image/b5.jfif",
//         price: "$39.99",
//         description: "This is a description for Product 3."
//     }
// ];

// const ChudiProducts = [
//     {
//         id: 4,
//         name: "Full Set Chudi",
//         image: "image/c1.jfif",
//         price: "$29.99",
//         description: "This is a description for Product 1."
//     },
//     {
//         id: 5,
//         name: "Normal Chudi",
//         image: "image/c2.jfif",
//         price: "$49.99",
//         description: "This is a description for Product 2."
//     },
//     {
//         id: 6,
//         name: "Closed Top",
//         image: "image/c3.jfif",
//         price: "$39.99",
//         description: "This is a description for Product 3."
//     }
// ];

// Search Function
function searchProducts(query) {
    // Convert query to lowercase for case-insensitive matching
    const lowerCaseQuery = query.toLowerCase();

     // Filter Blouse Products
     const filteredBlouseProducts = products.BlouseProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery)
       
    );

    // Filter Chudi Products
    const filteredChudiProducts = products.ChudiProducts.filter(product =>
        product.name.toLowerCase().includes(lowerCaseQuery) 
    );

    // Show the search results
    displaySearchResults(filteredBlouseProducts, 'blouse-items');
    displaySearchResults(filteredChudiProducts, 'chudi-items');
}
// Function to display search results (you can modify it as per your design)
function displaySearchResults(filteredProducts, type) {
    const resultsContainer = document.getElementById(type);
    resultsContainer.innerHTML = "";  // Clear previous results

    if (filteredProducts.length === 0) {
        resultsContainer.innerHTML = "<p>No products found.</p>";
    } else {
        filteredProducts.forEach(product => {
            resultsContainer.innerHTML += `
            <div class="blouse1">
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <a href="pdp.html?product=${product.id}" class="view-details"><button>View Details</button></a>
                    </div>
            `;
        });
    }
}
// Reset and display all products when input is cleared
function resetSearch() {
    displaySearchResults(products.BlouseProducts, 'blouse-items');
    displaySearchResults(products.ChudiProducts, 'chudi-items');
}

// Example usage:
// Assume you have a search input field and a button to trigger the search
document.getElementById('searchbtn').addEventListener('click', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    searchProducts(query);
});
// Event listener for clearing the input
document.getElementById('search-input').addEventListener('input', function() {
    const query = document.getElementById('search-input').value;

    // If the input is cleared (empty), reset the products view
    if (query.trim() === '') {
        resetSearch();
    }
});