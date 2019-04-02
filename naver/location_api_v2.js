/*
	- 호출코드
	locationAPI.init([
		{
			mapId: "",														// 지도가 들어올 영역 ID값
			latlng: {x:, y:},											// 위도, 경도
			markerSrc: "",												// 마커 이미지 경로
			markerSize: {width:, height:},				// 마커 사이즈
			url: ""																// 마커 클릭 시 이동할 지도 페이지 url
		}
	]);

 */

// 지도 여러개 만들기
var locationAPI = (function($){
	var infoObj = {
		mapId: "",														// 지도가 들어올 영역 ID값
		latlng: {x:0, y:0},											// 위도, 경도
		markerSrc: "",												// 마커 이미지 경로
		markerSize: {width:0, height:0},				// 마커 사이즈
		url: ""																// 마커 클릭 시 이동할 지도 페이지 url
	};
		
	var _init = function(opt){
		if(opt === undefined){
			console.log("입력 정보를 확인해주세요.");
			return;
		}

		opt.forEach(function(v, i){
			v = $.extend(infoObj, v, {});
			makeMap(v.mapId, v.latlng, v.markerSrc, v.markerSize, v.url);
		});
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
		if(markerSrc == ""){          // 기본 마커
      var marker = new naver.maps.Marker({
        position: naver.maps.LatLng(latLng.x, latLng.y).destinationPoint(0, 0),
        map:map
      });
    }else{                        // 이미지 마커
      var marker = new naver.maps.Marker({
        position: naver.maps.LatLng(latLng.x, latLng.y).destinationPoint(0, 0),
        map:map,
        icon:{
          url:markerSrc,
          size:new naver.maps.Size(pMarkerSize.width, pMarkerSize.height),
          origin: new naver.maps.Point(0,0),
          //anchor:new naver.maps.Point(10,20)
          anchor:new naver.maps.Point(100,60)
        }
      });
    }
		
		// 마커 클릭 이벤트
		if(targetURL != ""){
      naver.maps.Event.addListener(marker, 'click', function(e){
        window.open(arrTargetURL);
      });
    }		
	}
	
	return{
		init:_init
	}
})(jQuery);