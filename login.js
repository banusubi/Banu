
//loginstatus
function handleLogin(event){
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errormessage = document.getElementById('error-message');
    if (username === "" || password === "") {
        errormessage.textContent = "please fill out all fields.";
        return false;
    }
    if (username === "Luna" && password === "987654321") {
        sessionStorage.setItem("loginStatus", true);
        
        alert("login successful !"); 

        var previousPage = sessionStorage.getItem('previousPage');
        if (previousPage && previousPage !== window.location.href) {
            window.location.href = previousPage;
        } else {
            window.location.href = 'index.html';
        }

    } else {
        sessionStorage.setItem("loginStatus", false);
        alert("Wrong Entry")
        errormessage.textContent = "Invalid username or password.";
        return false;
        
    }
    
};


document.addEventListener("DOMContentLoaded", function() {
    const accountMenu = document.getElementById('account-menu');

    if (sessionStorage.getItem("loginStatus") === "true") {
        // User is logged in, show My Account
        accountMenu.innerHTML = '<a href="myaccount.html"><i class="fa fa-user-circle-o"></i> My Account</a>';
    } else {
        // User is not logged in, show login button
        accountMenu.innerHTML = '<button class="btn" id="loginButton"><a href="login.html"><i class="fa fa-user-circle-o"></i> Login</a></button>';
    }
});
