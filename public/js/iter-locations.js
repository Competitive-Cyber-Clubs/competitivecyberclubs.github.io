// Call the GeoJSON file ia-counties
// Which is in a variable called iowa_counties
// And add to the map
L.geoJson(iowa_counties, {
	style: setStyle
}).addTo(map);

// Loop through each brewery in our breweries variable
// Each brewery is an object
// Inside breweries, which is an array
for (var num = 0; num < breweries.length; num++) {
	// Grab information on the brewery we are currently looping through
	var brewery = breweries[num];
	var brewery_lat = brewery["latitude"];
	var brewery_long = brewery["longitude"];
	var brewery_name = brewery["brewery"];
	var brewery_address = brewery["address"];
	var brewery_city = brewery["city"];

	// Use Leaflet to add a marker for each brewery
	// And give it the lat, long information
	// In the current brewery's object
	var marker = L.marker([brewery_lat, brewery_long]).addTo(map);
	
	// HTML that will appear in popup
	var popup_html = '<h3>' + brewery_name + '</h3>';
	popup_html += '<div>' + brewery_address + '</div>';
	popup_html += '<div>' + brewery_city + '</div>'

	// Bind the popup to the marker using Leaflet
	marker.bindPopup(popup_html);
}