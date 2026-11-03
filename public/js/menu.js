/*
  menu.js: behaviour for the site header (src/components/Header.astro). On small screens the hamburger toggles the
  menu list under the bar. Plain script, no dependencies, loaded deferred by src/layouts/Base.astro.
*/
(function () {
	'use strict';

	var header = document.querySelector('.pe-header');
	if (!header) return;
	var menu = header.querySelector('.pe-menu');
	var burger = header.querySelector('.pe-burger');
	if (!menu || !burger) return;

	function setOpen(open) {
		menu.classList.toggle('is-open', open);
		burger.setAttribute('aria-expanded', open ? 'true' : 'false');
		burger.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
	}
	burger.addEventListener('click', function (e) { e.preventDefault(); setOpen(!menu.classList.contains('is-open')); });
})();
