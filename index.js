//landing page
document.addEventListener("DOMContentLoaded", function() {
    const BlouseItems = document.getElementById('blouse-items');
    const ChudiItems = document.getElementById('chudi-items');


    for(let i=0; i < products.BlouseProducts.length; i++) {
        const productElement = document.createElement('div');
        productElement.classList.add(`blouse${i+1}`);

        productElement.innerHTML = `
            <img src="${products.BlouseProducts[i].image}" alt="${products.BlouseProducts[i].name}">
            <h3>${products.BlouseProducts[i].name}</h3>
            <p>${products.BlouseProducts[i].price}</p>
            <a href="pdp.html?product=${products.BlouseProducts[i].id}" class="view-details"><button>View Details</button></a>
        `;

        BlouseItems.appendChild(productElement);
    }

    for(let i=0; i < products.ChudiProducts.length; i++) {
        const productElement = document.createElement('div');
        productElement.classList.add(`chudi${i+1}`);

        productElement.innerHTML = `
            <img src="${products.ChudiProducts[i].image}" alt="${products.ChudiProducts[i].name}">
            <h3>${products.ChudiProducts[i].name}</h3>
            <p>${products.ChudiProducts[i].price}</p>
            <a href="pdp.html?product=${products.ChudiProducts[i].id}" class="view-details"><button>View Details</button</a>
        `;
        ChudiItems.appendChild(productElement);
    }

    //show or hide login btn    
    const accountMenu = document.getElementById('account-menu');
    if (sessionStorage.getItem("loginStatus") === "true") {
        accountMenu.innerHTML = '<a href="myaccount.html"><i class="fa fa-user-circle-o"></i> My Account</a>';
    } else {
        accountMenu.innerHTML = '<button class="btn" id="loginButton"><a href="login.html"><i class="fa fa-user-circle-o"></i> Login</a></button>';
    }

});




//
// document.addEventListener("DOMContentLoaded", function() {
//     if (sessionStorage.getItem("loginStatus") === "true") {
//         window.location.href = "myaccount.html"; 
//     }
// });




