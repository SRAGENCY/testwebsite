// Rouge Studio - Luxury Hair & Beauty
// Custom JavaScript - 2025 Edition

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// DOM Elements
const loader = document.querySelector('.loader');
const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navLinksArray = document.querySelectorAll('.nav-link');
const serviceCards = document.querySelectorAll('.service-card');
const galleryItems = document.querySelectorAll('.gallery-item');
const filterBtns = document.querySelectorAll('.filter-btn');
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
const testimonialDots = document.querySelectorAll('.dot');
const backToTopBtn = document.getElementById('back-to-top');
const cursorFollow = document.querySelector('.cursor-follow');
const counters = document.querySelectorAll('.counter');
const forms = document.querySelectorAll('form');

// Page Load
window.addEventListener('load', () => {
    // Hide loader
    setTimeout(() => {
        loader.classList.add('hidden');
        // Enable scrolling
        document.body.style.overflow = 'auto';
        // Run animations
        initAnimations();
    }, 1500);
});

// Prevent scrolling during load
document.body.style.overflow = 'hidden';

// Initialize animations
function initAnimations() {
    // Hero animations
    const heroTimeline = gsap.timeline();
   
    heroTimeline
        .from('.hero-bg', {
            scale: 1.5,
            duration: 2,
            ease: 'power2.out'
        })
        .from('.hero h1 .line:first-child', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=1.5')
        .from('.hero h1 .line:last-child', {
            y: 100,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6')
        .from('.hero-tagline', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.4')
        .from('.hero-btns', {
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.2')
        .from('.scroll-indicator', {
            opacity: 0,
            duration: 1,
            ease: 'power2.out'
        }, '-=0.4');
   
    // Reveal section titles on scroll
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                once: true
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
       
        gsap.from(title.nextElementSibling, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                once: true
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: 0.2,
            ease: 'power3.out'
        });
    });
   
    // Reveal images on scroll
    const revealImages = document.querySelectorAll('.reveal-image');
    revealImages.forEach(image => {
        ScrollTrigger.create({
            trigger: image,
            start: 'top 70%',
            onEnter: () => image.classList.add('revealed'),
            once: true
        });
    });
   
    // Stats counter animation
    const statsSection = document.querySelector('.stats-container');
    ScrollTrigger.create({
        trigger: statsSection,
        start: 'top 80%',
        onEnter: () => {
            counters.forEach(counter => animateCounter(counter));
        },
        once: true
    });
   
    // Service cards stagger
    gsap.from(serviceCards, {
        scrollTrigger: {
            trigger: '.services-grid',
            start: 'top 70%',
            once: true
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });
   
    // Gallery items stagger
    gsap.from(galleryItems, {
        scrollTrigger: {
            trigger: '.gallery-grid',
            start: 'top 70%',
            once: true
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
    });
   
    // Team members stagger
    gsap.from('.team-member', {
        scrollTrigger: {
            trigger: '.team-grid',
            start: 'top 70%',
            once: true
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power3.out'
    });
}

// Custom cursor
document.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
   
    gsap.to(cursorFollow, {
        x: posX,
        y: posY,
        scale: 1,
        opacity: 0.3,
        ease: 'power2.out',
        duration: 0.1
    });
});

document.addEventListener('mouseenter', () => {
    gsap.to(cursorFollow, {
        scale: 1,
        opacity: 0.3,
        duration: 0.3
    });
});

document.addEventListener('mouseleave', () => {
    gsap.to(cursorFollow, {
        scale: 0,
        opacity: 0,
        duration: 0.3
    });
});

// Interactive elements cursor effect
const interactiveElements = document.querySelectorAll('a, button, .service-card, .gallery-item, .team-member');

interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        gsap.to(cursorFollow, {
            scale: 1.5,
            opacity: 0.4,
            backgroundColor: '#f60303',
            duration: 0.3
        });
    });
   
    element.addEventListener('mouseleave', () => {
        gsap.to(cursorFollow, {
            scale: 1,
            opacity: 0.3,
            backgroundColor: '#e12929',
            duration: 0.3
        });
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        backToTopBtn.classList.add('visible');
    } else {
        navbar.classList.remove('scrolled');
        backToTopBtn.classList.remove('visible');
    }
});

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile nav when clicking a link
navLinksArray.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
       
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
       
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight;
           
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link on scroll
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
   
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop - navbar.offsetHeight - 20;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
       
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
});

