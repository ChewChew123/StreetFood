/**
 * Conflict-free About Us Page JavaScript
 * Wrapped in IIFE to avoid conflicts with header-footer.js
 */

(function() {
    'use strict';
    
    // Create namespace to avoid conflicts
    const AboutUsPage = {
        initialized: false,
        
        // Utility function for debouncing
        debounce: function(func, wait) {
            let timeout;
            return function executedFunction(...args) {
                const later = () => {
                    clearTimeout(timeout);
                    func(...args);
                };
                clearTimeout(timeout);
                timeout = setTimeout(later, wait);
            };
        },

        // Enhanced scroll animations with stagger effect
        initScrollAnimations: function() {
            const sections = document.querySelectorAll('[data-animate]');
            
            if (!sections.length) {
                console.warn('AboutUs: No elements with [data-animate] found.');
                return;
            }

            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.classList.add('visible');
                        }, index * 100);
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            sections.forEach(section => {
                observer.observe(section);
            });
        },

        // Counter animation for statistics
        animateCounters: function() {
            const counters = document.querySelectorAll('.num[data-count]');
            
            counters.forEach(counter => {
                const target = parseInt(counter.getAttribute('data-count'));
                const increment = target / 50;
                let current = 0;
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        const suffix = (target === 400 || target === 50) ? '+' : '';
                        counter.textContent = target + suffix;
                        clearInterval(timer);
                    } else {
                        const suffix = (target === 400 || target === 50) ? '+' : '';
                        counter.textContent = Math.floor(current) + suffix;
                    }
                }, 40);
            });
        },

        // Create floating particles background
        createParticles: function() {
            const particlesContainer = document.querySelector('.particles');
            if (!particlesContainer) return;

            const particleCount = 20;

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 6 + 2;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                particle.style.animationDelay = Math.random() * 6 + 's';
                particle.style.animationDuration = (Math.random() * 4 + 4) + 's';
                
                particlesContainer.appendChild(particle);
            }
        },

        // Enhanced magnetic button effect
        addMagneticEffect: function() {
            const buttons = document.querySelectorAll('.btn-primary');
            
            buttons.forEach(button => {
                button.addEventListener('mousemove', (e) => {
                    const rect = button.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`;
                });
                
                button.addEventListener('mouseleave', () => {
                    button.style.transform = 'translate(0, 0) scale(1)';
                });

                button.addEventListener('click', (e) => {
                    const ripple = document.createElement('span');
                    const rect = button.getBoundingClientRect();
                    const size = Math.max(rect.width, rect.height);
                    const x = e.clientX - rect.left - size / 2;
                    const y = e.clientY - rect.top - size / 2;
                    
                    ripple.style.width = ripple.style.height = size + 'px';
                    ripple.style.left = x + 'px';
                    ripple.style.top = y + 'px';
                    ripple.classList.add('ripple');
                    
                    button.appendChild(ripple);
                    
                    setTimeout(() => {
                        ripple.remove();
                    }, 600);
                });
            });
        },

        // Stats counter trigger with intersection observer
        initStatsObserver: function() {
            const statsSection = document.querySelector('.stats');
            if (!statsSection) return;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animateCounters();
                        observer.unobserve(entry.target);
                    }
                });
            }, { 
                threshold: 0.5,
                rootMargin: '0px'
            });
            
            observer.observe(statsSection);
        },

        // Parallax scrolling effect
        initParallaxEffect: function() {
            const parallaxElements = document.querySelectorAll('.page-header, .particles');
            
            const handleScroll = this.debounce(() => {
                const scrolled = window.pageYOffset;
                
                parallaxElements.forEach(element => {
                    if (element.classList.contains('particles')) {
                        element.style.transform = `translateY(${scrolled * 0.5}px)`;
                    } else {
                        element.style.transform = `translateY(${scrolled * 0.3}px)`;
                    }
                });
            }, 10);
            
            window.addEventListener('scroll', handleScroll);
        },

        // Add hover effects to cards and team members
        initHoverEffects: function() {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                card.addEventListener('mouseenter', () => {
                    card.style.transform = 'translateY(-12px) scale(1.02)';
                });
                
                card.addEventListener('mouseleave', () => {
                    card.style.transform = 'translateY(0) scale(1)';
                });
            });

            const members = document.querySelectorAll('.member');
            members.forEach(member => {
                const avatar = member.querySelector('.avatar');
                
                member.addEventListener('mouseenter', () => {
                    member.style.transform = 'translateY(-12px)';
                    if (avatar) {
                        avatar.style.transform = 'scale(1.1)';
                        avatar.style.boxShadow = '0 0 30px rgba(255, 255, 255, 0.3)';
                    }
                });
                
                member.addEventListener('mouseleave', () => {
                    member.style.transform = 'translateY(0)';
                    if (avatar) {
                        avatar.style.transform = 'scale(1)';
                        avatar.style.boxShadow = '';
                    }
                });
            });

            const stats = document.querySelectorAll('.stat');
            stats.forEach(stat => {
                stat.addEventListener('mouseenter', () => {
                    stat.style.transform = 'translateY(-8px) scale(1.05)';
                });
                
                stat.addEventListener('mouseleave', () => {
                    stat.style.transform = 'translateY(0) scale(1)';
                });
            });
        },

        // Add ripple effect for button clicks
        createRippleEffect: function() {
            if (document.getElementById('aboutus-ripple-styles')) return;
            
            const style = document.createElement('style');
            style.id = 'aboutus-ripple-styles';
            style.textContent = `
                .btn-primary {
                    position: relative;
                    overflow: hidden;
                }
                
                .ripple {
                    position: absolute;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    transform: scale(0);
                    animation: aboutus-ripple-animation 0.6s linear;
                    pointer-events: none;
                }
                
                @keyframes aboutus-ripple-animation {
                    to {
                        transform: scale(2);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        },

        // Initialize smooth scrolling for internal links
        initSmoothScrolling: function() {
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                });
            });
        },

        // Performance monitoring and error handling
        initErrorHandling: function() {
            window.addEventListener('error', (e) => {
                console.error('AboutUs JavaScript error:', e.error);
            });

            if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                document.documentElement.style.setProperty('--animation-duration', '0s');
                return false;
            }
            return true;
        },

        // Main initialization function
        init: function() {
            if (this.initialized) {
                console.warn('AboutUs: Already initialized');
                return;
            }

            try {
                const animationsEnabled = this.initErrorHandling();
                
                if (animationsEnabled) {
                    this.initScrollAnimations();
                    this.createParticles();
                    this.addMagneticEffect();
                    this.initStatsObserver();
                    this.initParallaxEffect();
                    this.initHoverEffects();
                    this.createRippleEffect();
                }
                
                this.initSmoothScrolling();
                this.initialized = true;
                
                console.log('AboutUs: Page initialized successfully');
            } catch (error) {
                console.error('AboutUs: Error initializing page:', error);
            }
        }
    };

    // Wait for DOM and potential header-footer script to load
    function safeInit() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                setTimeout(() => AboutUsPage.init(), 100);
            });
        } else {
            setTimeout(() => AboutUsPage.init(), 100);
        }
    }

    // Initialize with delay to avoid conflicts
    safeInit();

    // Window load event for additional initialization
    window.addEventListener('load', () => {
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.style.opacity = '1';
            pageHeader.style.transform = 'translateY(0)';
        }
    });

    // Handle window resize
    window.addEventListener('resize', AboutUsPage.debounce(() => {
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
        });
    }, 250));

})();