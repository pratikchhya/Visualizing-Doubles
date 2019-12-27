var lightmap = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/light-v9/tiles/256/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"http://openstreetmap.org\">OpenStreetMap</a> contributors, <a href=\"http://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"http://mapbox.com\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
});

var darkmap = L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.dark",
    accessToken: API_KEY
});

var baseMaps = {
    "Light": lightmap,
    "Dark": darkmap,
};

var layers = {
    okay: new L.LayerGroup(),
    good: new L.LayerGroup(),
    great: new L.LayerGroup(),
    other: new L.LayerGroup()
};

var myMap = L.map('map', {
    center: [
        38, -95
    ],
    zoom: 4,
    layers: [
        lightmap, 
        layers.okay,
        layers.good,
        layers.great
    ]
});

lightmap.addTo(myMap);

var overlays = {
    "Okay Breweries <= 4": layers.okay,
    "Good Breweries <= 4.5": layers.good,
    'Great Breweries > 4.5': layers.great
};

L.control.layers(baseMaps, overlays).addTo(myMap);

// Leaflet.extra-markers - https://www.npmjs.com/package/leaflet-extra-markers

var icons = {
    okay: L.ExtraMarkers.icon({
        icon: 'fa fa-beer',
        markerColor: 'red',
        shape: 'square',
        prefix: 'fa'
    }),
    good: L.ExtraMarkers.icon({
        icon: 'fa fa-beer',
        markerColor: 'blue-dark',
        shape: 'square',
        prefix: 'fa'
    }),
    great: L.ExtraMarkers.icon({
        icon: 'fa fa-beer',
        markerColor: 'purple',
        shape: 'square',
        prefix: 'fa'
    })
};

d3.csv('map_df.csv', function(data) {
    
    var beerRating;

    for (var i = 0; i < 1000; i++) {
        if (data[i].rating <= 4) {
            beerRating = 'okay';
        }
        else if (data[i].rating <= 4.5) {
            beerRating = 'good'
        }
        else if (data[i].rating > 4.5) {
            beerRating = 'great';
        }
        else {
            beerRating = 'noData';
        }
        
        var marker = L.marker([data[i].latitude, data[i].longitude], {
            icon: icons[beerRating]
        });

        marker.addTo(layers[beerRating]);

        marker.bindPopup("<h4>" + data[i].brewery_name + "<hr> Rating: " + data[i].rating + "</h4>");
    }

    // Create legend

});
