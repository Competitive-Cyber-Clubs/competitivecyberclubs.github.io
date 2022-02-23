var sidebar = L.control.sidebar('sidebar').addTo(map);
// Set the map center coords and view 
var map = L.map('map').setView([39.8283, -98.5795], 3);
// fix the keys before deploying    
var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);
for (var num = 0; num < schools.length; num++) {
    // Grab information on the school we are currently looping through
    var school = schools[num];
    var school_lat = school["latitude"];
    var school_long = school["longitude"];
    var school_name = school["school"];
    var school_address = school["address"];
    var school_city = school["city"];
    var school_club = school["club"];
    var school_website = school["website"];

    // Use Leaflet to add a marker for each school
    // And give it the lat, long information
    // In the current school's object
    var marker = L.marker([school_lat, school_long]).addTo(map);
    
    // HTML that will appear in popup
    var popup_html = '<h3>' + school_name + '</h3>';
        popup_html += '<h3>' + school_club + '</h3>'
        popup_html += '<href>' + school_website + '</href>'
        popup_html += '<div>' + school_address + '</div>';
        popup_html += '<div>' + school_city + '</div>'
    // Bind the popup to the marker using Leaflet
    marker.bindPopup(popup_html);
}
var marker = L.marker([39.8283, -98.5795]).addTo(map)
    .bindPopup('<b>Hello!</b><br />I am a popup.').openPopup();


    var sidebar = L.control.sidebar('sidebar').addTo(map);