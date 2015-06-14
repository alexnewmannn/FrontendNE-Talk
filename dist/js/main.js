'use strict';

$(function() {
	window.onscroll = scroll;
	var header = document.getElementsByClassName('header')[0];
	var isHeaderVisible = false;

	function scroll() {
		var logo = document.getElementsByClassName('logo')[0];
		var author = document.getElementsByTagName('h2')[0];
		var title = document.getElementsByTagName('h1')[0];


		if (window.pageYOffset < header.clientHeight) {
			logo.style.transform = 'translateY(-' + (window.pageYOffset / 2) + 'px)';
		}

		if (window.pageYOffset < 90) {
			author.style.transform = 'translateY(' + (window.pageYOffset * 0.7) + 'px)';
			title.style.transform = 'translateY(' + (window.pageYOffset * 0.7) + 'px)';

			if (parseFloat(getComputedStyle(author).opacity) > -0.1) {
				author.style.opacity = (1 - window.pageYOffset / 70).toFixed(1);
			}
		}

		if (window.pageYOffset >= header.clientHeight && !isHeaderVisible) {
			stickyHeader('show');
		} else if (window.pageYOffset <= header.clientHeight && isHeaderVisible) {
			stickyHeader('hide');
		}
	}

	function stickyHeader(state) {
		var sticky = document.getElementsByClassName('sticky')[0];
		isHeaderVisible = !isHeaderVisible;

		if (state === 'show') {
			sticky.classList.add('show');
		} else {
			sticky.classList.remove('show');
		}
	}
});
