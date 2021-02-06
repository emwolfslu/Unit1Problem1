var mymap = L.map('mapid').setView([38.548980, -90.343730], 11);


L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}).addTo(mymap);

var marker1 = L.marker([38.599450, -90.243150]).addTo(mymap);
marker1.bindPopup("<b>Resturant 1</b><br>Pho Grand").openPopup();

var marker2 = L.marker([38.61, -90.31]).addTo(mymap);
marker2.bindPopup("<b>Resturant 2</b><br>Schafly Bottleworks").openPopup();

var marker3 = L.marker([38.548980, -90.343730]).addTo(mymap);
marker3.bindPopup("<b>Resturant 3</b><br>Sam's Steakhouse").openPopup();

var marker4 = L.marker([38.576540, -90.407410]).addTo(mymap);
marker4.bindPopup("<b>Resturant 4</b><br>Citizen Kane's Steakhouse").openPopup();

var marker5 = L.marker([38.615791, -90.275009]).addTo(mymap);
marker5.bindPopup("<b>Resturant 5</b><br>Zia's on the Hill").openPopup();

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);
