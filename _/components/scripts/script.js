//importando jquery como dependencia
$(document).ready(function(){
	
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
			logoMenu.css({'display':'block'}).addClass('show');
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
			logoMenu.removeClass('show').css({'display':'none'});
			close.removeClass('show');
			menu.removeClass('show');
		}, 300);

		window.setTimeout(function(){
			home.removeClass('opened');
		}, 450);		

		return false;
	});

});//
