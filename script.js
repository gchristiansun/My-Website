const menuButton = document.getElementById("menu");
const navbar = document.querySelector("nav");

menuButton.addEventListener("click", function() {
    navbar.classList.toggle("active");
})

const threeDot = document.getElementById("threedotButton")
const aside = document.querySelector(".social-media ul");

threeDot.addEventListener("click", function() {
    aside.classList.toggle("active")
})