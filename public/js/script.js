// Call Stamen tiles
var layer = new L.StamenTileLayer('toner-background');

// Initialize our map
// The first setview parameter is the lat, long
// Of the initial zoom
// The second parameter is the zoom level
var map = new L.Map('map').setView([42,-93],7);
map.addLayer(layer);

// Set the color of the individual county
// All colors are shades of green
// The more population, the darker the county will appear on the map
function setColor(population) {
	var population_num = parseInt(population)

	if (population_num > 150000) {
		return '#005824';
	} else if (population_num > 125000) {
		return '#238b45';
	} else if (population_num > 100000) {
		return '#41ae76';
	} else if (population_num > 75000) {
		return '#66c2a4';
	} else if (population_num > 50000) {
		return '#99d8c9';
	} else if (population_num > 25000) {
		return '#ccece6';
	} else {
		return '#edf8fb';
	}
}

// Styles for each county on the map
// With this, we grab each county's population
// And send it to the setColor function above
function setStyle(feature) {
	return {
		opacity: 1,
		weight: 2,
		color: "#FFF",
		fillColor: setColor(feature.properties.population),
		fillOpacity: 0.8
	}
}

// Call the GeoJSON file ia-counties
// Which is in a variable called iowa_counties
// And add to the map
L.geoJson(iowa_counties, {
	style: setStyle
}).addTo(map);

// Loop through each brewery in our breweries variable
// Each brewery is an object
// Inside breweries, which is an array
for (var num = 0; num < schools.length; num++) {
	// Grab information on the brewery we are currently looping through
	var school = schools[num];
	var school_lat = school["latitude"];
	var school_long = school["longitude"];
	var school_name = school["school"];
	var school_address = school["address"];
	var school_city = school["city"];

	// Use Leaflet to add a marker for each brewery
	// And give it the lat, long information
	// In the current brewery's object
	var marker = L.marker([school_lat, school_long]).addTo(map);
	
	// HTML that will appear in popup
	var popup_html = '<h3>' + school_name + '</h3>';
	popup_html += '<div>' + school_address + '</div>';
	popup_html += '<div>' + school_city + '</div>'

	// Bind the popup to the marker using Leaflet
	marker.bindPopup(popup_html);
}