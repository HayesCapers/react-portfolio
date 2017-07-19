
$(document).ready(()=>{

	// var htmlBars = ''
	// for (let i = 0; i < 100; i++){
	// 	var randomWidth = Math.floor(Math.random() * 300 + 200);
	// 	var randomHeight = Math.floor(Math.random() * 15 + 5);
	// 	htmlBars += `<div class='bar' id='bar-${i}' style='width: ${randomWidth}px; height: ${randomHeight}px;'></div>`
	// }
	// $('.background-wrapper').html(htmlBars);


	$('.profile-wrapper').hover(function() {
		$('profile-wrapper').on('mousemove', function(event){
			console.log(event)
		})
		console.log('things are happening')
		// $('.layer1').removeClass('animate-profile');
		// $('.layer1').addClass('layer');
		var scene = $('#scene').get(0);
		var parallax = new Parallax(scene, {
			relativeInput: true,
			clipRelativeInput: true,
			// hoverOnly: true,
			inputElement: $('scene'),
			scalarX: 10,
			scalarY: 10,
			frictionX: 1,
			frictionY: 0,
			originX: 1,
			originY: .5,
		});
	}, function(){
		// console.log('off')
		// $('.layer1').removeClass('layer');
		// $('.layer1').addClass('animate-profile')
		// $('.layer1').css("transform", "translate3d(0px, 0px, 0px)", "transition", "5s");
		// $('.layer1').removeAttr('style');
	});

	$('#contact-nav-wrapper').hover(()=>{
		// $('#contact-nav-wrapper').toggleClass('underline-element');
		// $('#c-power').toggleClass('underline-element');
		$('#roje-power').toggleClass('hide-element');
		$('#ts-power').toggleClass('hide-element');
		$('#about-nav').toggleClass('hide-element');
	});

	$('#about-nav-wrapper').hover(()=>{
		$('#ont-power').toggleClass('hide-element');
		$('#ct-power').toggleClass('hide-element');
		$('#roje-power').toggleClass('hide-element');
		$('#c-power').toggleClass('hide-element');
		$('#ts-power').toggleClass('hide-element');
	});

	$('#project-nav-wrapper').hover(()=>{
		$('#ont-power').toggleClass('hide-element');
		$('#ct-power').toggleClass('hide-element');
		$('#a-power').toggleClass('hide-element');
		$('#about-nav').toggleClass('hide-element');
	});
	

	// var scene = $('#scene').get(0);
	// var parallax = new Parallax(scene, {
	// 	relativeInput: true,
	// 	hoverOnly: true,
	// 	inputElement: $('scene'),
	// 	scalarX: 10,
	// 	scalarY: 6,
	// 	frictionX: .5,
	// 	frictionY: .5,
	// });

});







// 