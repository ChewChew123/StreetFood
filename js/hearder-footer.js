// Enhanced Header-Footer Script
// Load CSS
const link = document.createElement("link");
link.rel = "stylesheet";
link.href = "css/h-f.css";
document.head.appendChild(link);

// Load Bootstrap CSS if not already loaded
if (!document.querySelector('link[href*="bootstrap"]')) {
    const bootstrapCSS = document.createElement("link");
    bootstrapCSS.rel = "stylesheet";
    bootstrapCSS.href = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css";
    document.head.appendChild(bootstrapCSS);
}

// Load Bootstrap Icons if not already loaded
if (!document.querySelector('link[href*="bootstrap-icons"]')) {
    const bootstrapIcons = document.createElement("link");
    bootstrapIcons.rel = "stylesheet";
    bootstrapIcons.href = "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css";
    document.head.appendChild(bootstrapIcons);
}

document.addEventListener("DOMContentLoaded", () => {
    insertHeader();
    insertFooter();
    initMobileMenu();
    highlightCurrentPage();
    initAnimations();
    initResponsiveHandling();
    initScrollNavBehavior();
    initCookieConsent();
    initPerformanceMonitoring();
});

function insertHeader() {
    const headerHTML = `
        <header class="site-header">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <!-- Brand -->
                    <a class="navbar-brand d-flex align-items-center gap-2" href="index.html">
                        <div class="logo-wrapper">
                            <img src="image/logo.png" height="40" alt="Street Food MY Logo" class="logo-img">
                        </div>
                        <span class="brand-text">Street Food MY</span>
                    </a>
                    
                    <!-- Mobile Menu Toggle -->
                    <button class="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#mainNavigation" aria-controls="mainNavigation" 
                            aria-expanded="false" aria-label="Toggle navigation">
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    
                    <!-- Navigation -->
                    <div class="collapse navbar-collapse" id="mainNavigation">
                        <ul class="navbar-nav ms-auto nav-pills">
                            <li class="nav-item">
                                <a class="nav-link" href="index.html">
                                    <span>🏠Home</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="foodGuides&Searching.html">
                                    <span>🧭Food Guides</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="favourite.html">
                                    <span>❤️My Favourite</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="FoodReview.html">
                                    <span>⭐Reviews</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="recipes.html">
                                    <span>🍳Recipes</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="map.html">
                                    <span>🗺️Map</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="AboutUs.html">
                                    <span>🏅About Us</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="Feedback.html">
                                    <span>❓Feedback</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    `;
    
    document.body.insertAdjacentHTML("afterbegin", headerHTML);
    
    // Load Bootstrap JS if not already loaded
    if (!window.bootstrap) {
        const bootstrapJS = document.createElement("script");
        bootstrapJS.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
        document.head.appendChild(bootstrapJS);
    }
}

function insertFooter() {
    const currentYear = new Date().getFullYear();
    const footerHTML = `
        <footer class="site-footer">
            <div class="container">
                <div class="footer-content">
                    <!-- Main Footer Content -->
                    <div class="row g-4 mb-4">
                        <!-- Brand Section -->
                        <div class="col-lg-4">
                            <div class="footer-brand">
                                <div class="d-flex align-items-center gap-2 mb-3">
                                    <img src="image/logo.png" height="32" alt="Street Food MY" class="logo-img">
                                    <h5 class="mb-0 text-white fw-bold">Street Food MY</h5>
                                </div>
                                <p class="footer-description">
                                    Discover Malaysia's best street food through our comprehensive guides, 
                                    reviews, and interactive maps. From night markets to hidden gems.
                                </p>
                            </div>
                        </div>
                        
                        <!-- Quick Links -->
                        <div class="col-lg-4">
                            <h6 class="footer-heading">Quick Links</h6>
                            <div class="row">
                                <div class="col-6">
                                    <ul class="footer-links">
                                        <li><a href="foodGuides&Searching.html">Food Guides</a></li>
                                        <li><a href="FoodReview.html">Reviews</a></li>
                                        <li><a href="recipes.html">Recipes</a></li>
                                        <li><a href="map.html">Food Map</a></li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="footer-links">
                                        <li><a href="favourite.html">My Favourite</a></li>
                                        <li><a href="AboutUs.html">About Us</a></li>
                                        <li><a href="Feedback.html">Feedback</a></li>
                                        <li><a href="#" onclick="scrollToTop()">Back to Top</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Social & Newsletter -->
                        <div class="col-lg-4">
                            <h6 class="footer-heading">Stay Connected</h6>
                            <p class="mb-3">Follow us for the latest street food discoveries!</p>
                            
                            <!-- Social Media -->
                            <div class="social-media mb-4">
                                <a href="https://www.instagram.com/malaysia_street_food" target="_blank" 
                                   aria-label="Follow us on Instagram" class="social-link">
                                    <i class="bi bi-instagram"></i>
                                </a>
                                <a href="https://twitter.com/streetfoodmy" target="_blank" 
                                   aria-label="Follow us on Twitter" class="social-link">
                                    <i class="bi bi-twitter-x"></i>
                                </a>
                                <a href="https://www.facebook.com/p/The-Street-Food-Malaysia-100063670836214/" target="_blank" 
                                   aria-label="Follow us on Facebook" class="social-link">
                                    <i class="bi bi-facebook"></i>
                                </a>
                                <a href="https://www.youtube.com/@streetfoodmy" target="_blank" 
                                   aria-label="Subscribe to our YouTube channel" class="social-link">
                                    <i class="bi bi-youtube"></i>
                                </a>
                            </div>
                            
                            <!-- Newsletter Signup -->
                            <div class="newsletter-signup">
                                <p class="small mb-2">Get weekly updates on new food spots</p>
                                <form class="newsletter-form" onsubmit="handleNewsletterSignup(event)">
                                    <div class="input-group">
                                        <input type="email" class="form-control" placeholder="Your email" 
                                               name="email" required aria-label="Email address">
                                        <button class="btn btn-primary" type="submit" aria-label="Subscribe">
                                            <i class="bi bi-send-fill"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Footer Bottom -->
                    <div class="footer-bottom">
                        <div class="row align-items-center">
                            <div class="col-md-6">
                                <p class="copyright mb-0">
                                    &copy; ${currentYear} Street Food MY. All rights reserved.
                                </p>
                            </div>
                            <div class="col-md-6 text-md-end">
                                <div class="footer-meta">
                                    <span class="text-muted">Made with ❤️ in Malaysia</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Decorative Background -->
            <div class="footer-bg-decoration"></div>
        </footer>
    `;
    
 const tempDiv = document.createElement("div");
    tempDiv.innerHTML = footerHTML.trim();
    const footerElement = tempDiv.firstChild;

    document.body.appendChild(footerElement); 
}


