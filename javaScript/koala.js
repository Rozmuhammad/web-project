function togglePasswordVisibility() {
    var passwordField = document.getElementById("userPassword");
    var button = document.querySelector("button");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        button.textContent = "Hide Password";
    } else {
        passwordField.type = "password";
        button.textContent = "Show Password";
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const bodyHtml = document.querySelector('.transition');
    const bodyHtml1 = document.querySelector('.transition-1');


    function transition() {
        bodyHtml.style.transition = '1.5s';
        bodyHtml.style.opacity = '1';
        bodyHtml1.style.transition = '1.5s';
        bodyHtml1.style.opacity = '1';
    }

    window.onload = transition;
});

