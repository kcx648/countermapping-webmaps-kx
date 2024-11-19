 mapboxgl.accessToken = 'pk.eyJ1Ijoia3g2NCIsImEiOiJjbGkzd2E1dmsxMzNoM2twY2p2azF0bGVlIn0.t_v73kaAMUtoGBPESpw3uA'
const map = new mapboxgl.Map({
    container: 'Curtis',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-122.39071, 37.74077],
zoom: 12.54,
pitch: 45.00,
bearing: -40.00
})

map.on('load', function () {
    map.addSource('point', {
        'type': 'vector',
        'url': 'mapbox://kx64.5ec02pgp'
    });
    map.addLayer({
        'id': 'point',
        'type': 'circle',
        'source': 'point',
        'source-layer': 'Historical_Restaurant_Inspect-0x9ipt',
        'paint': {
          'circle-color': [
            'step',
            ['to-number', ['get', 'inspection_score'], -1],
            '#dddddd', 
            45, '#440154', 
            80, '#3b528b', 
            85, '#21908d', 
            90, '#5dc963', 
            95, '#fde725'  
        ]
        }
    });

    console.log('My name is Curtis');

    map.on('mouseenter', 'point', (e) => {
        console.log(e.features[0]['properties']['business_name'])
        var name = e.features[0]['properties']['business_name'];
        var textField = document.getElementById('restText');
        textField.innerHTML = name;
        
    })
})

