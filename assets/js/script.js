const menu = document.querySelector('.mobile-menu'),
      nav = document.querySelector('.nav-list'),
      items = nav.querySelectorAll('li');

menu.addEventListener('click', () => {
  menu.classList.toggle('ativo');
  nav.classList.toggle('ativo');
  document.body.classList.toggle('overlay-ativo');

  items.forEach((el, i) => {
    el.style.animation = el.style.animation? '' : `navLinkFade 0.5s ease forwards ${i/7 + 0.3}s`;
  });
});

new Swiper('.card-wrapper', {

  loop: true,
  spaceBetween:30,

    autoplay:{
      delay:2000,
      disableOnInteraction:false,
      pauseOnMouseEnter: true,
  },

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',

  },
  //responsive breakpoints
  breakpoints:{
    0:{
      slidesPerView :1
    },
    768:{
      slidesPerView :2
    },
    1024:{
      slidesPerView :3
    },      
  }
});