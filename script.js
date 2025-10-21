// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Hide loading overlay after page loads
    setTimeout(function() {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }, 1000);

    // Track button clicks for analytics
    const whatsappBtn = document.getElementById('whatsapp-btn');
    const instagramBtn = document.getElementById('instagram-btn');

    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            // Track WhatsApp click
            trackButtonClick('WhatsApp', 'whatsapp_maintenance_page');
            
            // Add ripple effect
            createRippleEffect(e, this);
        });
    }

    if (instagramBtn) {
        instagramBtn.addEventListener('click', function(e) {
            // Track Instagram click
            trackButtonClick('Instagram', 'instagram_maintenance_page');
            
            // Add ripple effect
            createRippleEffect(e, this);
        });
    }

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.info-card, .cta-button');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.cta-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Initialize countdown timer (optional feature)
    initCountdownTimer();
});

// Track button clicks for analytics
function trackButtonClick(platform, label) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', 'contact_click', {
            'event_category': 'contact',
            'event_label': label,
            'value': 1
        });
    }
    
    // Facebook Pixel tracking
    if (typeof fbq !== 'undefined') {
        if (platform === 'WhatsApp') {
            fbq('track', 'Contact', {
                'channel': 'WhatsApp',
                'page': 'maintenance'
            });
        } else if (platform === 'Instagram') {
            fbq('track', 'Lead', {
                'channel': 'Instagram',
                'page': 'maintenance'
            });
        }
    }
    
    // Console log for debugging
    console.log(`${platform} button clicked - tracked for analytics`);
}

// Create ripple effect on button click
function createRippleEffect(event, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.classList.add('ripple');
    
    // Add ripple styles if not already in CSS
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            .cta-button {
                position: relative;
                overflow: hidden;
            }
            .ripple {
                position: absolute;
                border-radius: 50%;
                background-color: rgba(255, 255, 255, 0.5);
                transform: scale(0);
                animation: ripple-animation 0.6s ease-out;
                pointer-events: none;
            }
            @keyframes ripple-animation {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    button.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Initialize countdown timer (optional feature)
function initCountdownTimer() {
    // Set the countdown date (2 days from now)
    const countdownDate = new Date();
    countdownDate.setDate(countdownDate.getDate() + 2);
    
    // Update the countdown every 1 second
    const countdownInterval = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();
        
        // Find the distance between now and the countdown date
        const distance = countdownDate - now;
        
        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        
        // Display the result in the element with id="countdown"
        const countdownElement = document.getElementById('countdown');
        if (countdownElement) {
            countdownElement.innerHTML = `${days} hari ${hours} jam ${minutes} menit`;
        }
        
        // If the count down is finished, display a message
        if (distance < 0) {
            clearInterval(countdownInterval);
            if (countdownElement) {
                countdownElement.innerHTML = "Segera kembali!";
            }
        }
    }, 1000);
}

// Add animation classes dynamically
function addAnimationClasses() {
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            animation: fadeInUp 0.6s ease forwards;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
}

// Initialize animations
addAnimationClasses();

// Handle keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Press Enter or Space on buttons to trigger click
    if (e.key === 'Enter' || e.key === ' ') {
        const focusedElement = document.activeElement;
        if (focusedElement.classList.contains('cta-button')) {
            e.preventDefault();
            focusedElement.click();
        }
    }
});

// Add touch support for mobile devices
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
    
    // Add touch-specific styles
    const touchStyle = document.createElement('style');
    touchStyle.textContent = `
        .touch-device .cta-button {
            -webkit-tap-highlight-color: transparent;
        }
        .touch-device .cta-button:active {
            transform: scale(0.98);
        }
    `;
    document.head.appendChild(touchStyle);
}

// Performance optimization: Lazy load images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize lazy loading
lazyLoadImages();

// Error handling for external resources
window.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        // Handle broken images
        e.target.style.display = 'none';
        console.warn('Image failed to load:', e.target.src);
    }
}, true);

// Utility function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Add parallax effect to hero section (subtle)
function addParallaxEffect() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = hero.querySelector('.hero-content');
        if (parallax) {
            const speed = 0.5;
            parallax.style.transform = `translateY(${scrolled * speed}px)`;
        }
    });
}

// Initialize parallax effect
addParallaxEffect();

// Console branding
console.log('%cTOSERBA WS PEDAK - Maintenance Page', 'color: #1E4DB7; font-size: 20px; font-weight: bold;');
console.log('%cDesigned with care for our customers', 'color: #FFC107; font-size: 14px;');