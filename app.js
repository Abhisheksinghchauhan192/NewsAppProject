let loginlink = document.querySelector(".login-link");
let reglink = document.querySelector(".register-link");
let loginForm = document.querySelector(".form-box.login");
let registerForm = document.querySelector(".form-box.register");

// to swap with the sign up form 
reglink.addEventListener("click", () => {
    loginForm.style.display = "none"; // Hide login form
    registerForm.style.display = "flex"; // Show register form
});

// to swap with the sign in form 
loginlink.addEventListener("click", () => {
    loginForm.style.display = "flex"; // Show login form
    registerForm.style.display = "none"; // Hide register form
});

// Initialize the forms
loginForm.style.display = "flex"; // Show login form by default
registerForm.style.display = "none"; // Hide register form by default
