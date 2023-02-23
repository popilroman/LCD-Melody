// Функция, которая проверяет загрузку HTML-документа и DOM-дерева
document.addEventListener("DOMContentLoaded", function() {
    // Функция, которая проверяет загрузку всего контента страницы
    window.addEventListener("load", function() {

        const menuHamb = this.document.querySelector(".menu__hamb");
        const menuSpan = this.document.getElementById("hamb");
        const menuPanel = this.document.querySelector(".menu__panel");

        menuHamb.addEventListener("click", function() {
            transformBtn();
            isClick();
            outClick();
        });

        function transformBtn() {
            menuSpan.classList.toggle("click");    
        };

        function isClick() {
            menuPanel.classList.toggle("is-click");
        }

        function outClick() {
            document.onclick = function(e) {
                if (e.target.className != "menu__panel" && 
                    e.target.id != "hamb" &&
                    e.target.className != "menu__hamb") {
                    menuPanel.classList.remove("is-click");
                    menuSpan.classList.remove("click");
                }
            }
        }
 
     });
});