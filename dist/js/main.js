(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// 'use strict';

$(function() {
	var scroll = require('./scroll.js');
	console.log(scroll)
	window.onscroll = scroll;

});

},{"./scroll.js":2}],2:[function(require,module,exports){
'use strict';
var stickyHeader = require('./stickyheader.js');
var isHeaderVisible = false;

var scrollHeader = function() {
	console.log('hi');
	var header = document.getElementsByClassName('header')[0];
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
		isHeaderVisible = !isHeaderVisible;
		stickyHeader('show');
	} else if (window.pageYOffset <= header.clientHeight && isHeaderVisible) {
		isHeaderVisible = !isHeaderVisible;
		stickyHeader('hide');
	}
};

module.exports = scrollHeader;

},{"./stickyheader.js":3}],3:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9tYWluLmpzIiwianMvc2Nyb2xsLmpzIiwianMvc3RpY2t5aGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyAndXNlIHN0cmljdCc7XG5cbiQoZnVuY3Rpb24oKSB7XG5cdHZhciBzY3JvbGwgPSByZXF1aXJlKCcuL3Njcm9sbC5qcycpO1xuXHRjb25zb2xlLmxvZyhzY3JvbGwpXG5cdHdpbmRvdy5vbnNjcm9sbCA9IHNjcm9sbDtcblxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3RpY2t5SGVhZGVyID0gcmVxdWlyZSgnLi9zdGlja3loZWFkZXIuanMnKTtcbnZhciBpc0hlYWRlclZpc2libGUgPSBmYWxzZTtcblxudmFyIHNjcm9sbEhlYWRlciA9IGZ1bmN0aW9uKCkge1xuXHRjb25zb2xlLmxvZygnaGknKTtcblx0dmFyIGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hlYWRlcicpWzBdO1xuXHR2YXIgbG9nbyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2xvZ28nKVswXTtcblx0dmFyIGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoMicpWzBdO1xuXHR2YXIgdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaDEnKVswXTtcblxuXHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgaGVhZGVyLmNsaWVudEhlaWdodCkge1xuXHRcdGxvZ28uc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoLScgKyAod2luZG93LnBhZ2VZT2Zmc2V0IC8gMikgKyAncHgpJztcblx0fVxuXG5cdGlmICh3aW5kb3cucGFnZVlPZmZzZXQgPCA5MCkge1xuXHRcdGF1dGhvci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgKHdpbmRvdy5wYWdlWU9mZnNldCAqIDAuNykgKyAncHgpJztcblx0XHR0aXRsZS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWSgnICsgKHdpbmRvdy5wYWdlWU9mZnNldCAqIDAuNykgKyAncHgpJztcblxuXHRcdGlmIChwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoYXV0aG9yKS5vcGFjaXR5KSA+IC0wLjEpIHtcblx0XHRcdGF1dGhvci5zdHlsZS5vcGFjaXR5ID0gKDEgLSB3aW5kb3cucGFnZVlPZmZzZXQgLyA3MCkudG9GaXhlZCgxKTtcblx0XHR9XG5cdH1cblxuXHRpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID49IGhlYWRlci5jbGllbnRIZWlnaHQgJiYgIWlzSGVhZGVyVmlzaWJsZSkge1xuXHRcdGlzSGVhZGVyVmlzaWJsZSA9ICFpc0hlYWRlclZpc2libGU7XG5cdFx0c3RpY2t5SGVhZGVyKCdzaG93Jyk7XG5cdH0gZWxzZSBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDw9IGhlYWRlci5jbGllbnRIZWlnaHQgJiYgaXNIZWFkZXJWaXNpYmxlKSB7XG5cdFx0aXNIZWFkZXJWaXNpYmxlID0gIWlzSGVhZGVyVmlzaWJsZTtcblx0XHRzdGlja3lIZWFkZXIoJ2hpZGUnKTtcblx0fVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBzY3JvbGxIZWFkZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbiB2YXIgc3RpY2t5SGVhZGVyID0gZnVuY3Rpb24oc3RhdGUpIHtcblx0dmFyIHN0aWNreSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3N0aWNreScpWzBdO1xuXG5cblx0aWYgKHN0YXRlID09PSAnc2hvdycpIHtcblx0XHRzdGlja3kuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuXHR9IGVsc2Uge1xuXHRcdHN0aWNreS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG5cdH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gc3RpY2t5SGVhZGVyO1xuIl19
