// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add scroll reveal animations
window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.backdrop-blur-lg');
    
    reveals.forEach(reveal => {
        const windowHeight = window.innerHeight;
        const elementTop = reveal.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('opacity-100');
            reveal.classList.remove('opacity-0');
        }
    });
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.backdrop-blur-lg');
    reveals.forEach(reveal => {
        reveal.classList.add('transition-opacity', 'duration-1000', 'opacity-0');
    });
}); 