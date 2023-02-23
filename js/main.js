$(document).ready(function() { 

    var currentFloor = 2;
    var counterUp = $(".counter__up"); 
    var counterDown = $(".counter__down"); 
    var floorPath = $(".home path"); 
    var modal = $(".modal"); 
    var modalCloseButton = $(".modal__closeBtn"); 
    var viewFlats = $(".view-flats"); 
    var roomPath = $(".modal__image path"); 
    var roomLink = $(".flat__link"); 
    var roomNum = 0; 

    floorPath.on("mouseover", function () { // Когда мышка наведется на содержимое переменной floorPath, развернется функция... 
        floorPath.removeClass('current__floor'); //Очищаем у каждого path класс current__floor
        currentFloor = $(this).attr("data-floor"); //Записываем цифру этажа при наведении на path. Каждый path имеет свой data-floor с цифрой этажа
        $(".counter__num").text(currentFloor); //Затем меняем текст в span counter-num на цифру наведенного этажа
    });

    counterUp.on("click", function () { //Когда мышка кликнет на содержимое переменной counterUp, развернется функция... 
        if (currentFloor < 18) { //Проверка на количество этажей сверху
            currentFloor++; //Инкрементирование переменной при клике на содержимое переменной counterUp
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); //Чудеса... Делаем из 1 -> 01
            $(".counter__num").text(usCurrentFloor); //Записываем увеличенную и отформатированную переменную в блок с классом counter__num
            floorPath.removeClass('current__floor'); //Очищаем у каждого элемента path класс current__floor
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current__floor'); //Добавляем этажу с соответствующей цифрой класс, который подсветит элемент path
        }
    });

    counterDown.on("click", function () { //Когда мышка кликнет на содержимое переменной counterDown, развернется функция... 
        if (currentFloor > 2) { //Проверка на количество этажей снизу
            currentFloor--; //Дикрементирование переменной при клике на содержимое переменной counterDown
            usCurrentFloor = currentFloor.toLocaleString("en-US", {minimumIntegerDigits: 2, useGrouping: false}); //Чудеса... Делаем из 1 -> 01
            $(".counter__num").text(usCurrentFloor); //Записываем уменьшенную и отформатированную переменную в блок с классом counter__num
            floorPath.removeClass('current__floor'); //Очищаем у каждого элемента path класс current__floor
            $(`[data-floor=${usCurrentFloor}]`).toggleClass('current__floor'); //Добавляем этажу с соответствующей цифрой класс, который подсветит элемент path
        }
    });

    function toggleModal() {
        modal.toggleClass('is-open'); //Добавляем к содержимому переменной modal класс .is-open
    }

    floorPath.on("click", toggleModal); 
    modalCloseButton.on("click", toggleModal); 
    viewFlats.on("click", toggleModal); 

    roomPath.on("mouseover", function() { //При наведении на содержимое переменной roomPath разворачивается функция...
        roomNum = $(this).attr("data-room"); //Получаем значение дата-атрибута (номер) каждой комнаты, на которую мы навели курсор
        roomLink.removeClass('is-selected'); //Удаляем классы у ссылок .flat__link, чтобы подсвечивалась только последняя выбранная
        roomPath.removeClass('is-hover'); //Удаляем классы у каждого элемента path, чтобы не возникало бага с подсветки неактуальных квартир
        $(`[data-num=${roomNum}]`).toggleClass('is-selected'); //Добавляем класс со стилями дата-атрибуту ссылок с номером, который записан в roomNum
        $(`[data-room=${roomNum}]`).toggleClass('is-hover'); //Добавляем класс со стилями дата-атрибуту элементов path с номером, который записан в roomNum
    });

    roomLink.on("mouseover", function() { //При наведении на содержимое переменной roomLink разворачивается функция...
        roomNum = $(this).attr("data-num"); //Получаем значение дата-атрибута (номер) каждой ссылки, на которую мы навели курсор
        roomLink.removeClass('is-selected'); //Удаляем классы у ссылок .flat__link, чтобы подсвечивалась только последняя выбранная
        roomPath.removeClass('is-hover'); //Удаляем классы у каждого элемента path, чтобы не возникало бага с подсветки неактуальных квартир
        $(`[data-room=${roomNum}]`).toggleClass('is-hover');  //Добавляем класс со стилями дата-атрибуту элементов path с номером, который записан в roomNum
        $(`[data-num=${roomNum}]`).toggleClass('is-selected'); //Добавляем класс со стилями дата-атрибуту ссылок с номером, который записан в roomNum
    });

    function offStyle () {
        roomLink.removeClass('is-selected'); //Удаляем классы у ссылок .flat__link
        roomPath.removeClass('is-hover'); //Удаляем классы у каждого элемента path     
    }

    roomPath.on("mouseout", offStyle); //Когда курсор мышки уйдет с содержимого переменной roomPath, тогда применится функция удаления стилей
    roomLink.on("mouseleave", offStyle); //Когда курсор мышки уйдет с содержимого переменной roomLink, тогда применится функция удаления стилей

});