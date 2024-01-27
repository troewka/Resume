const hamburger = document.querySelector('.header__humburger'),
   menu = document.querySelector('.menu'),
   closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', function () {
   menu.classList.add('active')
});

closeMenu.addEventListener('click', function () {
   menu.classList.remove('active')
});

const percent = document.querySelectorAll('.skills__boost_percent'),
   scale = document.querySelectorAll('.skills__boost_scale-act');

percent.forEach((item, i) => {
   scale[i].style.width = item.innerHTML
});