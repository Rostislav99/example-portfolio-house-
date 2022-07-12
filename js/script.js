const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.menu'),
    menu__cross = document.querySelector('.menu__cross'),
    menu__items = document.querySelector('.menu__items');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

menu__cross.addEventListener('click', () => {
    menu.classList.remove('active');
});

hamburger.addEventListener('click', () => {
    menu.classList.add('overlay_active');
});

menu__cross.addEventListener('click', () => {
    menu.classList.remove('overlay_active');
});
// убирает фон overlay_active и меню класс active

// menu__items.addEventListener('click', () => {
//     menu.classList.remove('active');
// });
// menu__items.addEventListener('click', () => {
//     menu.classList.remove('overlay_active');
// });

menu__items.addEventListener('click', () => {
    menu.classList.remove('active');
    menu.classList.remove('overlay_active');
});
// /////////////////////////////////////////////////////////////////

$(function () {

    // скрипт для кнопки плавного скролла
    $(window).on('scroll', function () {
            if ($(this).scrollTop() > 1700) {
                $('.circle-up').fadeIn();
            } else {
                $('.circle-up').fadeOut();
            }
        });

        // вариант скрипта для плавной прокрутки

        $("a[href^='#up']").on('click', function () {
            const _href = $(this).attr("href");
            $("html, body").animate({
                scrollTop: $(_href).offset().top + "px"
            }, 2500);
            return false;
        });



        // $("a[href^='#up']").handler('click', function () { // отслеживаем клик по кнопке с классом li-nk
        //     const _href = $(this).attr('href'); // берем у него содержимое атрибута href, которое начинается на "#section" или ".section"
        //     if ($(_href).length != 0) { // чтобы избежать ошибки проверяем на существование этого элемента 
        //         $('html, body').animate({
        //             scrollTop: $(_href).offset().top - 1000 // отступ (пиксели)
        //         }, 2500); // скорость (миллисекунды)
        //     }
        //     return false; // отключаем действие по умолчанию
        // });
    
})