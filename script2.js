
    // Toggle Mobile Menu
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Dropdown Toggle for Mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    if (window.innerWidth <= 768) {
        dropdownToggles.forEach(toggle => {
            toggle.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('active');
            });
        });
    }

    // Program Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const programContents = document.querySelectorAll('.program-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabBtns.forEach(b => b.classList.remove('active'));
            programContents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked button and corresponding content
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href !== '#') {
                e.preventDefault();
                
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Responsive Adjustments
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            // Reset mobile menu if window is resized larger
            navLinks.classList.remove('active');
            
            // Remove click events from dropdown toggles
            dropdownToggles.forEach(toggle => {
                toggle.classList.remove('active');
            });
        }
    });
