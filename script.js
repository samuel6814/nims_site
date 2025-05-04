
// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navContainer = document.querySelector('.nav-container');
    const navItems = document.querySelectorAll('.nav-item');
    
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
        if (navContainer.classList.contains('mobile-menu-active')) {
            navContainer.classList.remove('mobile-menu-active');
            // Reset the hamburger icon
            mobileToggle.querySelectorAll('span').forEach(span => {
                span.style.transform = '';
            });
        } else {
            navContainer.classList.add('mobile-menu-active');
            // Animate to X icon
            mobileToggle.querySelectorAll('span')[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            mobileToggle.querySelectorAll('span')[1].style.opacity = '0';
            mobileToggle.querySelectorAll('span')[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
        }
    });
    
    // Handle mobile submenu toggles
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            // Only apply this in mobile view
            if (window.innerWidth <= 768) {
                // If clicking on the main nav item and not a child link
                if (e.target === item.querySelector('a') || e.target === item) {
                    e.preventDefault();
                    
                    // Close other open dropdowns
                    navItems.forEach(otherItem => {
                        if (otherItem !== item) {
                            otherItem.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    item.classList.toggle('active');
                }
            }
        });
    });
    
    // Close mobile menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            navContainer.classList.remove('mobile-menu-active');
            // Reset all mobile-specific states
            navItems.forEach(item => {
                item.classList.remove('active');
            });
            // Reset the hamburger icon
            mobileToggle.querySelectorAll('span').forEach(span => {
                span.style.transform = '';
                span.style.opacity = '1';
            });
        }
    });
});
