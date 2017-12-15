const MapWrapper = function() {
  const container = document.querySelector('.main-map');
  this.googleMap = new google.maps.Map(container, {
    center:{lat: 40.712784, lng: -74.005941},
    zoom:10
  });
}
