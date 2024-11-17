var config = {
    style: 'mapbox://styles/kx64/cm2xjzcra00ey01pcgr40abpu',
    accessToken: 'pk.eyJ1Ijoia3g2NCIsImEiOiJjbGkzd2E1dmsxMzNoM2twY2p2azF0bGVlIn0.t_v73kaAMUtoGBPESpw3uA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'dark',
    use3dTerrain: true,
    title: 'Housing Retrofit for Environmental and Social Resilience',
    subtitle: 'Human-centric decarbonization for NYC public housing through multi-objective optimization',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: 'Public and Affordable Housing Flood Risk',
            description: 'In the fall of 2012, New York City was hit with hurricane that left tens of thousands of public housing residents without power for days or even weeks]. New York City Housing Authority public housing developments were affected. 24,000 government-subsidized apartments and 40,000 rent-stabilized apartments were also affected. With rising sea levels from climate change and the promise of more flooding, which areas and who will likely be most affected? How is affordable housing construction responding to this?',
            location: {
                center: [-73.99764, 40.71701],
                zoom: 11.84,
                pitch: 0.00,
                bearing: 17.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'red-hook',
            alignment: 'right',
            hidden: false,
            title: 'Red Hook House',
            description: 'But on Oct. 29, 2012, the water turned against Red Hook. The winds of Hurricane Sandy, striking at high tide, created a massive storm surge that pushed hundreds of millions of gallons of water onto and over New York’s shoreline. The resulting flood would cause $19 billion in damage throughout New York City, killing dozens of people, but Red Hook, which is so low-lying that nearly the entire community fell with the city’s mandatory evacuation zone, bore some of the worst of the storm’s wrath.',
            location: {

                center: [-74.00740, 40.67630],
                zoom: 17.09,
                pitch: 71.00,
                bearing: -41.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            image: './images/red.jpg',
            onChapterEnter: [
                {
                    layer: 'public',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'public',
                    opacity: 0,
                    duration: 1000

                }
            ]
        },
        {
            id: 'indoor-air-quality',
            alignment: 'right',
            hidden: false,
            title: 'Public Housing in New York Is Making Its Residents Sick',
            description: '43% of of NYCHA developments are located in the areas of New York City that see the most asthma hospitalizations.',
            location: {
                center: [-73.99764, 40.71701],
                zoom: 10,
                pitch: 0.00,
                bearing: 17.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            image: './images/air.png',
            onChapterEnter: [
                {
                    layer: 'public',
                    opacity: 0,
                    duration: 1000
                },
                {
                    layer: 'asthma',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'flood',
                    opacity: 0,
                    duration: 1000
                }
            ],
           
            onChapterExit: [
                {
                    layer: 'public',
                    opacity: 0,
                    duration: 1000

                },
             
            ]
        },
        {
            id: 'melrose-houses',
            alignment: 'right',
            hidden: false,
            title: 'Public Housing in New York Is Making Its Residents Sick',
            description: 'Maribette Cortes and three other family members suffer from asthma. There is mold in her bathroom. Melrose Houses, Bronx, NY, 2012.',
            location: {
                center: [-73.91948, 40.82077],
                zoom: 17.21,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            image: './images/melrose.jpg',
            onChapterEnter: [
                {
                    layer: 'public',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'public',
                    opacity: 0,
                    duration: 1000

                },
                {
                    layer: 'asthma',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'housing-problem',
            alignment: 'right',
            hidden: false,
            title: 'Public Housing with more than 3 problems',
            description: 'Maribette Cortes and three other family members suffer from asthma. There is mold in her bathroom. Melrose Houses, Bronx, NY, 2012.',
            location: {
                center: [-73.99764, 40.71701],
                zoom: 10,
                pitch: 0.00,
                bearing: 17.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            image: './images/problem.jpg',
            onChapterEnter: [
                {
                    layer: 'housing-problem',
                    opacity: 1,
                    duration: 1000
                },
                {
                    layer: 'public',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'public',
                    opacity: 0,
                    duration: 1000

                },
                {
                    layer: 'asthma',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },


        
    ]
};
