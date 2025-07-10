document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper with enhanced configuration
    const projectsSwiper = new Swiper('.projects-slider', {
        // Optional parameters
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        
        // Enhanced effects
        effect: 'slide',
        speed: 800,
        allowTouchMove: true,
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
        },
        
        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
                centeredSlides: false,
            },
            // when window width is >= 992px
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
                centeredSlides: false,
            }
        },
        
        // Auto height
        autoHeight: true,
        
        // Enhanced touch interactions
        touchRatio: 1.2,
        simulateTouch: true,
        grabCursor: true,
        
        // Auto play with pause on hover
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        
        // Smooth transitions
        on: {
            slideChange: function () {
                // Add custom animations on slide change
                const activeSlide = this.slides[this.activeIndex];
                if (activeSlide) {
                    activeSlide.style.transform += ' scale(1.02)';
                    setTimeout(() => {
                        activeSlide.style.transform = activeSlide.style.transform.replace(' scale(1.02)', '');
                    }, 300);
                }
            },
            transitionStart: function () {
                // Add smooth transition effects
                this.slides.forEach(slide => {
                    slide.style.transition = 'all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
                });
            },
            init: function () {
                // Initialize with fade-in effect
                this.el.style.opacity = '0';
                this.el.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    this.el.style.transition = 'all 0.8s ease';
                    this.el.style.opacity = '1';
                    this.el.style.transform = 'translateY(0)';
                }, 100);
            }
        },
        
        // Mouse wheel control
        mousewheel: {
            invert: false,
        },
        
        // Keyboard control
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
    });

    // Add intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -50px 0px'
    };

    const projectsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe the projects slider
    const projectsSlider = document.querySelector('.projects-slider');
    if (projectsSlider) {
        projectsObserver.observe(projectsSlider);
    }
});
