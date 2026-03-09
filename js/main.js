/**
 * GameVerse Main Logic
 * Handles 3D Tilt Effects for Game Cards
 */

document.addEventListener('DOMContentLoaded', () => {
    initTiltEffect();
    initScrollReveal();
});

function initTiltEffect() {
    const cards = document.querySelectorAll('.tilt-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
        card.addEventListener('mouseenter', handleMouseEnter);
    });
}

function handleMouseMove(e) {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    
    // Calculate mouse position relative to the card center
    // 0,0 is center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    // Rotation Multipliers (Max degrees)
    const multiplier = 20; 
    
    // RotateX is based on Y axis (moving mouse up/down tilts card vertically)
    // RotateY is based on X axis (moving mouse left/right tilts card horizontally)
    const rotateX = (y / (rect.height / 2)) * -multiplier; // Invert to follow mouse naturally
    const rotateY = (x / (rect.width / 2)) * multiplier;

    // Update Styles
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    
    // Dynamic Glow Effect (Optional)
    // card.style.boxShadow = `${-rotateY}px ${rotateX}px 20px rgba(163, 255, 18, 0.2)`;
}

function handleMouseLeave(e) {
    const card = e.currentTarget;
    
    // Reset transform
    card.style.transform = `perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)`;
    card.style.transition = 'transform 0.5s ease-out'; // Smooth return
}

function handleMouseEnter(e) {
    const card = e.currentTarget;
    // Remove transition during movement for instant response
    card.style.transition = 'none';
}

function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}