function initCookieConsent() {
    // Check if consent already given
    if (!document.cookie.includes('consent=yes')) {
        const cookieHTML = `
            <div id="cookie-consent" class="cookie-consent">
                <div class="cookie-content">
                    <div class="cookie-icon">🍪</div>
                    <div class="cookie-text">
                        <p class="mb-1"><strong>We use cookies</strong></p>
                        <p class="small mb-0">We use cookies to improve your browsing experience and provide personalized content.</p>
                    </div>
                    <div class="cookie-actions">
                        <button class="btn btn-sm btn-outline-light me-2" onclick="handleCookieConsent('necessary')">
                            Necessary Only
                        </button>
                        <button class="btn btn-sm btn-light" onclick="handleCookieConsent('all')">
                            Accept All
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML("beforeend", cookieHTML);
    }
}

function handleCookieConsent(type) {
    document.cookie = `consent=${type};path=/;max-age=31536000`; // 1 year
    const cookieElement = document.getElementById('cookie-consent');
    if (cookieElement) {
        cookieElement.style.animation = 'slideDown 0.3s ease reverse';
        setTimeout(() => cookieElement.remove(), 300);
    }
}

function handleNewsletterSignup(event) {
    event.preventDefault();
    const email = event.target.email.value;
    
    // Show success animation
    const button = event.target.querySelector('button');
    const originalContent = button.innerHTML;
    
    button.innerHTML = '<i class="bi bi-check-circle-fill"></i>';
    button.classList.add('btn-success');
    button.classList.remove('btn-primary');
    
    setTimeout(() => {
        button.innerHTML = originalContent;
        button.classList.remove('btn-success');
        button.classList.add('btn-primary');
        event.target.reset();
    }, 2000);
    
    console.log('Newsletter signup:', email);
}

function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (!navbarToggler || !navbarCollapse) return;
    
    // Custom hamburger animation
    navbarToggler.addEventListener('click', () => {
        navbarToggler.classList.toggle('active');
    });
    
    // Close menu when clicking on links (mobile only)
    navbarCollapse.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link') && window.innerWidth <= 992) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                hide: true
            });
        }
    });
}

function highlightCurrentPage() {
    const currentPage = getCurrentPageName();
    const navLinks = document.querySelectorAll(".nav-link");
    
    navLinks.forEach(link => {
        const href = link.getAttribute("href");
        if (!href) return;
        
        const linkPageName = href.toLowerCase();
        
        if (linkPageName === currentPage || 
            (isHomePage(currentPage) && href === "index.html")) {
            link.classList.add("active");
        }
    });
}

function getCurrentPageName() {
    return window.location.pathname.split("/").pop().toLowerCase();
}

function isHomePage(pageName) {
    return pageName === "" || pageName === "index.html" || pageName === "home.html";
}

function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const elementsToAnimate = document.querySelectorAll('.fade-in, .site-footer');
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(el);
    });
}

function initResponsiveHandling() {
    const debouncedResize = debounce(handleWindowResize, 250);
    window.addEventListener('resize', debouncedResize);
    handleWindowResize();
}

function handleWindowResize() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    if (navbarToggler && window.innerWidth > 992) {
        navbarToggler.classList.remove('active');
    }
}

function initScrollNavBehavior() {
    const header = document.querySelector(".site-header");
    if (!header) return;

    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateNavbar() {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add("nav-hidden");
        } else {
            header.classList.remove("nav-hidden");
        }
        
        // Add background blur when scrolled
        if (currentScrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            requestAnimationFrame(updateNavbar);
            ticking = true;
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function initPerformanceMonitoring() {
    window.addEventListener('load', () => {
        setTimeout(() => {
            document.body.classList.remove('loading');
            
            if (window.performance && window.performance.timing) {
                const loadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
                console.log(`Page load time: ${loadTime}ms`);
            }
        }, 100);
    });
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

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

// Initialize performance monitoring
initPerformanceMonitoring();

// Export functions for external use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        scrollToTop,
        debounce,
        throttle,
        handleNewsletterSignup,
        handleCookieConsent
    };
}