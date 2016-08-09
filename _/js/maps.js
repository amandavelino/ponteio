var map;
		//Instanciaremos ele mais tarde, que serÃ¡ o nosso google.maps.DirectionsRenderer
		var directionsDisplay; 
		var directionsService 	= new google.maps.DirectionsService();
		var info 				= new google.maps.InfoWindow({maxWidth: 350});

		var marker 				= new google.maps.Marker({

			title: 				'Reserve Hotel',
			icon: 				'imgs/icon-mapa.png',
			position: 			new google.maps.LatLng('-7.848020', '-35.757736') // -7.848020, -35.757736

		});		
		 
		function initialize() {

				directionsDisplay = new google.maps.DirectionsRenderer(); // Instanciando...
				var latlng = new google.maps.LatLng('-7.848020', '-35.757736');

				var options = {

					zoom: 16,
					center: marker.position,
					mapTypeId: google.maps.MapTypeId.ROADMAP

				};

				map = new google.maps.Map(document.getElementById("mapa"), options);

				marker.setMap(map);
					
				google.maps.event.addListener(marker, 'click', function() {
					info.setContent('<p class="maps"><strong>Reserve Hotel</strong> <br> Avenida Senador Paulo Guerra, 247<br> Santo AntÃ´nio - Surubim - PE<br> CEP: 55750-000</p>');
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