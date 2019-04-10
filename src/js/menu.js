document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger-button'),
		menu = document.querySelector('.menu'),
		menuClose = menu.querySelector('.menu__close');

	burger.addEventListener('click', e => {
		menu && !menu.classList.contains('menu_opened') && menu.classList.add('menu_opened');
	});

	menuClose.addEventListener('click', e => {
		menu && menu.classList.contains('menu_opened') && menu.classList.remove('menu_opened');
	});
});