// Gallery filter
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
       
        const filter = btn.dataset.filter;
       
        // Filter gallery items
        galleryItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                gsap.to(item, {
                    opacity: 1,
                    scale: 1,
                    duration: 0.4,
                    ease: 'power2.out',
                    clearProps: 'visibility'
                });
                item.style.display = 'block';
            } else {
                gsap.to(item, {
                    opacity: 0,
                    scale: 0.8,
                    duration: 0.4,
                    ease: 'power2.out',
                    onComplete: () => {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
});

// Testimonial carousel
let currentSlide = 0;
const testimonialInterval = setInterval(nextTestimonial, 5000);

function showTestimonial(index) {
    testimonialSlides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
   
    testimonialDots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

function nextTestimonial() {
    currentSlide = (currentSlide + 1) % testimonialSlides.length;
    showTestimonial(currentSlide);
}

testimonialDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(testimonialInterval);
        currentSlide = index;
        showTestimonial(currentSlide);
    });
});

// Back to top button
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Counter animation
function animateCounter(counter) {
    const target = +counter.dataset.target;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
   
    let current = 0;
   
    const updateCounter = () => {
        current += increment;
       
        if (current > target) {
            current = target;
        }
       
        counter.textContent = Math.floor(current);
       
        if (current < target) {
            requestAnimationFrame(updateCounter);
        }
    };
   
    updateCounter();
}

// Form submissions
forms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
       
        // Add loading state
        const submitBtn = form.querySelector('[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Processing...';
        submitBtn.disabled = true;
       
        // Simulate form submission
        setTimeout(() => {
            form.reset();
            submitBtn.textContent = 'Success!';
           
            // Show success message
            const formWrapper = form.parentElement;
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'Thank you! Your submission has been received.';
            successMessage.style.color = '#ffffff';
            successMessage.style.backgroundColor = 'rgba(184, 43, 43, 0.8)';
            successMessage.style.padding = '1.5rem';
            successMessage.style.borderRadius = '4px';
            successMessage.style.marginTop = '2rem';
            successMessage.style.textAlign = 'center';
           
            formWrapper.appendChild(successMessage);
           
            // Reset button after delay
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
               
                // Remove success message
                setTimeout(() => {
                    formWrapper.removeChild(successMessage);
                }, 3000);
            }, 2000);
        }, 1500);
    });
});

// Initialize parallax effects
const parallaxElements = document.querySelectorAll('.hero-bg');
window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
   
    parallaxElements.forEach(element => {
        const offsetX = (mouseX - 0.5) * 30;
        const offsetY = (mouseY - 0.5) * 30;
       
        gsap.to(element, {
            x: offsetX,
            y: offsetY,
            duration: 1,
            ease: 'power2.out'
        });
    });
});

// Service cards hover effect enhancement
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            boxShadow: '0 15px 30px rgba(0, 0, 0, 0.2)',
            duration: 0.3
        });
    });
   
    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
            duration: 0.3
        });
    });
});

// Text splitting for hero heading
const splitHeadings = document.querySelectorAll('.split-text .line');
splitHeadings.forEach(heading => {
    const text = heading.textContent;
    heading.textContent = '';
   
    for (let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i] === ' ' ? ' ' : text[i];
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(50px)';
        span.style.opacity = '0';
        heading.appendChild(span);
       
        gsap.to(span, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            delay: 1.2 + (i * 0.03),
            ease: 'power3.out'
        });
    }
});