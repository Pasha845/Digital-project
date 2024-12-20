const heroSwiper = new Swiper('.hero__slider', {
  navigation: {
    nextEl: ".hero__next",
    prevEl: ".hero__prev",
    disabledClass: "hero__dis"
  },
  pagination: {
    el: '.hero__fraction',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      const currentFormatted = String(current).padStart(2, '0');
      const totalFormatted = String(total).padStart(2, '0');
      return `
        ${currentFormatted}
          <svg class="hero__arrow" width="34" height="33" viewBox="0 0 34 33" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-1" x2="43.8219" y2="-1" transform="matrix(-0.706805 0.707408 -0.706805 -0.707408 31.9285 0)" stroke="#E0E0E0" stroke-width="2"/>
          </svg>
        ${totalFormatted}`;
    }
  },
  scrollbar: {
    hide: true
  }
});

heroSwiper.on('slideChange', function () {
  heroSwiper.pagination.update();
});
