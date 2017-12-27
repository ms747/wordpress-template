 $.fn.extend({
     animateCss: function (animationName, callback) {
         var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
         this.addClass('animated ' + animationName).one(animationEnd, function () {
             $(this).removeClass('animated ' + animationName);
             if (callback) {
                 callback();
             }
         });
         return this;
     }
 });



function openMobileMenu() {
     // Setting menu state to be open
     hamburgermenuOpenState = true;
     $(".mobile-menu").addClass("show-mobile-menu");
     // Opening Animation
     mobileMenu.style.webkitAnimation = "show-hamburger-menu 0.2s linear";
 }

 function closeMobileMenu() {
     // Setting menu state to be closed
     hamburgermenuOpenState = false;
     // Closing Animation
     mobileMenu.style.webkitAnimation = "hide-hamburger-menu 0.2s linear";
     setTimeout(() => {
         $(".mobile-menu").removeClass("show-mobile-menu");
     }, 200);
 }