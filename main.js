document.addEventListener('DOMContentLoaded', (e) => {
	var map = L.map('map').setView([41.8, -87.8], 10);
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
	}).addTo(map);
	console.log("mapped!");
})