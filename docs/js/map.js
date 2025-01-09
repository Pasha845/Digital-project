ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    { 
      center: [55.758818956533005, 37.615336394287034], 
      zoom: 14, 
      controls: ['geolocationControl', 'zoomControl']
    },
    { 
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "360px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "260px", right: "20px" }
    }
  );
  
  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.758818956533005, 37.615336394287034],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/point.svg",
      iconImageSize: [55, 55],
      iconImageOffset: [-20, -40],
    }
  );

  myMap.geoObjects.add(myPlacemark);
  myMap.container.fitToViewport();
}
