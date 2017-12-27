console.log("js loaded");

const menu = document.getElementById('menu');
let hamburgermenu = document.querySelector('hamburger-menu');
let hamburgermenuOpenState = false;
let body = document.querySelector("body");
let mobileMenu = document.querySelector(".mobile-menu");

window.onscroll = () =>{
    if(window.pageYOffset > menu.offsetHeight){
        menu.classList.remove('menu1');
        menu.classList.add('menu');
    }
    else{
        menu.classList.remove('menu');
        menu.classList.add('menu1');
    }
};

$.fn.extend({
    animateCss: function (animationName, callback) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            if (callback) {
                callback();
            }
        });
        return this;
    }
});

$(".mobile-menu").append($(".menu-items").html());

// Show Hamburger menu
$(".hamburger-menu").click(function(){
    $(".mobile-menu").addClass("show-mobile-menu");
    // Opening Animation
    mobileMenu.style.webkitAnimation = "show-hamburger-menu 0.2s linear";
});

// Hide Hamburger menu
$(".close").click(function(){
    // Closing Animation
    mobileMenu.style.webkitAnimation = "hide-hamburger-menu 0.2s linear";
    setTimeout(()=>{
        $(".mobile-menu").removeClass("show-mobile-menu");
    },200);
});
