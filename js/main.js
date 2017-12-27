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

$(window).on('resize', function(){
	/*
	setTimeout(function(){ //simulação
		$('.preloader').fadeOut(1000);
		$('body').removeClass('loading');
	}, 2000);
	*/
	vh = $(this).height()/100;
	
});

$(document).ready(function(){
	
	//$(window).scrollTop(0);

	var animatedNavBar = false;

	var animatedNavItem = [];

	var section1 = false;
	var section2 = false;

	var vh = $(window).height()/100;

	/* usar com scroll nas seções, etc
	setTimeout(function(){
		$('div.mid').css({"background-color": "black"});
	}, 1000);
	*/

	function animateNavBar() {

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
	}
	
	function showBitbyBit(father) {
		var kids = father.children();

		if((father.offset().top - 10*vh) <= $(window).scrollTop()){
			for(var i = 0; i < kids.length; i++) {
				$(kids[i]).delay(i*300).fadeIn(1000);
			}
		}
	}

	function hideChildren(father) {
		var kids = father.children();

		if((father.offset().top - 100*vh) > $(window).scrollTop()){
			for(var i = 0; i < kids.length; i++) {
				$(kids[i]).hide();
			}
		}
	}

	function animateSec1() {
		if(($('#section1').offset().top - 10*vh) <= $(window).scrollTop()){
			if(!section1){
				$('#section1').css('background-color', '#262626');
				section1 = true;
			} 
			else return;
		} else {
			if(!section1) return;
			else {
				$('#section1').css('background-color', 'black');
				section1 = false;
			}
		}
	}

	function animateSec2() {
		if(($('#section2').offset().top - 10*vh) <= $(window).scrollTop()){
			if(!section2){
				$('#section2').css('background-color', '#393939');
				section2 = true;
			} 
			else return;
		} else {
			if(!section1) return;
			else {
				$('#section2').css('background-color', '#262626');
				section2 = false;
			}
		}
	}
 
	hideChildren($('#section1'));

	$(window).scroll(function(){

		animateNavBar();

		animateSec1();
		animateSec2();


		showBitbyBit($('#section1'));

		
	});
		
});
