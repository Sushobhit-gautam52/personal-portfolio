const swiper = new Swiper('.swiper', {

  autoplay: {

      delay:4000,
      disableOnInteraction: false,

  },

loop: true,
speed: 800,
effect: 'fade',


pagination: {
  el: '.swiper-pagination',
  clickable:'true',
},


scrollbar: {
  el: '.swiper-scrollbar',
},
});


