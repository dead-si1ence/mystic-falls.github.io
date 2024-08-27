document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel-container');
    const prevBtn = document.querySelector('.carousel-button.prev');
    const nextBtn = document.querySelector('.carousel-button.next');

    const slides = carousel.querySelectorAll('img');
    const slideWidth = 100 / 3; // Show 3 images at a time
    let currentIndex = 0;

    function showSlide(index) {
        if (index < 0) index = slides.length - 3;
        if (index >= 3) index = 0;
        carousel.style.transform = `translateX(-${index * slideWidth}%)`;
        currentIndex = index;
    }

    prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
    nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

    
    setInterval(() => showSlide(currentIndex + 1), 5000);

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });
        });
    });
});