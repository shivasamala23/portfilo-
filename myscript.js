// Header toggle //
const menuButton = document.getElementById('Menubtn');
menuButton.addEventListener('click', function() {
document.querySelector('body').classList.toggle('mobile-nav-active');


});

// Typing effect

let typed = new Typed('.auto-input', {
    strings: ['Web Developer.!', 'Full-stack Developer.!', 'Freelancer!'],
    typeSpeed: 100,
    backSpeed: 150,
    backDelay: 2000,
    loop: true,
  });
