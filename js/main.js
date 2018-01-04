$(window).on('load', function(){
	/*
	setTimeout(function(){ //simulação
		$('.preloader').fadeOut(1000);
		$('body').removeClass('loading');
	}, 4000);
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

	var booleans = {
		section1: false,
		section1text: false,
		section2: false,
		section2text: false
	};

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
	
	function showBitbyBit(father, delay, fade, showTrigger = true, textToShow) {
		var kids = father.children();

		if((father.offset().top - 35*vh) <= $(window).scrollTop() && !showTrigger){
			for(var i = 0; i < kids.length; i++) {
				$(kids[i]).delay(i*delay).show(fade);
			}
			booleans[textToShow] = true;
		}
	}

	function changeSecColor(section, colorbf, coloraft) {
		if(($(section).offset().top - 25*vh) <= $(window).scrollTop()){
			if(!booleans[section]){
				$(section).css('background-color', coloraft);
				booleans[section] = true;
			} 
			else return;
		} else {
			if(!booleans[section]) return;
			else {
				$(section).css('background-color', colorbf);
				booleans[section] = false;
			}
		}
	}
 
	$('#section1').children().hide();
	$('.section2-img-father').children().hide();

	$(window).scroll(function(){

		if($(window).scrollTop() === 0){
			$('#section1').children().hide();
			$('.section2-img-father').children().hide();
			booleans.section1text = false;
			booleans.section2text = false;
		}  

		animateNavBar();
		
		/*
		changeSecColor('#section1', 'black', '#262626');
		changeSecColor('#section2', '#262626', '#393939');
		*/

		showBitbyBit($('#section1'), 300, 1000, booleans.section1text, 'section1text');
		showBitbyBit($('.section2-img-father'), 300, 1000, booleans.section2text, 'section2text');

		
	});
		
});
