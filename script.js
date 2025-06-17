// DOM Elements
const themeToggle = document.getElementById('themeToggle');
const languageToggle = document.getElementById('languageToggle');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.querySelector('.nav-menu');
const body = document.body;

// Theme Management
let currentTheme = localStorage.getItem('theme') || 'light';
let currentLanguage = localStorage.getItem('language') || 'tr';

// Initialize theme and language
function initializeApp() {
    setTheme(currentTheme);
    setLanguage(currentLanguage);
    setupEventListeners();
    setupSmoothScrolling();
    setupScrollEffects();
}

// Theme toggle functionality
function setTheme(theme) {
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
        body.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        body.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

function toggleTheme() {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
}

// Language toggle functionality
function setLanguage(language) {
    currentLanguage = language;
    localStorage.setItem('language', language);
    
    const elements = document.querySelectorAll('[data-tr][data-en]');
    elements.forEach(element => {
        if (language === 'en') {
            element.textContent = element.getAttribute('data-en');
        } else {
            element.textContent = element.getAttribute('data-tr');
        }
    });
    
    // Update language toggle button
    const languageToggleSpan = languageToggle.querySelector('span');
    if (language === 'en') {
        languageToggleSpan.textContent = 'TR';
    } else {
        languageToggleSpan.textContent = 'EN';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = language;
}

function toggleLanguage() {
    const newLanguage = currentLanguage === 'tr' ? 'en' : 'tr';
    setLanguage(newLanguage);
}

// Mobile menu functionality
function toggleMobileMenu() {
    navMenu.classList.toggle('active');
    const icon = mobileMenuToggle.querySelector('i');
    if (navMenu.classList.contains('active')) {
        icon.className = 'fas fa-times';
    } else {
        icon.className = 'fas fa-bars';
    }
}

// Smooth scrolling for navigation links
function setupSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navMenu.classList.contains('active')) {
                    toggleMobileMenu();
                }
            }
        });
    });
}

// Scroll effects
function setupScrollEffects() {
    const header = document.querySelector('.header');
    const sections = document.querySelectorAll('section');
    
    // Header scroll effect
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            header.style.background = 'var(--nav-background)';
            header.style.boxShadow = '0 2px 20px var(--shadow-color)';
        } else {
            header.style.background = 'var(--nav-background)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Intersection Observer for animations
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
    
    // Observe sections for animation
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
}

// Event listeners setup
function setupEventListeners() {
    // Theme toggle
    themeToggle.addEventListener('click', toggleTheme);
    
    // Language toggle
    languageToggle.addEventListener('click', toggleLanguage);
    
    // Mobile menu toggle
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav') && navMenu.classList.contains('active')) {
            toggleMobileMenu();
        }
    });
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                toggleMobileMenu();
            }
        });
    });
}

// Typing animation for hero title
function setupTypingAnimation() {
    const nameElement = document.querySelector('.hero-title .name');
    if (nameElement && nameElement.textContent === '[İsminiz]') {
        const text = '[İsminiz]';
        let index = 0;
        
        function typeWriter() {
            if (index < text.length) {
                nameElement.textContent = text.substring(0, index + 1);
                index++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing animation after a delay
        setTimeout(typeWriter, 1000);
    }
}

// Skill tags animation
function setupSkillAnimation() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        tag.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, index * 100);
    });
}

// Project cards hover effects
function setupProjectEffects() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// Contact links hover effects
function setupContactEffects() {
    const contactLinks = document.querySelectorAll('.contact-link');
    
    contactLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'translateX(10px)';
        });
        
        link.addEventListener('mouseleave', () => {
            link.style.transform = 'translateX(0)';
        });
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeApp();
    setupTypingAnimation();
    setupSkillAnimation();
    setupProjectEffects();
    setupContactEffects();
});

// Add CSS for mobile menu
const mobileMenuCSS = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 100%;
            left: 0;
            right: 0;
            background: var(--nav-background);
            backdrop-filter: blur(10px);
            border-top: 1px solid var(--border-color);
            flex-direction: column;
            padding: 2rem;
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .nav-menu.active {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
        }
        
        .nav-menu li {
            margin: 1rem 0;
        }
        
        .nav-link {
            font-size: 1.2rem;
            padding: 0.5rem 0;
        }
    }
`;

// Inject mobile menu CSS
const style = document.createElement('style');
style.textContent = mobileMenuCSS;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add scroll to top functionality
function addScrollToTop() {
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollToTopBtn.className = 'scroll-to-top';
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: var(--primary-color);
        color: white;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 5px 15px rgba(61, 220, 132, 0.3);
    `;
    
    document.body.appendChild(scrollToTopBtn);
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.style.opacity = '1';
            scrollToTopBtn.style.visibility = 'visible';
        } else {
            scrollToTopBtn.style.opacity = '0';
            scrollToTopBtn.style.visibility = 'hidden';
        }
    });
    
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Initialize scroll to top
addScrollToTop(); 