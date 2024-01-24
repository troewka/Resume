const hamburger = document.querySelector('.header__humburger'),
   menu = document.querySelector('.menu'),
   closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', function () {
   menu.classList.add('active')
});

closeMenu.addEventListener('click', function () {
   menu.classList.remove('active')
});
