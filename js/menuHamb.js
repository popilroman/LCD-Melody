// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {

        const  menuHamb = this.document.querySelector(".menu__hamb");
        const menuSpan = this.document.querySelector(".hamb");

        menuHamb.addEventListener("click", transformBtn);

        function transformBtn() {
            menuSpan.classList.toggle("click");    
        };
        
     });
});