$('#1').click(function(){
	var cs1 = $('.Slide2');
	cs1.fadeOut(600).removeClass('active');
	var cs2 = $('.Slide3');
	
	cs2.fadeOut(600).removeClass('active');
	var cs = $('.Slide1');
	cs.fadeIn(600).addClass('active');

	
});
$('#2').click(function(){

	var cs = $('.Slide1');
	cs.fadeOut(600).removeClass('active');
	var cs2 = $('.Slide3');
	
	cs2.fadeOut(600).removeClass('active');
	var cs1 = $('.Slide2');
	
	cs1.fadeIn(600).addClass('active');
});

$('#3').click(function(){
		var cs = $('.Slide1');
	cs.fadeOut(600).removeClass('active');
	var cs1 = $('.Slide2');
	
	cs1.fadeOut(600).removeClass('active');
	var cs2 = $('.Slide3');
	
	cs2.fadeIn(600).addClass('active');
});


