// Street Food Feedback Form JavaScript
class FeedbackForm {
    constructor() {
        this.form = document.getElementById('feedbackForm');
        this.successAlert = document.getElementById('successAlert');
        this.errorAlert = document.getElementById('errorAlert');
        this.errorText = document.getElementById('errorText');
        this.submitBtn = this.form.querySelector('.submit-btn');
        this.ratingText = document.getElementById('ratingText');
        
        this.ratingTexts = {
            1: 'Poor - We need to improve',
            2: 'Fair - Could be better',
            3: 'Good - Satisfied',
            4: 'Very Good - Impressed',
            5: 'Excellent - Amazing experience!'
        };
        
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initializeForm();
    }

    setupEventListeners() {
        // Form submission
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        
        // Rating system
        this.setupRatingSystem();
        
        // Input validation and styling
        this.setupInputValidation();
        
        // Real-time form feedback
        this.setupRealTimeFeedback();
    }

    initializeForm() {
        // Clear all form fields
        this.form.reset();
        this.hideAlerts();
        this.resetRating();
        this.updateSubmitButton(false);
    }

    setupRatingSystem() {
        const ratingInputs = document.querySelectorAll('input[name="rating"]');
        const ratingLabels = document.querySelectorAll('.rating label');

        ratingInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const value = e.target.value;
                this.updateRatingText(value);
                this.validateForm();
            });
        });

        ratingLabels.forEach(label => {
            label.addEventListener('mouseenter', (e) => {
                const value = e.target.getAttribute('data-value');
                this.previewRating(value);
            });
            
            label.addEventListener('mouseleave', () => {
                this.resetRatingPreview();
            });
        });
    }

    setupInputValidation() {
        const inputs = this.form.querySelectorAll('input[required], select[required]');
        
        inputs.forEach(input => {
            input.addEventListener('blur', (e) => this.validateField(e.target));
            input.addEventListener('input', (e) => {
                this.clearFieldError(e.target);
                this.validateForm();
            });
        });
    }

    setupRealTimeFeedback() {
        // Email validation
        const emailInput = document.getElementById('email');
        emailInput.addEventListener('input', (e) => {
            const email = e.target.value;
            if (email && !this.isValidEmail(email)) {
                this.showFieldError(e.target, 'Please enter a valid email address');
            }
        });

        // Phone validation and formatting
        const phoneInput = document.getElementById('phone');
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value;
            
            // Remove all non-digits except the + sign
            let phone = value.replace(/[^\d+]/g, '');
            
            // Remove + and country code if present to get clean digits
            let digits = phone.replace(/^\+?60?/, '');
            
            // Only format if we have digits
            if (digits.length > 0) {
                // Format Malaysian phone number: +60 XX-XXX XXXX
                let formatted = '+60 ';
                
                if (digits.length >= 1) {
                    formatted += digits.substring(0, 2);
                }
                if (digits.length >= 3) {
                    formatted += '-' + digits.substring(2, 5);
                }
                if (digits.length >= 6) {
                    formatted += ' ' + digits.substring(5, 9);
                }
                
                // Limit to Malaysian phone number length
                if (digits.length <= 10) {
                    e.target.value = formatted;
                } else {
                    // Prevent further input if too long
                    e.target.value = formatted.substring(0, 16); // +60 XX-XXX XXXX = 16 chars
                }
            } else if (value === '' || value === '+') {
                // Allow empty or just + sign
                e.target.value = value === '+' ? '+' : '';
            } else {
                // Clear invalid input
                e.target.value = '';
            }
        });

        // Handle backspace and deletion properly
        phoneInput.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace') {
                const cursorPos = e.target.selectionStart;
                const value = e.target.value;
                
                // If cursor is at a separator, move it back one more position
                if (cursorPos > 0 && ['-', ' '].includes(value[cursorPos - 1])) {
                    setTimeout(() => {
                        let newValue = e.target.value;
                        let digits = newValue.replace(/[^\d]/g, '');
                        
                        // Reformat the number
                        if (digits.length > 0) {
                            let formatted = '+60 ';
                            if (digits.length >= 1) formatted += digits.substring(0, 2);
                            if (digits.length >= 3) formatted += '-' + digits.substring(2, 5);
                            if (digits.length >= 6) formatted += ' ' + digits.substring(5, 9);
                            e.target.value = formatted;
                        } else {
                            e.target.value = '';
                        }
                    }, 0);
                }
            }
        });
    }

    updateRatingText(value) {
        this.ratingText.textContent = this.ratingTexts[value] || 'Please select a rating';
        this.ratingText.style.color = value ? '#ff6b6b' : '#666';
        this.ratingText.style.fontWeight = value ? '500' : 'normal';
    }

    previewRating(value) {
        this.ratingText.textContent = this.ratingTexts[value];
        this.ratingText.style.color = '#feca57';
    }

    resetRatingPreview() {
        const checkedRating = document.querySelector('input[name="rating"]:checked');
        if (checkedRating) {
            this.updateRatingText(checkedRating.value);
        } else {
            this.ratingText.textContent = 'Please select a rating';
            this.ratingText.style.color = '#666';
            this.ratingText.style.fontWeight = 'normal';
        }
    }

    resetRating() {
        this.ratingText.textContent = 'Please select a rating';
        this.ratingText.style.color = '#666';
        this.ratingText.style.fontWeight = 'normal';
    }

    validateField(field) {
        if (field.required && !field.value.trim()) {
            this.showFieldError(field, `${this.getFieldLabel(field)} is required`);
            return false;
        }

        if (field.type === 'email' && field.value && !this.isValidEmail(field.value)) {
            this.showFieldError(field, 'Please enter a valid email address');
            return false;
        }

        this.clearFieldError(field);
        return true;
    }

    validateForm() {
        const requiredFields = this.form.querySelectorAll('input[required], select[required]');
        const rating = document.querySelector('input[name="rating"]:checked');
        
        let isValid = true;

        // Check required fields
        requiredFields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        // Check rating
        if (!rating) {
            isValid = false;
        }

        this.updateSubmitButton(!isValid);
        return isValid;
    }

    showFieldError(field, message) {
        this.clearFieldError(field);
        
        field.style.borderColor = '#dc3545';
        field.style.backgroundColor = '#fff5f5';
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.style.cssText = `
            color: #dc3545;
            font-size: 0.85rem;
            margin-top: 5px;
            animation: slideDown 0.3s ease;
        `;
        errorDiv.textContent = message;
        
        field.parentNode.appendChild(errorDiv);
    }

    clearFieldError(field) {
        field.style.borderColor = '#e1e5e9';
        field.style.backgroundColor = '#fafbfc';
        
        const errorDiv = field.parentNode.querySelector('.field-error');
        if (errorDiv) {
            errorDiv.remove();
        }
    }

    getFieldLabel(field) {
        const label = field.parentNode.querySelector('label');
        return label ? label.textContent.replace('*', '').trim() : field.name;
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    updateSubmitButton(disabled) {
        this.submitBtn.disabled = disabled;
        this.submitBtn.style.opacity = disabled ? '0.6' : '1';
        this.submitBtn.style.cursor = disabled ? 'not-allowed' : 'pointer';
    }

    async handleSubmit(e) {
        e.preventDefault();
        
        if (!this.validateForm()) {
            this.showError('Please fill in all required fields correctly.');
            return;
        }

        this.showLoading(true);
        this.hideAlerts();

        try {
            const formData = this.getFormData();
            const success = await this.submitFeedback(formData);
            
            if (success) {
                this.showSuccess();
                this.resetForm();
            } else {
                this.showError('There was an error submitting your feedback. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            this.showError('Network error. Please check your connection and try again.');
        } finally {
            this.showLoading(false);
        }
    }

    getFormData() {
        const formData = new FormData(this.form);
        const data = {};
        
        // Get form values
        for (let [key, value] of formData.entries()) {
            if (data[key]) {
                // Handle multiple values (like checkboxes)
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        }

        // Add timestamp
        data.timestamp = new Date().toISOString();
        data.location_info = {
            userAgent: navigator.userAgent,
            language: navigator.language,
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
        };

        return data;
    }

    async submitFeedback(data) {
        // Simulate API call - Replace this with your actual API endpoint
        return new Promise((resolve) => {
            setTimeout(() => {
                // Log the data (in production, send to your server)
                console.log('Feedback submitted:', data);
                
                // Store in localStorage as backup (optional)
                try {
                    const existingFeedback = JSON.parse(localStorage.getItem('streetFoodFeedback') || '[]');
                    existingFeedback.push(data);
                    localStorage.setItem('streetFoodFeedback', JSON.stringify(existingFeedback));
                } catch (e) {
                    console.warn('Could not save to localStorage:', e);
                }
                
                // Simulate success (90% success rate for demo)
                resolve(Math.random() > 0.1);
            }, 1500);
        });

        /* 
        // Real API implementation example:
        try {
            const response = await fetch('https://your-api.com/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const result = await response.json();
            return result.success;
        } catch (error) {
            console.error('API Error:', error);
            return false;
        }
        */
    }

    showLoading(isLoading) {
        if (isLoading) {
            this.submitBtn.classList.add('loading');
            this.submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';
        } else {
            this.submitBtn.classList.remove('loading');
            this.submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Submit Feedback';
        }
    }

    showSuccess() {
        this.successAlert.style.display = 'flex';
        this.successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
            this.successAlert.style.display = 'none';
        }, 5000);
    }

    showError(message) {
        this.errorText.textContent = message;
        this.errorAlert.style.display = 'flex';
        this.errorAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Hide error message after 7 seconds
        setTimeout(() => {
            this.errorAlert.style.display = 'none';
        }, 7000);
    }

    hideAlerts() {
        this.successAlert.style.display = 'none';
        this.errorAlert.style.display = 'none';
    }

    resetForm() {
        this.form.reset();
        this.resetRating();
        this.updateSubmitButton(false);
        
        // Clear any field errors
        const errorDivs = this.form.querySelectorAll('.field-error');
        errorDivs.forEach(div => div.remove());
        
        // Reset field styles
        const inputs = this.form.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.style.borderColor = '#e1e5e9';
            input.style.backgroundColor = '#fafbfc';
        });

        // Animate form reset
        this.form.style.opacity = '0.5';
        setTimeout(() => {
            this.form.style.opacity = '1';
        }, 300);
    }

    // Utility method to get all feedback from localStorage
    getAllFeedback() {
        try {
            return JSON.parse(localStorage.getItem('streetFoodFeedback') || '[]');
        } catch (e) {
            console.warn('Could not retrieve feedback from localStorage:', e);
            return [];
        }
    }

    // Utility method to export feedback data
    exportFeedback() {
        const feedback = this.getAllFeedback();
        const dataStr = JSON.stringify(feedback, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `street-food-feedback-${new Date().toISOString().split('T')[0]}.json`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    }
}

