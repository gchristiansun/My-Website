const menuButton = document.getElementById("menu");
const navbar = document.querySelector("nav");

menuButton.addEventListener("click", function() {
    navbar.classList.toggle("active");
})

const threeDot = document.getElementById("asideButton")
const aside = document.querySelector("aside .social-media ul");

threeDot.addEventListener("click", function() {
    aside.classList.toggle("active")
})