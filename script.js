/* --- Mobile Hamburger Menu --- */
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const menuIcon = mobileMenu.querySelector('i');
const navLinks = document.querySelectorAll('#nav-list a');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    if (navList.classList.contains('active')) {
        menuIcon.classList.replace('fa-bars', 'fa-times');
    } else {
        menuIcon.classList.replace('fa-times', 'fa-bars');
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuIcon.classList.replace('fa-times', 'fa-bars');
    });
});

/* --- Dark Mode Toggle --- */
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = themeToggleBtn.querySelector('i');
const body = document.body;

// Check if user has a saved preference
if(localStorage.getItem('dark-mode') === 'enabled') {
    body.classList.add('dark-mode');
    themeIcon.classList.replace('fa-moon', 'fa-sun');
}

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    } else {
        localStorage.setItem('dark-mode', 'disabled');
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    }
});

/* --- Interactive Menu Filtering --- */
const filterButtons = document.querySelectorAll('.filter-btn');
const menuItems = document.querySelectorAll('.menu-list-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        // Loop through all menu cards
        menuItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
            }
        });
    });
});
