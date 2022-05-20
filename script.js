function initMap() {
  // The location of NTNU
  const ntnu = { lat: 60.78978, lng: 10.68219 };
  // The map, centered at NTNU
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: ntnu,
  });
  // The marker, positioned at NTNU
  const marker = new google.maps.Marker({
    position: ntnu,
    map: map,
  });
}

window.initMap = initMap;
