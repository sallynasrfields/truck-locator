// Center Map
var mymap = L.map('mapid').setView([29.7604, -95.3698], 13);
// Add Open Street Map Layer
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoidGZlaW5zdGVpbjI0IiwiYSI6ImNqNjU1NTB5bjF5YncycHQ2bWk4czlvdjUifQ.VkjX5zAZGhTSYaHSCyTfWg'
}).addTo(mymap);
// Add Custom Marker
var truckIcon = L.icon({
    iconUrl: './assets/images/foodtruck_pin.png',

    iconSize:     [38, 95], // size of the icon
    shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
for ( var i=0; i < markers.length; ++i )
{
 L.marker( [markers[i].lat, markers[i].lng], {icon: truckIcon} )
  .bindPopup( '<a href="' + markers[i].url + '" target="_blank">' + markers[i].name + '</a>' )
  .addTo(mymap);
}
// Add a Click Event with a popup alert that we can use to give more info about food trucks
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}

mymap.on('click', onMapClick);

