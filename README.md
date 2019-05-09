# mapAPI
naver와 daum map API로 지도 생성하기 [2017 ~ 2019]

지도 API 중 naver mapAPI와 daum mapAPI를 이용하여 쉽게 지도를 만들기 위해 개발했습니다.


## 설치 방법
별도의 설치방법은 없으며, location_api_v*.js을 다운받아 연결합니다.


## 사용 예제
daum/location_api.js
- 추후 옵션값 호출 시 변경할 수 있도록 수정 예정.

naver/location_api_v2.js
- 지도 한 개 생성 시
```sh
locationAPI.init([
  {
    mapId: "",                      // 지도가 들어올 영역 ID값
    latlng: {x:, y:},               // 위도, 경도
    markerSrc: "",                  // 마커 이미지 경로
    markerSize: {width:, height:},  // 마커 사이즈
    url: ""                         // 마커 클릭 시 이동할 지도 페이지 url
  }
]);
```
- 지도 두 개 이상 생성 시 (object 추가하기)
```sh
locationAPI.init([
  {
    mapId: "",                      // 지도가 들어올 영역 ID값
    latlng: {x:, y:},               // 위도, 경도
    markerSrc: "",                  // 마커 이미지 경로
    markerSize: {width:, height:},  // 마커 사이즈
    url: ""                         // 마커 클릭 시 이동할 지도 페이지 url
  },
  {
    mapId: "",                      // 지도가 들어올 영역 ID값
    latlng: {x:, y:},               // 위도, 경도
    markerSrc: "",                  // 마커 이미지 경로
    markerSize: {width:, height:},  // 마커 사이즈
    url: ""                         // 마커 클릭 시 이동할 지도 페이지 url
  }
]);
```


