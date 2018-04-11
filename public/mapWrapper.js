const MapWrapper = function(container, coords, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: coords,
    zoom: zoom,
  })
};

MapWrapper.prototype.addMarker = function(coords, text){
  const marker = new google.maps.Marker({
    position: coords,
    map: this.googleMap
  })

  const infoText = new google.maps.InfoWindow({
    content: text
  })
  google.maps.event.addListener(marker, 'click', function() {
    infoText.open(this.googleMap, marker);
  })
};


MapWrapper.prototype.addClickEvent = function(){
  const otherCoords = {lat: 40.3074009, lng: 21.787605};
  const text = "This is the city I was born";

  this.googleMap.setCenter(otherCoords);
  this.addMarker(otherCoords, text);
};
