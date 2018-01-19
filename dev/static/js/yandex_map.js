ymaps.ready(init);
 
function init(){     
 
    var myMap;
 
    myMap = new ymaps.Map("map", {
        center: [55.76305126237126,37.60464895767207],
        zoom: 17,
        controls: []
    });
 
    myMap.behaviors.disable('scrollZoom');
 
    myMap.controls.add("zoomControl", {
        position: {top: 15, left: 15}
    });
 
    var myPlacemark = new ymaps.Placemark([55.76305126237126,37.60464895767207] , {},
        { iconLayout: 'default#image',
          iconImageHref: 'static/img/marker.png',
          iconImageSize: [27, 38],
          iconImageOffset: [-20, -47] });     
 
    myMap.geoObjects.add(myPlacemark);
 
}