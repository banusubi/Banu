document.getElementById('feedback-form').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get the values from the input fields
    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    
    // Show an alert with the name and email
     alert(`Name: ${fullName}\nEmail: ${email}`);

     //Optionally, clear the form fields after submission
    this.reset();
});

//show or hide login btn    
const accountMenu = document.getElementById('account-menu');
if (sessionStorage.getItem("loginStatus") === "true") {
    accountMenu.innerHTML = '<a href="myaccount.html"><i class="fa fa-user-circle-o"></i> My Account</a>';
} else {
    accountMenu.innerHTML = '<button class="btn" id="loginButton"><a href="login.html"> <i class="fa fa-user-circle-o"></i>  Login </a></button>';
}
