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

	var geojsonPath = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[94.40669775009155,51.706741433898145],[94.40662264823914,51.70165503254409],[94.43504333496094,51.704640453769066]]}},{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[94.40650999546051,51.701668331070955],[94.40639734268188,51.696481609101966],[94.4176197052002,51.6974591521672],[94.4180381298065,51.69766529800871],[94.41818833351135,51.69799113952036],[94.41759824752808,51.7000392324421],[94.41868185997008,51.701136386947454],[94.41868185997008,51.70141565839206],[94.41705107688902,51.70696748290838],[94.40670847892761,51.705817280608166]]}},{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[94.41705107688902,51.7069608344242],[94.42721128463745,51.70817749075718],[94.42843437194824,51.703975566315556]]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.40656632184982,51.70166168180799]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.4180381298065,51.69754560053763]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.43452835083008,51.70457396546341]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.40637588500977,51.706621760435475]}},{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[94.42260324954987,51.70333227840422],[94.42284196615219,51.7026091919264],[94.42380487918854,51.70273884966236],[94.42384779453278,51.702592569112866]]}}]};
	var geojsonStop = {"type":"FeatureCollection","features":[{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.41914319992065,51.707200179239024]}},{"type":"Feature","properties":{"stroke":"#ff0000","stroke-width":2,"stroke-opacity":1},"geometry":{"type":"LineString","coordinates":[[94.4171154499054,51.7069608344242],[94.41916465759276,51.70720682768805]]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.4095355272293,51.706116468991645]}},{"type":"Feature","properties":{"stroke":"#ff0000","stroke-width":2,"stroke-opacity":1},"geometry":{"type":"LineString","coordinates":[[94.40953016281128,51.7061098203824],[94.40689086914062,51.70583390223693]]}},{"type":"Feature","properties":{"stroke":"#ffff00","stroke-width":2,"stroke-opacity":1},"geometry":{"type":"LineString","coordinates":[[94.41000491380692,51.69678085922171],[94.41788256168365,51.69747910180578]]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.41863358020782,51.70127269822504]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.40999686717987,51.69677587173593]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.42408114671706,51.70777194228195]}},{"type":"Feature","properties":{"stroke":"#ff0000","stroke-width":2,"stroke-opacity":1},"geometry":{"type":"LineString","coordinates":[[94.42409992218016,51.707768618099095],[94.42720323801039,51.70816918037409]]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.42393362522125,51.70778856319257]}},{"type":"Feature","properties":{"stroke":"#ff0000","stroke-width":2,"stroke-opacity":1},"geometry":{"type":"LineString","coordinates":[[94.42392289638519,51.70777526646458],[94.4203233718872,51.70739298386341]]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.4185745716095,51.70107654284224]}},{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[94.41867649555206,51.70127103589488],[94.41863089799881,51.70107654284224]]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.413443505764,51.706538653677896]}},{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[94.41346764564514,51.706508735207784],[94.41559195518494,51.706754730930015]]}},{"type":"Feature","properties":{},"geometry":{"type":"Point","coordinates":[94.4127783179283,51.69704020772487]}},{"type":"Feature","properties":{},"geometry":{"type":"LineString","coordinates":[[94.4127756357193,51.69703854523919],[94.40643757581711,51.69649989666606]]}}]};
	var geojsonLimit = {"type": "FeatureCollection","features": [{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41785305738449,51.704421041989626]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41757947206497,51.70520560042194]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.417584836483,51.70519895167881],[94.41770553588867,51.70477010568403]]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.41784501075745,51.7044193797751],[94.41775381565093,51.70474683485487]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41228747367859,51.69699698307754]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4113165140152,51.69691053365907]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.41133260726929,51.69690222120629],[94.41229820251465,51.69698368317775]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41868722438812,51.70116132196796]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42414283752441,51.70773870044244]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42411333322525,51.70775864554907],[94.42719250917435,51.70816086998948]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42599356174468,51.708064469416406]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42600160837173,51.70803455195539],[94.42407310009003,51.70778856319257]]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42245841026306,51.70338380826381],[94.4209349155426,51.703217582699565]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.415063560009,51.69722806821238]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4157475233078,51.69729124236039]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.41507697105406,51.6972264057336],[94.41575288772583,51.697282929977526]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.41760897636414,51.70011237690344]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.41868454217911,51.70115301029598],[94.41763311624526,51.700122351139]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42251205444336,51.70340375529048]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42398726940155,51.7033106690908]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4246256351471,51.70338048375852]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42397385835648,51.70333394065868],[94.42461222410202,51.70340209303861]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4245719909668,51.70358494038001]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.423348903656,51.703456947318614]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42458271980284,51.70356333118725],[94.42335963249207,51.70344032481654]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.43265348672867,51.70443766413137]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.43265616893768,51.70442935306126],[94.4288957118988,51.704027095442505]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42327380180357,51.70770379648467]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.4232764840126,51.70768883763735],[94.42029923200607,51.70735974174543]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.42135870456696,51.707447833304684]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.42136406898499,51.70745614382029],[94.42404091358183,51.70776030764092]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4142884016037,51.70665001669827]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.4142884016037,51.70665167883083],[94.41339790821075,51.70655195076936]]}},{"type": "Feature","properties": {},"geometry": {"type": "Point","coordinates": [94.4135507941246,51.706541977951126]}},{"type": "Feature","properties": {},"geometry": {"type": "LineString","coordinates": [[94.41355615854263,51.706541977951126],[94.41706448793411,51.706947537452905]]}}]};

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

	var markerGroup = DG.layerGroup([marker1,	marker2, marker3]);
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