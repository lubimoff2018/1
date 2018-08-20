jQuery(document).ready(function($) {
	var menuBtn = $('.nav-btn')
	var menu = $('.nav')

	menuBtn.on('mousedown', function(event) {
		menu.toggleClass('nav-active');
	});
}); 