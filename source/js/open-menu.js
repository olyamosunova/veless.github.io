var body = document.querySelector('body');
var openMenu = document.querySelector('.main-nav__toggle');
var menu = document.querySelector('.main-nav__list');

openMenu.addEventListener('click', function (){
  if (menu.classList.contains('main-nav__list--close')) {
    menu.classList.remove('main-nav__list--close');
    menu.classList.add('main-nav__list--show');
    openMenu.classList.add('main-nav__toggle--close');
  } else {
    menu.classList.remove('main-nav__list--show');
    menu.classList.add('main-nav__list--close');
    openMenu.classList.remove('main-nav__toggle--close');
  }
});
