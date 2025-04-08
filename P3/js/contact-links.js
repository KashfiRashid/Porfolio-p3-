/**
 * Contact Links Functionality
 * Handles special behaviors for contact links including email opening in new tabs
 */

document.addEventListener('DOMContentLoaded', function() {
    // Handle email link clicks to open in new window/tab
    const emailLinks = document.querySelectorAll('.contact-link[data-email]');
    
    emailLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const emailAddress = this.getAttribute('data-email');
            if (emailAddress) {
                window.open('mailto:' + emailAddress, '_blank');
            }
            return false;
        });
    });

    // Optional: Add copy to clipboard functionality for email
    const copyableElements = document.querySelectorAll('.contact-link[data-copyable]');
    
    copyableElements.forEach(element => {
        element.addEventListener('click', function(e) {
            e.preventDefault();
            const textToCopy = this.getAttribute('data-copyable');
            
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    // Show success message
                    const originalText = this.innerHTML;
                    this.innerHTML = 'Copied!';
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 2000);
                }).catch(err => {
                    console.error('Failed to copy text: ', err);
                });
            }
            
            return false;
        });
    });
});