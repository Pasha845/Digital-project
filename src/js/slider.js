const heroSwiper = new Swiper('.hero__slider', {
  navigation: {
    nextEl: ".hero__next",
    prevEl: ".hero__prev",
    disabledClass: "hero__dis"
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  scrollbar: {
    hide: true
  }
});