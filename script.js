var swiper = new Swiper(".mmySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    centeredSlides: true,
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,
    },

    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 5
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 5
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 5
        },
    }
});


// counter
let container = document.querySelector(".hei");
let counter = document.querySelectorAll(".counter-item .counter-num");
let start = false;
window.onscroll = function () {
    if (window.scrollY >= container.offsetTop) {
        if (!start) {
            counter.forEach((num) => startCount(num));
        }
        start = true
    }
};
function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 5000 / goal);
}