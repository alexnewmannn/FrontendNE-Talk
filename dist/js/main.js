'use strict';

$(function() {
	window.onscroll = scroll;

	function scroll() {
		var header = document.getElementsByClassName('header')[0];
		var headerBackground = document.getElementsByClassName('background')[0];
		var logo = document.getElementsByClassName('logo')[0];
		var author = document.getElementsByTagName('h2')[0];

		if (window.pageYOffset < (header.clientHeight )) {
			logo.style.transform = 'translateY(-' + (window.pageYOffset / 2) + 'px)';
			headerBackground.style.transform = 'translateY(' + (window.pageYOffset * 1.2) + 'px)';
			author.style.transform = 'translateY(' + (window.pageYOffset * 0.7) + 'px)';

		}
		if (window.pageYOffset < 70) {
			if (parseFloat(getComputedStyle(author).opacity) > -0.1) {
				author.style.opacity = (1 - window.pageYOffset / 70).toFixed(1);
			}
		}
	}
});