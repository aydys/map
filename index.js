var map,		
	layerStop,
	layerLimit,
	buttonOn = document.getElementById('button-on'),
	buttonLimit = document.getElementById('button-limit');

//
// Инициализация карты
DG.then(function () {
    map = DG.map('map', {
        center: [51.704, 94.42],
		zoom: 14,
		minZoom: 14,
		maxBounds: [[51.7090445244446, 94.40478801727295],[51.69607595578039, 94.43551540374756]]
	});

//
// Переменные

	var geojsonPath = {"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.40669775009155,51.706741433898145],[94.40662264823914,51.70165503254409],[94.43504333496094,51.704640453769066]]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.40650999546051,51.701668331070955],[94.40639734268188,51.696481609101966],[94.4176197052002,51.6974591521672],[94.4180381298065,51.69766529800871],[94.41818833351135,51.69799113952036],[94.41759824752808,51.7000392324421],[94.41868185997008,51.701136386947454],[94.41868185997008,51.70141565839206],[94.41705107688902,51.70696748290838],[94.40670847892761,51.705817280608166]]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.41705107688902,51.7069608344242],[94.42721128463745,51.70817749075718],[94.42843437194824,51.703975566315556]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.40656632184982,51.70166168180799]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4180381298065,51.69754560053763]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.43452835083008,51.70457396546341]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.40637588500977,51.706621760435475]}}]};
	var geojsonStop = {"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41914319992065,51.707200179239024]}},{"type": "Feature","properties": {"stroke": "#ff0000","stroke-width": 2,"stroke-opacity": 1},"geometry": {"type": "LineString","coordinates": [[94.4171154499054,51.7069608344242],[94.41916465759276,51.70720682768805]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4095355272293,51.706116468991645]}},{"type": "Feature","properties": {"stroke": "#ff0000","stroke-width": 2,"stroke-opacity": 1},"geometry": {"type": "LineString","coordinates": [[94.40953016281128,51.7061098203824],[94.40689086914062,51.70583390223693]]}},{"type": "Feature","properties": {"stroke": "#ffff00","stroke-width": 2,"stroke-opacity": 1},"geometry": {"type": "LineString","coordinates": [[94.41000491380692,51.69678085922171],[94.41788256168365,51.69747910180578]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41863358020782,51.70127269822504]}},{"type": "Feature","properties": {"stroke": "#ff0000","stroke-width": 2,"stroke-opacity": 1},"geometry": {"type": "LineString","coordinates": [[94.41867113113403,51.701251087927936],[94.41865235567093,51.70107321816739],[94.41779673099518,51.700328484848505],[94.41759824752808,51.700012634426855]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.40999686717987,51.69677587173593]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42408114671706,51.70777194228195]}},{"type": "Feature","properties": {"stroke": "#ff0000","stroke-width": 2,"stroke-opacity": 1},"geometry": {"type": "LineString","coordinates": [[94.42409992218016,51.707768618099095],[94.42720323801039,51.70816918037409]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42393362522125,51.70778856319257]}},{"type": "Feature","properties": {"stroke": "#ff0000","stroke-width": 2,"stroke-opacity": 1},"geometry": {"type": "LineString","coordinates": [[94.42392289638519,51.70777526646458],[94.4203233718872,51.70739298386341]]}}]};
	var geojsonLimit = {"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41785305738449,51.704421041989626]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41757947206497,51.70520560042194]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.417584836483,51.70519895167881],[94.41770553588867,51.70477010568403]]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.41784501075745,51.7044193797751],[94.41775381565093,51.70474683485487]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42246377468109,51.7033605367216]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42137479782104,51.703058005583344]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.4213855266571,51.703051356524604],[94.42263007164,51.70317103943214]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.415063560009,51.69722806821238]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4157475233078,	51.69729124236039]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[
		94.41507697105406,
		51.6972264057336
	  ],
	  [
		94.41575288772583,
		51.697282929977526
	  ]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4179254770279,51.70040495356646]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41868722438812,51.70116132196796]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.41794157028198,51.700411603014096],[94.41868990659714,51.70116132196796]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42414283752441,51.70773870044244]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42411333322525,51.70775864554907],[94.42719250917435,51.70816086998948]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42599356174468,51.708064469416406]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42600160837173,51.70803455195539],[94.42407310009003,51.70778856319257]]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42245841026306,51.70338380826381],[94.4209349155426,51.703217582699565]]}}]};

	var circleIcon = DG.icon({
		iconUrl: 'icon/road-circle.svg',
		iconSize: [20,20],
		iconAnchor: [10,15],
		popupAnchor: [0,0]
	});

	var stopIcon = DG.icon({
		iconUrl: 'icon/no-stopping.svg',
		iconSize: [20,20],
		iconAnchor: [10,15],
		popupAnchor: [0,0]
	});

	var triIcon = DG.icon({
		iconUrl: 'icon/give-way.svg',
		iconSize: [15,15],
		iconAnchor: [10,15],
		popupAnchor: [0,0]
	});

	var priorIcon = DG.icon({
		iconUrl: 'icon/priority.svg',
		iconSize: [20,20],
		iconAnchor: [10,15],
		popupAnchor: [0,0]
	});

	var endIcon = DG.icon({
		iconUrl: 'icon/end.svg',
		iconSize: [15,15],
		iconAnchor: [10,15],
		popupAnchor: [0,0]
	});

	var limitIcon = DG.icon({
		iconUrl: 'icon/limit.svg',
		iconSize: [15,15],
		iconAnchor: [10,15],
		popupAnchor: [0,0]
	});

	var marker1 = DG.marker([51.7058,94.4069], {
		icon: priorIcon,
		opacity: 0.5
	});

	var marker2 = DG.marker([51.7074,94.4203], {
		icon: triIcon,
		opacity: 0.5
	});

	var marker3 = DG.marker([51.7082,94.4272], {
		icon: triIcon,
		opacity: 0.5
	});

	var marker4 = DG.marker([51.7000,94.4176], {
		icon: endIcon,
		opacity: 0.5
	});

	var markerGroup = DG.layerGroup([marker1,	marker2, marker3, marker4]);
	var dataGeoStop = DG.geoJSON(geojsonStop,{
		style : function(feature){
			return {
				color: '#FF0800',
				opacity: 1,
				weight: '2',
				interactive: false
			}
		},
		pointToLayer: function(geoJsonPoint, latlng){
			return DG.marker(latlng, {
				icon: stopIcon,
				interactive: false
			});
		}			
	});
	var dataGeoLimit = DG.geoJSON(geojsonLimit, {
		style : function(feature){
			return {
				color: '#BA55D3',
				opacity: 1,
				weight: '2',
				interactive: false
			}
		},
		pointToLayer: function(geoJsonPoint, latlng){
			return DG.marker(latlng, {
				icon: limitIcon,
				interactive: false
			});
		}			
	});

