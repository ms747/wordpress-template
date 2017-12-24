console.log("js loaded");

var menu = document.getElementById('menu');


window.onscroll = () =>{
    console.log(window.pageYOffset);
    if(window.pageYOffset > menu.offsetHeight){
        menu.classList.remove('menu1');
        menu.classList.add('menu');
    }
    else{
        menu.classList.remove('menu');
        menu.classList.add('menu1');
    }
};

