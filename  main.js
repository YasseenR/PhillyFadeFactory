// Initialize the map
var map = L.map("map").setView([51.505, -0.09], 13); // Set the view to a specific location and zoom level

// Add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution: "© OpenStreetMap contributors",
}).addTo(map);

// Add a marker to the map
L.marker([51.5, -0.09])
  .addTo(map)
  .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
  .openPopup();
