console.log("js loaded");

const menu = document.getElementById('menu');
const hamburgermenu = document.getElementsByClassName('hamburger-menu');

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

$(".hamburger-menu").click(function(){
    // console.log("test");
    $(".hamburger-menu").animateCss('pulse');
});

