const menu = document.getElementById('menu');
let hamburgermenu = document.querySelector('hamburger-menu');
let hamburgermenuOpenState = false;
let body = document.querySelector("body");
let mobileMenu = document.querySelector(".mobile-menu");

// Switch Class while scrolling
window.onscroll = () => {
    if (window.pageYOffset > menu.offsetHeight) {
        menu.classList.remove('menu1');
        menu.classList.add('menu');
    } else {
        menu.classList.remove('menu');
        menu.classList.add('menu1');
    }
};

// Add menu items to mobile menu
$(".mobile-menu").append($(".menu-items").html());

// Show Hamburger menu
$(".hamburger-menu").click(function () {
    openMobileMenu();
});

// Hide Hamburger menu
$(".close").click(function () {
    closeMobileMenu();
});

// Close Hamburger menu when click outside of the body
$("main").click(function () {
    closeMobileMenu();
});