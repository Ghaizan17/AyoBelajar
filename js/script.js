// animation

// navbar

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('bg-white' , 'shadow' , 'transition');
    } else {
        navbar.classList.remove('bg-white' , 'shadow' , 'transtion');
    }
});




