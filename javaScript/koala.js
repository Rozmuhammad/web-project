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

imagesLoaded(document.querySelectorAll('img'), () => {

    document.body.classList.remove('loading');

    const el = document.getElementById('slider');
    const imgs = Array.from(el.querySelectorAll('img'));
    new displacementSlider({
        parent: el,
        images: imgs
    });

});