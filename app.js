console.log("js loaded");

const menu = document.getElementById('menu');
const hamburgermenu = document.getElementsByClassName('hamburger-menu');
let hamburgermenuOpenState = false;
let body = document.querySelector("body");

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
});

// Hide Hamburger menu
$(".close").click(function(){
    $(".mobile-menu").removeClass("show-mobile-menu");
});
