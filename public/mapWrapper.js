const MapWrapper = function(container, coords, zoom) {
  // const container = document.querySelector('.main-map');
  this.googleMap = new google.maps.Map(container, {
    center:coords,
    zoom:zoom
  });
}
