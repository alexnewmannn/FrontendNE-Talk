'use strict';

 var stickyHeader = function(state) {
	var sticky = document.getElementsByClassName('sticky')[0];


	if (state === 'show') {
		sticky.classList.add('show');
	} else {
		sticky.classList.remove('show');
	}
};

module.exports = stickyHeader;
