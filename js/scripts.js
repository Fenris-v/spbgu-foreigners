$(document).ready(() => {
    /**
     * ACCORDION
     */
    $('.faq__acc__item__name').on('click', (e) => {
        e.preventDefault();

        let parent = $(e.target).parents('.faq__acc__item');

        if (parent.hasClass('active')) {
            parent.find('.faq__acc__item__content').stop(true, true).slideUp();
            parent.removeClass('active');
        } else {
            $('.faq__acc__item__content').stop(true, true).slideUp();
            $('.faq__acc__item').removeClass('active');
            parent.addClass('active');
            parent.find('.faq__acc__item__content').stop(true, true).slideDown();
        }
    });

    /**
     * SLIDER
     */
    $('.programs__slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        nextArrow: '<a href="#" class="slick-arrow slick-next"><img src="images/right-arrow.png" alt="arrow"></a>',
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><img src="images/right-arrow.png" alt="arrow"></a>',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.teachers__slider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        nextArrow: '<a href="#" class="slick-arrow slick-next"><img src="images/right-arrow.png" alt="arrow"></a>',
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><img src="images/right-arrow.png" alt="arrow"></a>',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            }
        ]
    });

    $('.partners__slider').slick({
        infinite: true,
        arrows: true,
        dots: true,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        nextArrow: '<a href="#" class="slick-arrow slick-next"><img src="images/right-arrow.png" alt="arrow"></a>',
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><img src="images/right-arrow.png" alt="arrow"></a>',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                arrows: false
            }
        },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            }
        ]
    });

    $('.photoSlider').slick({
        infinite: true,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        nextArrow: '<a href="#" class="slick-arrow slick-next"><img src="images/right-arrow.png" alt="arrow"></a>',
        prevArrow: '<a href="#" class="slick-arrow slick-prev"><img src="images/right-arrow.png" alt="arrow"></a>',
        responsive: [{
            breakpoint: 1000,
            settings: {
                slidesToShow: 3,
                arrows: false,
                dots: true
            }
        }, {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                arrows: false,
                dots: true
            }
        }]
    });

    $('.firstScreen__slider').slick({
        infinite: true,
        arrows: false,
        dots: true,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000
    });

    /**
     * FANCYBOX
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus: true,
        autoFocus: false,
        touch: false,
    });

    /**
     * HAMBURGER
     */
    $('.menu-toggle-inner').on('click', () => {
        $('.adaptive-menu-toggle').toggleClass('adaptive-menu-toggle--open');
        $('.headerNav_adaptive').toggleClass('header_opened');
    });

    /**
     * TABS
     */
    let tabList = $('.tabs li');
    let tabContent = $('.tab__content');
    tabList.on('click', (e) => {
        tabList.removeClass('active');
        tabContent.removeClass('active');

        $(e.target).addClass('active');
        tabContent.eq($(e.target).index()).addClass('active');
    });

    let tabList2 = $('.tabs_compact li');
    let tabContent2 = $('.tabs_compact__content');
    tabList2.on('click', (e) => {
        tabList2.removeClass('active');
        tabContent2.removeClass('active');

        $(e.target).addClass('active');
        tabContent2.eq($(e.target).index()).addClass('active');
    });

    /**
     * ACCORDION
     */
    $('.content__accordion__item__title').on('click', (e) => {
        let parent = $(e.target).parents('.content__accordion__item');

        if (parent.hasClass('active')) {
            parent.find('.content__accordion__item__content').stop(true, true).slideUp();
            parent.removeClass('active');
        } else {
            $('.content__accordion__item__content').stop(true, true).slideUp();
            $('.content__accordion__item').removeClass('active');
            parent.addClass('active');
            parent.find('.content__accordion__item__content').stop(true, true).slideDown();
        }
    });

    $('.content__accordion__item__close').on('click', () => {
        $('.content__accordion__item__content').stop(true, true).slideUp();
        $('.content__accordion__item').removeClass('active');
    });
});
