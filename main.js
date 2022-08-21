document.addEventListener('DOMContentLoaded', (e) => {
	var map = L.map('map').setView([41.79, -88.94], 3);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
	}).addTo(map);
	
	// Add points
	
	var markers = L.markermarkerClusterGroup();
	
	fetch("data.json").then(res => res.json()).then(data => {
		for(point of data) {
			markers.addLayer(L.marker([point.lat,point.long]).bindPopup(point.desc));
		}
		map.addLayer(markers);
	});

	console.log("mapped!");
})
