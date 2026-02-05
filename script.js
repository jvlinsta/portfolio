// ========================================
// Mobile Navigation
// ========================================

const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        mobileMenuBtn.classList.remove('active');
    });
});

// ========================================
// Navbar Background on Scroll
// ========================================

const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ========================================
// Smooth Scroll for Anchor Links
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ========================================
// Form Handling
// ========================================

// Form is handled by FormSubmit.co - no JavaScript needed
// Submissions are sent directly to your email

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for fade-in animation
document.querySelectorAll('.expertise-card, .service-card, .publication, .stat').forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});

// ========================================
// Add CSS for animations dynamically
// ========================================

const style = document.createElement('style');
style.textContent = `
    .fade-in {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-in.visible {
        opacity: 1;
        transform: translateY(0);
    }

    .nav-links.active {
        display: flex;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: white;
        padding: 1rem;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        gap: 0.5rem;
    }

    .nav-links.active a {
        padding: 0.75rem 1rem;
        display: block;
    }

    .mobile-menu-btn.active span:nth-child(1) {
        transform: rotate(45deg) translate(5px, 5px);
    }

    .mobile-menu-btn.active span:nth-child(2) {
        opacity: 0;
    }

    .mobile-menu-btn.active span:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -6px);
    }

    .navbar.scrolled {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
`;

document.head.appendChild(style);

// ========================================
// Typing Effect for Hero (Optional)
// ========================================

// You can enable this for a typing effect on keywords
/*
const keywords = ['Document AI', 'Agentic Systems', 'Generative AI'];
let keywordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');

function type() {
    if (!typingElement) return;

    const currentKeyword = keywords[keywordIndex];

    if (isDeleting) {
        typingElement.textContent = currentKeyword.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingElement.textContent = currentKeyword.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentKeyword.length) {
        isDeleting = true;
        setTimeout(type, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        keywordIndex = (keywordIndex + 1) % keywords.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? 50 : 100);
    }
}

type();
*/

console.log('Portfolio website loaded successfully!');
