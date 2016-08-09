//importando jquery como dependencia
$(document).ready(function(){

	//setTimeout(function(){$(".pre-con").hide()},1100);
	


	//ao clicar em has-submenu
	$("li.has-submenu > a").click(function(){

		if(!$(this).parent().hasClass('clicked')){
			$('.link-ativo').removeClass('link-ativo');
			$('.clicked').removeClass('clicked');
			$(this).addClass('link-ativo');
			$(this).parent().addClass('clicked').css({'z-index':'0'});
		}else{
			$('.link-ativo').removeClass('link-ativo');
			$('.clicked').css({'z-index':'-10'}).removeClass('clicked');
		}

		return false;

	});

	var home 	= $("#home"),
	logoMenu 	= $("#logo-menu"),
	close 		= $("#close"),
	menu 		= $("#menu");

	var liNums = menu.find('li').length;
	
	function animarLi(id){

		var tempo = 750;
		window.setTimeout(function(){
			menu.find('li:nth-child(' + id + ')').addClass('show');
			console.log(tempo);
		},  tempo);	
		tempo += 50;

	}//

	function moverAnimarLi(id){
		var tempo = 970;
		window.setTimeout(function(){
			menu.find('li:nth-child(' + id + ')').addClass('remove');
		},  tempo);	
		tempo -= 50;
	}//	

	$("#icon-menu a").click(function(){	
		home.addClass('opened');

		//depois q o menu desaparecer
		window.setTimeout(function(){
			//espera 1 segundo aparecer a logo menu
			//logoMenu.css({'z-index':'60'});
			logoMenu.addClass('show');
			close.addClass('show');
			menu.addClass('show');
		}, 600);

		//animando cada li
		window.setTimeout(function(){
			menu.find("li:nth-child(1)").addClass('show');
		},  700);

		window.setTimeout(function(){
			menu.find("li:nth-child(2)").addClass('show');
		},  750);

		window.setTimeout(function(){
			menu.find("li:nth-child(3)").addClass('show');
		},  800);

		window.setTimeout(function(){
			menu.find("li:nth-child(4)").addClass('show');
		},  850);

		window.setTimeout(function(){
			menu.find("li:nth-child(5)").addClass('show');
		},  900);		

		window.setTimeout(function(){
			menu.find("li:nth-child(6)").addClass('show');
		},  950);									
		
		return false;
	});//onClick

	close.click(function(){

		$('.link-ativo').removeClass('link-ativo');
		$('.clicked').removeClass('clicked');

		window.setTimeout(function(){
			menu.find("li:nth-child(6)").removeClass('show');
		},  0);	

		window.setTimeout(function(){
			menu.find("li:nth-child(5)").removeClass('show');
		},  50);	

		window.setTimeout(function(){
			menu.find("li:nth-child(4)").removeClass('show');
		},  100);

		window.setTimeout(function(){
			menu.find("li:nth-child(3)").removeClass('show');
		},  150);	

		window.setTimeout(function(){
			menu.find("li:nth-child(2)").removeClass('show');
		},  200);	

		window.setTimeout(function(){
			menu.find("li:nth-child(1)").removeClass('show');
		},  250);										

		//depois q o menu desaparecer
		window.setTimeout(function(){
			//espera 1 segundo aparecer a logo menu
			logoMenu.removeClass('show');
			close.removeClass('show');
			menu.removeClass('show');
		}, 300);

		window.setTimeout(function(){
			home.removeClass('opened');
		}, 450);		

		return false;
	});


	//O Restaurante
	$('.owl-carousel').owlCarousel({
		autoPlay: true,
		navigation : false, // Show next and prev buttons
		loop: true,
		items: 1,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		transitionStyle : "fade"
	});

});//

jQuery(window).load(function () {

	//setTimeout(function(){

		$("#boxLogo").addClass('loaded');

	//}, 1000);

	//loader para o site
    //$("#loader").delay(1500).fadeOut("slow"); //retire o delay quando for copiar!
    //$(".wrap").fadeIn(450);
});