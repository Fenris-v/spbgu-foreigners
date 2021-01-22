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
});
