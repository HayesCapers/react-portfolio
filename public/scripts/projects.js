
$(document).ready(() => {

	$('.main-wrapper').hover(() => {

		$('#wnd-2').children('img').toggleClass('img-2-out');
		$('#wnd-3').children('img').toggleClass('img-3-out');
		$('#wnd-4').children('img').toggleClass('img-4-out');

		$('#wnd-2').children('img').toggleClass('img-2-in');
		$('#wnd-3').children('img').toggleClass('img-3-in');
		$('#wnd-4').children('img').toggleClass('img-4-in');

		$('.cls-1').toggleClass('draw');
		$('.demo-link').toggleClass('demo-draw');

	})

})