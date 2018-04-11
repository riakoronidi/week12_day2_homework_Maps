const initialize = function(){

  const container = document.getElementById('main-map');
  const center = {lat: 38.0406187, lng: 23.685626};
  const zoom = 17;
  const text = "My Home in Greece";

  const map = new MapWrapper(container, center, zoom);
  map.addMarker(center, text);

  const anotherCityButton = document.getElementById('button-take-to-another-city');
  anotherCityButton.addEventListener('click', map.addClickEvent.bind(map));

}

window.addEventListener('DOMContentLoaded', initialize);
