document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper for Projects
    const projectsSwiper = new Swiper('.projects-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        effect: 'coverflow',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.projects-section .swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },
        navigation: {
            nextEl: '.projects-section .swiper-button-next',
            prevEl: '.projects-section .swiper-button-prev',
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        breakpoints: {
            640: { 
                slidesPerView: 2, 
                spaceBetween: 20,
                effect: 'slide',
            },
            992: { 
                slidesPerView: 3, 
                spaceBetween: 30,
                effect: 'slide',
            },
        },
    });

    // Initialize Swiper for Certifications with enhanced options
    const certificationsSwiper = new Swiper('.certifications-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        effect: 'cards',
        cardsEffect: {
            perSlideOffset: 8,
            perSlideRotate: 2,
            rotate: true,
            slideShadows: true,
        },
        pagination: {
            el: '.certifications-section .cert-pagination',
            clickable: true,
            dynamicBullets: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        navigation: {
            nextEl: '.certifications-section .cert-nav-next',
            prevEl: '.certifications-section .cert-nav-prev',
        },
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },
        mousewheel: {
            enabled: true,
            sensitivity: 1,
        },
        breakpoints: {
            640: { 
                slidesPerView: 2, 
                spaceBetween: 20,
                effect: 'slide',
            },
            992: { 
                slidesPerView: 3, 
                spaceBetween: 30,
                effect: 'slide',
            },
        },
    });

    // Enhanced Intersection Observer for Skills Section Animation
    const skillsSection = document.querySelector('.skills-section');
    const skillObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                skillsSection.classList.add('animate');
                
                // Animate skill cards with staggered delay
                const skillCards = document.querySelectorAll('.skill-card-fancy');
                skillCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'translateY(0)';
                        card.style.opacity = '1';
                    }, index * 150);
                });
                
                observer.unobserve(entry.target);
            }
        });
    }, { 
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    });

    if (skillsSection) {
        skillObserver.observe(skillsSection);
    }

    // Enhanced Card Animation Observer
    const animateCards = () => {
        const cards = document.querySelectorAll('.animate-card');
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        cards.forEach(card => {
            cardObserver.observe(card);
        });
    };

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'transparent';
            header.style.backdropFilter = 'none';
            header.style.boxShadow = 'none';
        }

        // Auto-hide header on scroll down, show on scroll up
        if (currentScrollY > lastScrollY && currentScrollY > 200) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollY = currentScrollY;
    });

    // Parallax effect for hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        });
    }

    // Enhanced text animations
    const animateText = () => {
        const textElements = document.querySelectorAll('.animate-slide-down, .animate-slide-up, .animate-slide-right, .animate-slide-left, .animate-fade-in');
        
        const textObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, {
            threshold: 0.3
        });

        textElements.forEach(element => {
            element.style.animationPlayState = 'paused';
            textObserver.observe(element);
        });
    };

    // Certificate card hover effects
    const enhanceCertificateCards = () => {
        const certCards = document.querySelectorAll('.certification-card');
        
        certCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-15px) scale(1.03)';
                
                // Add glow effect
                this.style.boxShadow = '0 25px 50px rgba(52, 152, 219, 0.3), 0 10px 25px rgba(0, 0, 0, 0.1)';
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)';
            });
        });
    };

    // Add typing effect to hero text
    const addTypingEffect = () => {
        const heroTitle = document.querySelector('.hero h2');
        if (heroTitle) {
            const text = heroTitle.textContent;
            heroTitle.textContent = '';
            heroTitle.style.borderRight = '2px solid #3498db';
            
            let i = 0;
            const typeWriter = () => {
                if (i < text.length) {
                    heroTitle.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100);
                } else {
                    setTimeout(() => {
                        heroTitle.style.borderRight = 'none';
                    }, 1000);
                }
            };
            
            setTimeout(typeWriter, 1000);
        }
    };

    // Floating animation for skill cards
    const addFloatingAnimation = () => {
        const skillCards = document.querySelectorAll('.skill-card-fancy');
        
        skillCards.forEach((card, index) => {
            // Add subtle floating animation with different delays
            card.style.animation = `float ${3 + (index % 3) * 0.5}s ease-in-out infinite`;
            card.style.animationDelay = `${index * 0.2}s`;
        });
    };

    // Add CSS keyframes for floating animation
    const addFloatingKeyframes = () => {
        const style = document.createElement('style');
        style.textContent = `
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
            }
        `;
        document.head.appendChild(style);
    };

    // Loading animation
    const addLoadingAnimation = () => {
        const body = document.body;
        body.style.opacity = '0';
        body.style.transition = 'opacity 0.5s ease-in-out';
        
        setTimeout(() => {
            body.style.opacity = '1';
        }, 100);
    };

    // Initialize all enhancements
    animateCards();
    animateText();
    enhanceCertificateCards();
    addTypingEffect();
    addFloatingKeyframes();
    addFloatingAnimation();
    addLoadingAnimation();

    // Add scroll progress indicator
    const addScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #3498db, #5dade2);
            z-index: 9999;
            transition: width 0.3s ease;
        `;
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };

    addScrollProgress();

    // Console welcome message
    console.log(`
    🚀 Welcome to Jablay Noor Rahman's Portfolio!
    📧 Contact: omirahman40@gmail.com
    🌟 Thanks for checking out the code!
    `);
});