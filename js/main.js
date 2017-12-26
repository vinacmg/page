$(window).on('load', function(){
	/*
	setTimeout(function(){ //simulação
		$('.preloader').fadeOut(1000);
		$('body').removeClass('loading');
	}, 2000);
	*/
	$('.preloader').fadeOut(1000);
	$('body').removeClass('loading');
	
});



$(document).ready(function(){
	
	$(window).scrollTop(0);

	var animatedNavBar = false;

	var animatedNavItem = [];

	/* usar com scroll nas seções, etc
	setTimeout(function(){
		$('div.mid').css({"background-color": "black"});
	}, 1000);
	*/
	
	$(window).scroll(function(){


		if(animatedNavBar) {
			if($(window).scrollTop() >= $('#navbar').outerHeight()){
				return;
			} else {
				for(var i = 0; i < $('#navbar li').length; i++) clearTimeout(animatedNavItem[i]);

				animatedNavItem[0] = setTimeout(function(){
					$('#navbar li:nth-child(1)').css('top', '33%');
					
				}, 300);

				animatedNavItem[1] = setTimeout(function(){
					$('#navbar li:nth-child(2)').css('top', '33%');
					
				}, 500);

				animatedNavItem[2] = setTimeout(function(){
					$('#navbar li:nth-child(3)').css('top', '33%');

				}, 700);
					
				animatedNavItem[3] = setTimeout(function(){
					$('#navbar li:nth-child(4)').css('top', '33%');
					
				}, 900);

				animatedNavBar = false;
			}
			
		} else {
			if($(window).scrollTop() >= $('#navbar').outerHeight()){
				for(var i = 0; i < $('#navbar li').length; i++) clearTimeout(animatedNavItem[i]);

				animatedNavItem[0] = setTimeout(function(){
					$('#navbar li:nth-child(1)').css('top', '-16vh');
					
				}, 300);

				animatedNavItem[1] = setTimeout(function(){
					$('#navbar li:nth-child(2)').css('top', '-16vh');
					
				}, 500);

				animatedNavItem[2] = setTimeout(function(){
					$('#navbar li:nth-child(3)').css('top', '-16vh');
					
				}, 700);

				animatedNavItem[3] = setTimeout(function(){
					$('#navbar li:nth-child(4)').css('top', '-16vh');
					
				}, 900);

				animatedNavBar = true;
			} else {
				return;
			}
		}
			
	});
});
