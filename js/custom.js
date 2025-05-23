$(function () {


    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        console.log(sct)

        if (sct > 0) {
            $('.header').addClass('on')
        } else {
            $('.header').removeClass('on')
        }
    })

});



$(function () {
    $('.main_menu .tab_menu li button').on('click', function () {
        let idx = $(this).parent().index();
        console.log(idx);


        $('.main_menu .tab_menu li button').removeClass('on');
        $(this).addClass('on');

        $('.main_menu .tab_content .itm').removeClass('on');
        $('.main_menu .tab_content .itm').eq(idx).addClass('on');
    });

    const main_menu_slide01 = new Swiper('.main_menu_slide01', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_menu .itm01 .arrows .next',
            prevEl: '.main_menu .itm01 .arrows .prev',
        },
    })

    const main_menu_slide02 = new Swiper('.main_menu_slide02', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_menu .itm02 .arrows .next',
            prevEl: '.main_menu .itm02 .arrows .prev',
        },
    })

    const main_menu_slide03 = new Swiper('.main_menu_slide03', {
        loop: true,
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.main_menu .itm03 .arrows .next',
            prevEl: '.main_menu .itm03 .arrows .prev',
        },
    })

});