// Enhanced form animations and interactions
class FormAnimations {
    constructor() {
        this.init();
    }

    init() {
        this.setupScrollAnimations();
        this.setupHoverEffects();
        this.setupFocusEffects();
    }

    setupScrollAnimations() {
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

        // Animate form groups on scroll
        const formGroups = document.querySelectorAll('.form-group');
        formGroups.forEach((group, index) => {
            group.style.opacity = '0';
            group.style.transform = 'translateY(20px)';
            group.style.transition = `all 0.6s ease ${index * 0.1}s`;
            observer.observe(group);
        });
    }

    setupHoverEffects() {
        // Add hover effects to checkboxes
        const checkboxLabels = document.querySelectorAll('.checkbox-label');
        checkboxLabels.forEach(label => {
            label.addEventListener('mouseenter', () => {
                label.style.transform = 'translateY(-2px) scale(1.02)';
            });
            
            label.addEventListener('mouseleave', () => {
                if (!label.querySelector('input').checked) {
                    label.style.transform = 'translateY(0) scale(1)';
                }
            });
        });
    }

    setupFocusEffects() {
        // Enhanced focus effects for inputs
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('focus', () => {
                input.parentNode.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', () => {
                input.parentNode.style.transform = 'scale(1)';
            });
        });
    }
}

