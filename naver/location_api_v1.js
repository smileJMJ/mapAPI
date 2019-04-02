// 지도 여러개 만들기
var locationAPI = (function($){
	var arrMapContainer,
		arrLatLng ,
		arrMarkerSrc,
		arrMarkerSize,
		arrTargetURL;
		
	var _init = function(){
		arrMapContainer = document.getElementById("map"),
		arrLatLng = {x:37.4826599, y:126.9396515},
		arrMarkerSrc = "/resources/user/img/web/ico_marker.png",
		arrMarkerSize = {width:195, height:66};
		
		arrTargetURL = "http://naver.me/xJ40cNX7";
		
		makeMap(arrMapContainer, arrLatLng, arrMarkerSrc, arrMarkerSize, arrTargetURL);
	};
	
	function makeMap(pMapContainer, pLatLng, pMarker, pMarkerSize, pTargetURL){
		var mapContainer = pMapContainer,
			latLng = pLatLng,
			markerSrc = pMarker,
			markerSize = pMarkerSize,
			targetURL = pTargetURL,
			mapOption = {
			  center: new naver.maps.LatLng(latLng.x, latLng.y),	// 지도의 중심 좌표
			  zoom: 12	// 지도의 확대 레벨
		  };
		  
		// 지도를 표시할 div와 지도 옵션으로 지도를 생성함
  		var map = new naver.maps.Map(mapContainer, mapOption);		
		
		// 마커 생성
  		var marker = new naver.maps.Marker({
			position: naver.maps.LatLng(latLng.x, latLng.y).destinationPoint(0, 0),
			map:map,
			icon:{
				url:"/resources/user/img/web/ico_marker.png",
				size:new naver.maps.Size(pMarkerSize.width, pMarkerSize.height),
				origin: new naver.maps.Point(0,0),
				//anchor:new naver.maps.Point(10,20)
				anchor:new naver.maps.Point(100,60)
			}
		});
		
		// 마커 클릭 이벤트
		naver.maps.Event.addListener(marker, 'click', function(e){
			window.open(arrTargetURL);
		});
		
	}
	
	return{
		init:_init
	}
})(jQuery);

$(function(){
	locationAPI.init();
});