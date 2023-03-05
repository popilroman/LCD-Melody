document.body.onload = function(){
    setTimeout(function() {
       const preloader = document.querySelector(".preloader");
       if (preloader.classList.contains("done") === false) 
       {
        preloader.classList.add("done");
        }

        new WOW().init(); //Инициализация бибилиотеки WOW.js
    }, 1000);

};