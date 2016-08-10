var map;
		//Instanciaremos ele mais tarde, que serÃ¡ o nosso google.maps.DirectionsRenderer
		var directionsDisplay; 
		var directionsService 	= new google.maps.DirectionsService();
		var info 				= new google.maps.InfoWindow({maxWidth: 350});

		var marker 				= new google.maps.Marker({

			title: 				'O Ponteio',
			icon: 				'imgs/icon-mapa.png',
			position: 			new google.maps.LatLng('-8.131386', '-34.902825') // -8.131386, -34.902825

		});		
		 
		function initialize() {

				directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...
				var latlng = new google.maps.LatLng('-8.131386', '-34.902825');

				var options = {

					zoom: 16,
					center: marker.position,
					mapTypeId: google.maps.MapTypeId.ROADMAP,
					draggable: !("ontouchend" in document),
					styles: [{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}]

				};

				map = new google.maps.Map(document.getElementById("mapa"), options);

				marker.setMap(map);
					
				google.maps.event.addListener(marker, 'click', function() {
					info.setContent('<p class="maps"><strong>Restaurante O Ponteio</strong> <br> Rua Visconde de Jequitinhonha, 110-174<br> Boa Viagem, Recife - PE</p>');
					info.open(map, marker);
				}); 

			   directionsDisplay.setMap(map); // Relacionamos o directionsDisplay com o mapa desejado

		}
		 
		initialize();
		 
		$("#form-localizacao").submit(function(event) {

			event.preventDefault();

			if($("#txtEnderecoPartida").val() !== ""){

				info.close();
				marker.setMap(null);

				var enderecoPartida = $("#txtEnderecoPartida").val();

				var request = { // Novo objeto google.maps.DirectionsRequest, contendo:

					origin: enderecoPartida, // origem
					destination: marker.position, // destino
					travelMode: google.maps.TravelMode.DRIVING // meio de transporte, nesse caso, de carro

				};

				directionsService.route(request, function(result, status) {

					if (status == google.maps.DirectionsStatus.OK) { // Se deu tudo certo

						directionsDisplay.setDirections(result); // Renderizamos no mapa o resultado
						directionsDisplay.setMap(map);

					}

				});

			}
	
			return false;

		});