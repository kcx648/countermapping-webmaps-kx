var config = {
    style: 'mapbox://styles/kx64/cm2xjzcra00ey01pcgr40abpu',
    accessToken: 'pk.eyJ1Ijoia3g2NCIsImEiOiJjbGkzd2E1dmsxMzNoM2twY2p2azF0bGVlIn0.t_v73kaAMUtoGBPESpw3uA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'light',
    use3dTerrain: true,
    title: 'Flood Analysis for NYC Public Housing',
    subtitle: 'Predicted flood plains and housing data',
    byline: 'By Curtis Xu',
    para1:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum faucibus blandit magna, a malesuada ligula aliquet nec. Nulla vehicula blandit libero, vel dapibus nunc congue et. Phasellus ut lobortis lorem, cursus hendrerit massa. Integer mauris libero, mattis vitae sapien nec, fringilla aliquet leo. Aenean malesuada leo ut tortor faucibus suscipit. Mauris pharetra nulla ut maximus mattis. Ut lobortis leo nec nulla ultrices, at consectetur lacus euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus.',
    para2:'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vel fermentum enim, quis ullamcorper tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse auctor malesuada lorem, id pulvinar augue viverra congue. Donec eu elit at erat dignissim vulputate ut at erat. Fusce at nibh eleifend, lobortis magna vitae, congue ex. Donec eu pretium justo. Aenean finibus tellus non felis congue, sed varius metus pellentesque. Curabitur et volutpat purus. Proin commodo sollicitudin tellus nec congue. Maecenas viverra iaculis sagittis. Sed non ultrices neque.',
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
            id: 'interlude',
            alignment: 'center',
            hidden: false,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ultricies tempor purus, eget tempus sem bibendum vel. Maecenas at justo non felis accumsan condimentum vitae et leo. Sed sodales nec risus maximus congue. Ut quis tincidunt leo. Pellentesque sapien nisl, congue tempus mauris in, pulvinar mattis turpis. Nullam sit amet justo egestas, laoreet mauris ut, pulvinar ipsum. Pellentesque vehicula imperdiet iaculis. Nam in tellus metus. Donec a est non orci efficitur ornare id mattis eros. Aliquam vel facilisis ligula. Nullam tincidunt, sapien vitae bibendum consequat, nibh eros eleifend ligula, et aliquam enim justo eget felis. Sed nec vehicula metus. Pellentesque rutrum dui quis egestas hendrerit. Nullam auctor et tortor sit amet congue.',
            video: 'images/902-1_902-2364-PD2_preview.mp4',
            location: {
              center: [-73.97615, 40.71901],
              zoom: 14.84,
              pitch: 48,
              bearing: 142.44,
            },
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
    ]
};
