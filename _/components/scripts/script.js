//importando jquery como dependencia
$(document).ready(function(){

	//depois de 1s remover o pre-con*
	setTimeout(function(){ 
		$(".pre-con").hide();
	}, 1000);

	//animacao logo internas
	setTimeout(function(){
		$("#boxLogo").addClass('loaded');
	}, 600);	

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
	
	function animarLi(){

		//depois q o menu desaparecer
		window.setTimeout(function(){
			//espera 1 segundo aparecer a logo menu
			//logoMenu.css({'z-index':'60'});
			logoMenu.addClass('show');
			close.addClass('show');
			menu.addClass('show');
		}, 900);

		//animando cada li
		window.setTimeout(function(){
			menu.find("li:nth-child(1)").addClass('show');
		},  1000);

		window.setTimeout(function(){
			menu.find("li:nth-child(2)").addClass('show');
		},  1050);

		window.setTimeout(function(){
			menu.find("li:nth-child(3)").addClass('show');
		},  1100);

		window.setTimeout(function(){
			menu.find("li:nth-child(4)").addClass('show');
		},  1150);

		window.setTimeout(function(){
			menu.find("li:nth-child(5)").addClass('show');
		},  1200);		

		window.setTimeout(function(){
			menu.find("li:nth-child(6)").addClass('show');
		},  1250);

	}//

	function moverAnimarLi(){

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

	}//	

	//menu home
	$("#home #icon-menu a").click(function(){	
		$("#logo-menu").css('display','block');
		$("#close").css('display','block');		
		home.addClass('opened');									
		animarLi();
		return false;
	});//onClick

	$("#home #close").click(function(){
		moverAnimarLi();
		window.setTimeout(function(){
			$("#logo-menu").css('display','none');
			$("#close").css('display','none');				
			home.removeClass('opened');
		}, 450);
		return false;
	});

	//menu internas
	$("#internas #icon-menu a").click(function(){
		$("#logo-menu").css('display','block');
		$("#close").css('display','block');
		$("#internas").addClass('opened');
		animarLi();									
		return false;
	});//onClick

	$("#internas #close").click(function(){
		moverAnimarLi();
		window.setTimeout(function(){
			$("#logo-menu").css('display','none');
			$("#close").css('display','none');			
			$("#internas").removeClass('opened');					
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
	//loader para o site
    //$("#loader").delay(1500).fadeOut("slow"); //retire o delay quando for copiar!
    //$(".wrap").fadeIn(450);
});