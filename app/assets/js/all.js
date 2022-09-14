$(function() {
  console.log('Hello Bootstrap5');
});

$(document).ready(function () {
  $('.fa-search-sm').click(
    function (event) {
      $('.navOrigin').addClass('d-none');
      $('.searchHolder').removeClass('d-none');
    });

  $('.fa-angle-left-sm').click(
    function (event) {
      $('.searchHolder').addClass('d-none');
      $('.navOrigin').removeClass('d-none');
    });
});

var swiper = new Swiper(".iphoneSwiper", {
  loop: true,
  speed: 500,
  // autoplay: {
  //   delay: 3000,
  
  // },
  disableOnInteraction: false,
  centeredSlides: true,
  slidesPerView: 1,
  breakpoints: {
    768: {
      slidesPerView: 2.3
    },
    1200: {
      slidesPerView: 2.88
    },
    1400: {
      slidesPerView: 2.9
    }
  },
  spaceBetween: 24,
  effect: 'slide',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  grabCursor: true,
});