//
// Добавление слоев в map, при помощи метода .addTo(map)
	
	// geojsonPath - данные (слой) всего маршрута
	DG.geoJSON(geojsonPath, {
		style : function(feature){
			return {
				color: '#007D00',
				opacity: '0.4',
				weight: '7',
				interactive: false
			}
		},
		pointToLayer: function(geoJsonPoint, latlng){
			return DG.marker(latlng, {
				icon: circleIcon,
				interactive: false
			});
		}
	}).addTo(map);

	// Добавление слоя "ОСТАНОВКА ЗАПРЕЩЕНА"
	buttonOn.addEventListener('click', addStopSigns); 
	
	function addStopSigns(ev) {		
		if(typeof layerStop == 'undefined') {
			layerStop = DG.layerGroup([dataGeoStop, markerGroup]).addTo(map);	
			buttonOn.textContent = 'Скрыть';
		} else {
			layerStop.remove();
			layerStop = undefined;
			ev.preventDefault();
			buttonOn.textContent = 'Показать';
		}		
	};
	
	// Добавление слоя "Ограничение Скорости"

	buttonLimit.addEventListener('click', addLimitSigns); 
	
	function addLimitSigns(ev) {		
		if(typeof layerLimit == 'undefined') {
			layerLimit = DG.layerGroup([dataGeoLimit]).addTo(map);	
			buttonLimit.textContent = 'Скрыть';
		} else {
			layerLimit.remove();
			layerLimit = undefined;
			ev.preventDefault();
			buttonLimit.textContent = 'Показать';
		}		
	};
	
});