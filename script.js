document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper
    const projectsSwiper = new Swiper('.projects-slider', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
            }
        },
        
        // Auto height
        autoHeight: true,
        
        // Enable touch for mobile
        touchRatio: 1,
        simulateTouch: true,
        
        // Auto play
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });
});
