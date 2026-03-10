const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');
const menuIcon = mobileMenu.querySelector('i');
const navLinks = document.querySelectorAll('#nav-list a');

// Toggle menu when clicking the hamburger icon
mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
    
    // Switch icon between hamburger (bars) and close (times)
    if (navList.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-times');
    } else {
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    }
});

// Close the menu automatically when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuIcon.classList.remove('fa-times');
        menuIcon.classList.add('fa-bars');
    });
});