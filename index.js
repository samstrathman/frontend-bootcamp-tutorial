// Initialize and add the map
function initMap() {
    const boston = { lat: 42.35725, lng: -71.060982 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: boston,
    });
    const marker = new google.maps.Marker({
      position: boston,
      map: map,
    });
  }
  
  window.initMap = initMap;