// Accessibility enhancements
class AccessibilityEnhancements {
    constructor() {
        this.init();
    }

    init() {
        this.setupKeyboardNavigation();
        this.setupAriaLabels();
        this.setupFocusManagement();
    }

    setupKeyboardNavigation() {
        // Allow Enter key to submit rating
        const ratingLabels = document.querySelectorAll('.rating label');
        ratingLabels.forEach(label => {
            label.setAttribute('tabindex', '0');
            label.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    label.click();
                }
            });
        });

        // Arrow key navigation for rating
        document.addEventListener('keydown', (e) => {
            if (document.activeElement.closest('.rating')) {
                const currentIndex = Array.from(ratingLabels).indexOf(document.activeElement);
                let newIndex = currentIndex;

                if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    newIndex = Math.min(currentIndex + 1, ratingLabels.length - 1);
                } else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    newIndex = Math.max(currentIndex - 1, 0);
                }

                if (newIndex !== currentIndex) {
                    e.preventDefault();
                    ratingLabels[newIndex].focus();
                }
            }
        });
    }

    setupAriaLabels() {
        // Add aria-labels for better screen reader support
        const ratingContainer = document.querySelector('.rating');
        ratingContainer.setAttribute('role', 'radiogroup');
        ratingContainer.setAttribute('aria-label', 'Rate your experience from 1 to 5 stars');

        const ratingInputs = document.querySelectorAll('.rating input');
        ratingInputs.forEach((input, index) => {
            input.setAttribute('aria-label', `${5 - index} star${5 - index > 1 ? 's' : ''}`);
        });

        // Add live region for rating feedback
        const ratingText = document.getElementById('ratingText');
        ratingText.setAttribute('aria-live', 'polite');
    }

    setupFocusManagement() {
        // Ensure proper focus management for alerts
        const form = document.getElementById('feedbackForm');
        form.addEventListener('submit', (e) => {
            setTimeout(() => {
                const visibleAlert = document.querySelector('.alert[style*="flex"]');
                if (visibleAlert) {
                    visibleAlert.setAttribute('tabindex', '-1');
                    visibleAlert.focus();
                }
            }, 100);
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize main form functionality
    const feedbackForm = new FeedbackForm();
    
    // Initialize animations
    const animations = new FormAnimations();
    
    // Initialize accessibility features
    const accessibility = new AccessibilityEnhancements();
    
    // Add some fun Easter eggs
    let clickCount = 0;
    document.querySelector('.header-icon').addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            document.querySelector('.header').style.background = 'linear-gradient(135deg, #667eea, #764ba2)';
            setTimeout(() => {
                document.querySelector('.header').style.background = 'linear-gradient(135deg, #ff6b6b, #feca57)';
            }, 2000);
            clickCount = 0;
        }
    });

    // Console message for developers
    console.log(`
    🍜 Street Food Feedback Form Loaded Successfully! 🍜
    
    Features:
    ✨ Beautiful animations and transitions
    🎯 Form validation and real-time feedback  
    📱 Responsive design for all devices
    ♿ Accessibility enhancements
    💾 Local storage backup
    🚀 Simulated API submission
    
    To export all feedback data, run: feedbackForm.exportFeedback()
    To view all feedback: feedbackForm.getAllFeedback()
    `);
    
    // Make feedbackForm available globally for debugging
    window.feedbackForm = feedbackForm;
});