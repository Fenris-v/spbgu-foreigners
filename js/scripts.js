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
            // breakpoint: 640,
            // settings: {
            //     slidesToShow: 1
            // }
        }]
    })

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
            // breakpoint: 640,
            // settings: {
            //     slidesToShow: 1
            // }
        }]
    })
});
