const swiper = new Swiper('.swiper', {
    // комментируем вертикальный слайдер тк нам нужен горизонтальный
    // direction: 'vertical',
    loop: true,
    // количество картинок на странице и расстояние между ними
    slidesPerView: 2,
    spaceBetween: 20,
    navigation: {
      nextEl: '.swiper-button-right',
      prevEl: '.swiper-button-left',
    },
  });