L.mapbox.accessToken = 'pk.eyJ1IjoibGF2aW5pYWNsYXJlIiwiYSI6IjZUbDU1UTgifQ.QOws-kBuWzp-a3L18kpvFQ';
var map = L.mapbox.map('map', 'laviniaclare.jeb91hmc')
	.setView([37.772, -122.445], 13);

var marker = L.marker(new L.LatLng(37.772, -122.445), {
	icon: L.mapbox.marker.icon({
		'marker-color': 'ff8888'
	}),
	draggable: false
});

function ondragend() {
	var m_lat_lon = marker.getLatLng();
	
}

map.on('move', function () {
		marker.setLatLng(map.getCenter());
		console.log(map.getCenter());
	});
	//Dragend event of map for update marker position
	map.on('dragend', function(e) {
		var cnt = map.getCenter();
		var position = marker.getLatLng();
		lat = Number(position['lat']).toFixed(5);
		lng = Number(position['lng']).toFixed(5);
		console.log(position);

	});

function main(){
	console.log("watching position");
	if(navigator.geolocation)
		{
		console.log("should show a position but who knows!");
		navigator.geolocation.watchPosition(showPosition);
		console.log(showPosition);
		}
	else
		{
		console.log("Whelp.  meh");
		alert("Geolocation is not supported by this browser.");
		}
	}

function showPosition(pos){
alert("Latitude: "+pos.coords.latitude+"nLongitude: "+pos.coords.longitude);
}

$(main);
// navigator.geolocation.getCurrentPosition(function(pos) {
// 	console.log(pos);
// 	console.log(pos.latitude);
// 	// calculate the distance
// 	// haversine formula
// 	// if pos.latitude,pos.longitude radius < 10
// 	// do stuff
// 	// make a sound and buzz
// 	// html5 audio API 
// 	// webkit notifications API
// 	if (phonegap) {
// 		// also throw up a notification
// 	} 
// });

marker.addTo(map);