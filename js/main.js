// Enhanced Effects for Street Food MY
document.addEventListener('DOMContentLoaded', function() {
    initScrollAnimations();
    initParallaxEffect();
    initTypewriterEffect();
    initFloatingParticles();
    initHoverEffects();
    initLoadingAnimation();
});

// scoll animation initial
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    
    const elementsToAnimate = document.querySelectorAll(
        'section, .col-lg-8, .col-lg-4, .video-wrapper, .btn, .caption'
    );
    
    elementsToAnimate.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
}

// scroll effect
function initParallaxEffect() {
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        const videoWrapper = document.querySelector('.video-wrapper');
        
        if (hero) {
            const rate = scrolled * -0.5;
            hero.style.transform = `translateY(${rate}px)`;
        }
        
        if (videoWrapper) {
            const rate = scrolled * -0.3;
            videoWrapper.style.transform = `translateY(${rate}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// typing effect
function initTypewriterEffect() {
    const title = document.querySelector('.hero h1');
    if (!title) return;
    
    const text = title.textContent;
    title.textContent = '';
    title.style.borderRight = '3px solid rgba(255,255,255,0.8)';
    
    let i = 0;
    const typeSpeed = 100;
    
    function typeWriter() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, typeSpeed);
        } else {
            
            setTimeout(() => {
                title.style.borderRight = 'none';
            }, 1000);
        }
    }
    
    // delay animation for typing effect
    setTimeout(typeWriter, 800);
}


function initFloatingParticles() {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
    `;
    
    hero.appendChild(particlesContainer);
    
   
    for (let i = 0; i < 20; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 6 + 2;
    const animationDuration = Math.random() * 20 + 10;
    const opacity = Math.random() * 0.5 + 0.2;
    
    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: radial-gradient(circle, rgba(255,255,255,${opacity}), transparent);
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        animation: float ${animationDuration}s infinite linear;
    `;
    
    container.appendChild(particle);
    
   
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            from {
                transform: translateY(100vh) rotate(0deg);
            }
            to {
                transform: translateY(-100px) rotate(360deg);
            }
        }
    `;
    document.head.appendChild(style);
    
    
    setTimeout(() => {
        particle.remove();
        createParticle(container);
    }, animationDuration * 1000);
}


function initHoverEffects() {
   
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255,255,255,0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    
    const rippleStyle = document.createElement('style');
    rippleStyle.textContent = `
        @keyframes ripple {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(rippleStyle);
}

// loading effect
function initLoadingAnimation() {

    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <img src="image/logo.png" alt="Loading..." class="loader-logo">
            <div class="loader-spinner"></div>
            <p class="loader-text">Loading Street Food MY...</p>
        </div>
    `;
    
   
    const loaderStyle = document.createElement('style');
    loaderStyle.textContent = `
        .page-loader {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #18afbc 0%, #547fbb 50%, #fddb92 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease, visibility 0.5s ease;
        }
        
        .page-loader.fade-out {
            opacity: 0;
            visibility: hidden;
        }
        
        .loader-content {
            text-align: center;
            color: white;
        }
        
        .loader-logo {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-bottom: 20px;
            animation: logoSpin 2s ease-in-out infinite;
        }
        
        .loader-spinner {
            width: 60px;
            height: 60px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top: 4px solid white;
            border-radius: 50%;
            margin: 0 auto 20px;
            animation: spin 1s linear infinite;
        }
        
        .loader-text {
            font-size: 18px;
            font-weight: 600;
            margin: 0;
            opacity: 0.9;
        }
        
        @keyframes logoSpin {
            0%, 100% { transform: scale(1) rotate(0deg); }
            50% { transform: scale(1.1) rotate(180deg); }
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(loaderStyle);
    document.body.appendChild(loader);
    
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            loader.classList.add('fade-out');
            setTimeout(() => loader.remove(), 500);
        }, 1000);
    });
}

function createCustomCursor() {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(255,168,58,0.8), transparent);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        mix-blend-mode: difference;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);
    return cursor;
}

// improve perfomance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// if mobile no effect
if (window.innerWidth <= 768) {
    
    function initFloatingParticles() { return; }
    function initParallaxEffect() { return; }
}