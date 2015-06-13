'use strict';

$(function() {
	window.onscroll = scroll;

	function scroll() {
		var parallax = document.getElementsByClassName('header')[0];
		var parallax_image = document.getElementsByClassName('logo')[0];

		if (window.pageYOffset < (parallax.clientHeight )) {
				parallax_image.style.transform = 'translateY(-' + (window.pageYOffset / 2) + 'px)';
				parallax.style.backgroundPosition = '50% ' + (window.pageYOffset * 1.5) + 'px';
		}
	};
});