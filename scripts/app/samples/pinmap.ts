/// <reference path="../../../defs/jquery/jquery.d.ts"/>
/// <reference path="../../../defs/pinmap/pinmap.d.ts"/>
/// <reference path="../../../defs/maps/maps.d.ts"/>
/// <amd-dependency path="async"/>
/// <amd-dependency path="async!https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"/>
/// <amd-dependency path="pinmap"/>
declare var PopupSlider;
import $ = require('jquery');

console.log("Oh hi, maps are ready now");

// Initalize map plugin
var options = {
    latitude: -31.999069,
    longitude: 115.916510,
    zoom: 9,
    popup: new PopupSlider($('.pinmap'))
};
$('.pinmap').pinmap(options, (pinmap) => {

    // Add pins to map
    var point = new google.maps.LatLng(-31.999069, 115.916510);
    var description = 'Whatever man';
    var icon = new google.maps.MarkerImage(
        "../libs/pinmap/example/icon.png",
        new google.maps.Size(32, 32),
        null, null,
        new google.maps.Size(32, 32));
    pinmap.addMarker(point, 'Pin number one', 'pin-one', icon, description);

    // Get current user location
    pinmap.locateUser({ 'pan': true, 'marker': true }, function (loc, pinmap, error) {
        var destination:string;
        var directions_url:any;
        if (loc) {
            var source = loc.lat() + ',' + loc.lng();
            var destination = 'Suite 1.10, The Old Swan Brewery, 171-173 Mounts Bay Road, Perth WA 6000';
            var directions_url = pinmap.buildDirectionsUrl(source, destination);
            $('.wrapper').append('<a target="_blank" href="' + directions_url + '"Directions to Hatchd</a>');
        }
        else {
            console.log('There was an error: ' + error);
        }
    });
});
