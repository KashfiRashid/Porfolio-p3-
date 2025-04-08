document.addEventListener('DOMContentLoaded', function() {
    // Initialize sections for scroll tracking
    const sections = document.querySelectorAll('section[id]');
    
    // Custom cursor follow effect
    initCustomCursor();
    
    // Parallax effect for hero section
    initHeroParallax();
    
    // Floating progress indicator
    initFloatingProgress();
    
    // Reveal animations on scroll
    initRevealAnimations();
    
    // Magnetic particles background
    initParticles();
    
    // Parallax for evidence images
    initEvidenceParallax();
    
    // 3D Carousel for iterations
    initIterationsCarousel();
    
    // Interactive sketches viewer with magnifying glass
    initSketchesViewer();
    
    // Morphing shapes for features
    initMorphingShapes();
    
    // 3D App showcase
    initAppShowcase();
    
    // Gallery slider functionality (for mobile)
    initGallerySlider();
    
    // Magnifying glass for sketches
    initMagnifyingGlass();
    
    // Impact metrics animation
    initImpactMetrics();
    
    // Reveal elements on scroll
    initRevealOnScroll();
    
    // Interactive pain points
    initPainPoints();
    
    /**
     * Initialize custom cursor follow effect
     */
    function initCustomCursor() {
        const cursor = document.querySelector('.cursor-follow');
        const interactiveElements = document.querySelectorAll('a, button, .gallery-nav, .feature-card, .sketch-card, .evidence-card');
        
        interactiveElements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                cursor.style.width = '50px';
                cursor.style.height = '50px';
                cursor.style.borderWidth = '3px';
            });
            
            element.addEventListener('mouseleave', () => {
                cursor.style.width = '30px';
                cursor.style.height = '30px';
                cursor.style.borderWidth = '2px';
            });
        });
    }
    
    // Gallery slider functionality
    const track = document.querySelector('.gallery-track');
    const slides = Array.from(document.querySelectorAll('.gallery-item'));
    const nextButton = document.querySelector('.gallery-nav.next');
    const prevButton = document.querySelector('.gallery-nav.prev');
    const currentCounter = document.querySelector('.gallery-counter .current');
    const totalCounter = document.querySelector('.gallery-counter .total');
    
    let currentIndex = 0;
    totalCounter.textContent = slides.length;
    
    // Set up slide positions
    function setSlidePosition() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        currentCounter.textContent = currentIndex + 1;
    }
    
    // Next button functionality
    nextButton.addEventListener('click', function() {
        if (currentIndex >= slides.length - 1) {
            currentIndex = 0;
        } else {
            currentIndex++;
        }
        setSlidePosition();
    });
    
    // Previous button functionality
    prevButton.addEventListener('click', function() {
        if (currentIndex <= 0) {
            currentIndex = slides.length - 1;
        } else {
            currentIndex--;
        }
        setSlidePosition();
    });
    
    // Expandable content toggles
    const expandButtons = document.querySelectorAll('.expand-btn');
    
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            const contentId = this.getAttribute('aria-controls');
            const content = document.getElementById(contentId);
            
            this.setAttribute('aria-expanded', !isExpanded);
            
            if (!isExpanded) {
                content.style.maxHeight = content.scrollHeight + 'px';
                content.style.opacity = '1';
                this.querySelector('.btn-text').textContent = 'See less';
                this.querySelector('.btn-icon').textContent = '-';
            } else {
                content.style.maxHeight = '0';
                content.style.opacity = '0';
                this.querySelector('.btn-text').textContent = 'See more';
                this.querySelector('.btn-icon').textContent = '+';
            }
        });
    });
    
    // Scroll-triggered animations
    const revealElements = document.querySelectorAll('.reveal-element');
    
    function checkReveal() {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - 50) {
                element.classList.add('revealed');
            }
        });
    }
    
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // Check on page load
    
    // Parallax effect on scroll
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    function updateParallax() {
        parallaxElements.forEach(element => {
            const speed = parseFloat(element.getAttribute('data-speed'));
            const elementTop = element.getBoundingClientRect().top;
            const scrollPosition = window.scrollY;
            
            const parallaxOffset = elementTop * speed;
            
            element.style.transform = `translateY(${parallaxOffset}px)`;
        });
    }
    
    window.addEventListener('scroll', updateParallax);
    
    /**
     * Initialize gallery slider for mobile view
     */
    function initGallerySlider() {
        const track = document.querySelector('.gallery-track');
        if (!track) return;
        
        const slides = Array.from(document.querySelectorAll('.gallery-item'));
        const nextButton = document.querySelector('.gallery-nav.next');
        const prevButton = document.querySelector('.gallery-nav.prev');
        const currentCounter = document.querySelector('.gallery-counter .current');
        const totalCounter = document.querySelector('.gallery-counter .total');
        
        let currentIndex = 0;
        totalCounter.textContent = slides.length;
        
        // Set up slide positions
        function setSlidePosition() {
            track.style.transform = `translateX(-${currentIndex * 100}%)`;
            currentCounter.textContent = currentIndex + 1;
        }
        
        // Next button functionality
        nextButton.addEventListener('click', function() {
            if (currentIndex >= slides.length - 1) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            setSlidePosition();
        });
        
        // Previous button functionality
        prevButton.addEventListener('click', function() {
            if (currentIndex <= 0) {
                currentIndex = slides.length - 1;
            } else {
                currentIndex--;
            }
            setSlidePosition();
        });
    }
    
    /**
     * Initialize magnifying glass effect for sketches
     */
    function initMagnifyingGlass() {
        const sketchImages = document.querySelectorAll('.sketch-image');
        
        sketchImages.forEach(container => {
            const img = container.querySelector('img');
            const magnifyGlass = container.querySelector('.magnify-glass');
            
            if (!img || !magnifyGlass) return;
            
            container.addEventListener('mousemove', function(e) {
                // Get position of mouse cursor over image
                const bounds = container.getBoundingClientRect();
                let x = e.clientX - bounds.left;
                let y = e.clientY - bounds.top;
                
                // Position the magnify glass
                magnifyGlass.style.left = `${x}px`;
                magnifyGlass.style.top = `${y}px`;
                
                // Calculate position ratio
                let ratioX = x / bounds.width;
                let ratioY = y / bounds.height;
                
                // Get source image dimensions
                const imgWidth = img.naturalWidth;
                const imgHeight = img.naturalHeight;
                
                // Calculate background position for magnify glass
                const bgX = Math.min(ratioX * imgWidth - 50, imgWidth - 100);
                const bgY = Math.min(ratioY * imgHeight - 50, imgHeight - 100);
                
                // Set background image and position
                magnifyGlass.style.backgroundImage = `url(${img.src})`;
                magnifyGlass.style.backgroundSize = `${imgWidth}px ${imgHeight}px`;
                magnifyGlass.style.backgroundPosition = `-${bgX}px -${bgY}px`;
            });
        });
    }
    
    /**
     * Initialize impact metrics animation
     */
    function initImpactMetrics() {
        const metricCircles = document.querySelectorAll('.metric-progress');
        
        // Values for each metric in percentage
        const metricValues = [85, 40, 92];
        
        // Calculate stroke-dashoffset for each percentage
        metricCircles.forEach((circle, index) => {
            const circumference = parseFloat(circle.getAttribute('stroke-dasharray'));
            const percentage = metricValues[index];
            const offset = circumference - (circumference * percentage / 100);
            
            // Initially set to full offset (0%)
            circle.style.strokeDashoffset = circumference;
            
            // Trigger animation when in view
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            circle.style.strokeDashoffset = offset;
                        }, 300);
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(circle);
        });
    }
    
    /**
     * Initialize reveal animations on scroll
     */
    function initRevealOnScroll() {
        const revealElements = document.querySelectorAll('.reveal-element');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-delay') || 0;
                    setTimeout(() => {
                        entry.target.classList.add('revealed');
                    }, delay);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        revealElements.forEach(element => {
            observer.observe(element);
        });
    }
    
    /**
     * Initialize interactive pain points
     */
    function initPainPoints() {
        const painPoints = document.querySelectorAll('.pain-point');
        
        painPoints.forEach(point => {
            point.addEventListener('mouseenter', () => {
                point.classList.add('active');
            });
            
            point.addEventListener('mouseleave', () => {
                point.classList.remove('active');
            });
        });
    }
    
    /**
     * Add this CSS class to elements when they come into view
     */
    function addRevealedClass() {
        document.querySelectorAll('.reveal-element').forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('revealed');
            }
        });
    }
    
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    }
    
    // Initial check for elements in viewport
    addRevealedClass();
    
    // Check again on scroll
    window.addEventListener('scroll', addRevealedClass);
    
    // Add animation to graph line
    const graphLine = document.querySelector('.graph-line');
    if (graphLine) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    graphLine.style.animation = 'drawLine 2s ease forwards';
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(graphLine);
    }
}); 