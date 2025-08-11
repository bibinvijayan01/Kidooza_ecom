// shared/js/form-utils.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const passwordToggle = document.getElementById("passwordToggle");
    const btn = document.querySelector(".login-btn");
    const btnText = btn.querySelector(".btn-text");
    const btnLoader = btn.querySelector(".btn-loader");
    const successMessage = document.getElementById("successMessage");

    // ---------------------------
    // PASSWORD VISIBILITY TOGGLE
    // ---------------------------
    passwordToggle.addEventListener("click", () => {
        if (password.type === "password") {
            password.type = "text";
            passwordToggle.classList.add("show");
        } else {
            password.type = "password";
            passwordToggle.classList.remove("show");
        }
    });

    // ---------------------------
    // FORM SUBMISSION HANDLER
    // ---------------------------
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;

        // Reset errors
        emailError.textContent = "";
        passwordError.textContent = "";

        // Email validation
        if (!email.value.trim()) {
            emailError.textContent = "Email is required.";
            valid = false;
        } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
            emailError.textContent = "Enter a valid email address.";
            valid = false;
        }

        // Password validation
        if (!password.value.trim()) {
            passwordError.textContent = "Password is required.";
            valid = false;
        } else if (password.value.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
            valid = false;
        }

        if (!valid) return;

        // ---------------------------
        // SHOW LOADER
        // ---------------------------
        btn.disabled = true;
        btnText.style.display = "none";
        btnLoader.style.display = "inline-block";

        // Simulate server request
        setTimeout(() => {
            btnLoader.style.display = "none";
            btnText.style.display = "inline-block";
            btn.disabled = false;

            // Hide form & show success
            form.style.display = "none";
            successMessage.style.display = "block";

            // Redirect after 2s
            setTimeout(() => {
                window.location.href = "/dashboard";
            }, 2000);
        }, 1500);
    });
});
