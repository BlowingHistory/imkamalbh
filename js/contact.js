export function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Here you would typically handle form submission
        // For now, we'll just show an alert
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}