// 지도 여러개 만들기
var locationAPI = (function($){
	var arrMapContainer = [],
		arrLatLng = [],
		arrMarkerSrc = [],
		arrMarkerSize = [],
		arrTargetURL = [];
		
	var _init = function(){
		arrMapContainer[0] = document.getElementById("location_modelhouse"),
		arrMapContainer[1] = document.getElementById("location_place"),
		arrLatLng[0] = {x:35.1514227, y:129.1110602},
		arrLatLng[1] = {x:35.1445663, y:129.1121158},
		arrMarkerSrc[0] = "/images/location_marker01.png",
		arrMarkerSrc[1] = "/images/location_marker02.png",
		arrMarkerSize[0] = {width:92, height:59},
		arrMarkerSize[1] = {width:172, height:59},
		
		arrTargetURL[0] = "http://dmaps.kr/2vnj3",
		arrTargetURL[1] = "http://dmaps.kr/2vnwi";
		
		for(var i=0; i<arrMapContainer.length;i++){
			makeMap(arrMapContainer[i], arrLatLng[i], arrMarkerSrc[i], arrMarkerSize[i], arrTargetURL[i]);
		}
	};
	
	function makeMap(pMapContainer, pLatLng, pMarker, pMarkerSize, pTargetURL){
		var mapContainer = pMapContainer,
			latLng = pLatLng,
			markerSrc = pMarker,
			markerSize = pMarkerSize,
			targetURL = pTargetURL,
			mapOption = {
			  center: new daum.maps.LatLng(latLng.x, latLng.y),	// 지도의 중심 좌표
			  level: 3	// 지도의 확대 레벨
		  };
		  
		// 지도를 표시할 div와 지도 옵션으로 지도를 생성함
  		var map = new daum.maps.Map(mapContainer, mapOption);
		
		// 컨트롤 메뉴 생성
		var mapTypeControl = new daum.maps.MapTypeControl();
		map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
		
		var zoomControl = new daum.maps.ZoomControl();
		map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
		
		// 마커 생성
  		var imageSize = new daum.maps.Size(markerSize.width, markerSize.height),
			imageOption = {offset:new daum.maps.Point(50,45)},		// 마커의 좌표와 일시치킬 이미지 안에서의 좌표 설정
			markerImage = new daum.maps.MarkerImage(markerSrc, imageSize, imageOption),
	  		markerPosition = new daum.maps.LatLng(latLng.x, latLng.y);		// 마커가 표시될 위치
		
		var marker = new daum.maps.Marker({
			position: markerPosition,
			image: markerImage
		});
	   
		marker.setMap(map);
		
		// 마커 클릭 이벤트
		daum.maps.event.addListener(marker, 'click', function() {
		  window.open(targetURL, '', '');
		});
		
	}
	
	return{
		init:_init
	}
})(jQuery);

$(function(){
	locationAPI.init();
});