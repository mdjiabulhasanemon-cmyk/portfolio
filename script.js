// Initialize AOS (Animate On Scroll)
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Scroll to Top Button
const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        scrollTopBtn.classList.add('active');
    } else {
        scrollTopBtn.classList.remove('active');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form Submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // Show success message
    const contactForm = document.getElementById('contactForm');
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    
    successDiv.innerHTML = `
        <div class="success-content">
            <div class="success-icon">
                <i class="fas fa-star-and-crescent"></i>
            </div>
            <div class="success-header">
                <h3>JAZAK ALLAH KHAIR!</h3>
            </div>
            <div class="message-container">
                <div class="islamic-border top"></div>
                <p class="success-message">Your message has been sent successfully.<br>In sha Allah, I will get back to you soon!</p>
                <p class="sender-name">${name}</p>
                <div class="islamic-border bottom"></div>
            </div>
        </div>
    `;
    
    // Insert success message before the submit button
    const submitButton = document.querySelector('.submit-btn');
    submitButton.parentNode.insertBefore(successDiv, submitButton);
    
    // Clear form
    this.reset();
    
    // Remove success message after 4 seconds
    setTimeout(() => {
        successDiv.classList.add('fade-out');
        setTimeout(() => {
            successDiv.remove();
        }, 1000);
    }, 5000);
});

// Glitch Text Effect
const glitchText = document.querySelector('.glitch-text');
let glitchInterval;

const startGlitch = () => {
    const originalText = glitchText.textContent;
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    
    let iteration = 0;
    
    clearInterval(glitchInterval);
    
    glitchInterval = setInterval(() => {
        glitchText.textContent = originalText
            .split('')
            .map((letter, index) => {
                if (index < iteration) {
                    return originalText[index];
                }
                return glitchChars[Math.floor(Math.random() * glitchChars.length)];
            })
            .join('');
        
        if (iteration >= originalText.length) {
            clearInterval(glitchInterval);
        }
        
        iteration += 1/3;
    }, 30);
};

// Trigger glitch effect on hover
glitchText.addEventListener('mouseover', startGlitch);

// Initial animations
document.addEventListener('DOMContentLoaded', () => {
    // Trigger initial glitch effect
    setTimeout(startGlitch, 1000);
    
    // Add fade-in effect to hero content
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease-in-out';
        heroContent.style.opacity = '1';
    }, 300);
});
