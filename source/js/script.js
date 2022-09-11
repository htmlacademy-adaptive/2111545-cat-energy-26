let navMain = document.querySelector('.navigation');
let navToggle = document.querySelector('.navigation__toggle');
let navjs = document.querySelector('.main-header__wrapper');

navjs.classList.remove('main-header__wrapper-nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }
});
