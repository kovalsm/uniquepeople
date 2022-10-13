var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 20,
  centerslide: 'true',
  grabCursor: 'true',
  autoplay:{
    delay: 5000,
    disableOnInteraction:false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    0:{
      slidesPerView: 1,
    },
    520:{
      slidesPerView: 2,
    },
    950:{
      slidesPerView: 3,
    },
    1054:{
      slidesPerView:4,
    }
  }
});
