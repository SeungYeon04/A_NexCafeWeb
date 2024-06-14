let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === slideIndex);
    });
}

function changeSlide(n) {
    showSlide(slideIndex + n);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);

    let touchstartX = 0;
    let touchendX = 0;

    const slider = document.querySelector('.slider');

    slider.addEventListener('touchstart', event => {
        touchstartX = event.changedTouches[0].screenX;
    });

    slider.addEventListener('touchend', event => {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    });

    function handleGesture() {
        if (touchendX < touchstartX) {
            changeSlide(1);
        }
        if (touchendX > touchstartX) {
            changeSlide(-1);
        }
    }
});

