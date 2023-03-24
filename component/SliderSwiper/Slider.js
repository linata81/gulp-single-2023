// npm install swiper

//если простой слайдер
// import Swiper from 'swiper';
// const swiper = new Swiper();

//если слайдер с пагинацией и навигацией
import Swiper, { Navigation, Pagination } from 'swiper';

//слайдер
(() => {
  const swiper = new Swiper('.mySwiper', {
    modules: [Navigation, Pagination],
    // slidesPerView: 2,
    // spaceBetween: 10,
    // speed: 400,
    // direction: 'vertical',
    loop: true,
    pagination: {
      el: ".swiper-pagination"
    },
    navigation: {
      nextEl: ".swiper__btn-next",
      prevEl: ".swiper__btn-prev"
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 3,
      }
    }
  });
})();
