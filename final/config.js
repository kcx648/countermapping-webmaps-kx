var config = {
    style: 'mapbox://styles/kx64/cm2xjzcra00ey01pcgr40abpu',
    accessToken: 'pk.eyJ1Ijoia3g2NCIsImEiOiJjbGkzd2E1dmsxMzNoM2twY2p2azF0bGVlIn0.t_v73kaAMUtoGBPESpw3uA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: false,
    theme: 'light',
    use3dTerrain: true,
    title: 'Housing Retrofit for Environmental and Social Resilience',
    subtitle: 'Human-centric decarbonization for NYC public housing through multi-objective optimization',
    byline: 'By Curtis Xu',
    para1: 'This project explores the intersecting crises of decarbonization and public housing, focusing on a visualization narrative that explores the future of sustainable living, housing justice, and health equity. As the building and construction sector is responsible for a significant portion of global CO2 emissions, cities like New York are implementing aggressive decarbonization policies, such as Local Law 97, which targets carbon neutrality by 2050. However, these initiatives often overlook the lived experiences of marginalized and low-income communities who reside in public housing. This study aims to address this gap by incorporating resident perspectives and health considerations into decarbonization strategies. By developing interactive maps powered by Mapbox, the project will compare current decarbonization efforts with the everyday challenges faced by public housing residents. By layering data from both official data from NYC Open Data and resident voices sourced from platforms like Vice and CityLimits, the study will offer insights into areas where decarbonization efforts fall short. This human-centric, data-driven approach aims to inspire a more equitable decarbonization strategy by highlighting the specific needs of public housing residents, ultimately fostering a more sustainable and socially resilient future for low-income communities.',

    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'intro',
            alignment: 'left',
            hidden: false,
            title: "A. Public Housing's Age and Resident Age Distribution",
            description: "As of April 2023, the New York City Housing Authority (NYCHA) reported that approximately 24.6% of its public housing residents are under 18 years old, totaling 81,240 individuals. Additionally, 29.9% are under 21, equating to 98,656 residents. Regarding seniors, 23.6% of NYCHA's population is aged 62 or older, comprising 77,801 individuals. Notably, 42.7% of NYCHA households are headed by individuals in this senior age group. These figures highlight the significant presence of both young and senior residents within NYCHA communities, underscoring the importance of tailored services and support for these age groups.",
            location: {
                center: [-73.92444, 40.83601],
                zoom: 9.59,
                pitch: 40.52,
                bearing: -36.65
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            image: './images/built_year.png',
            onChapterEnter: [
                {
                    layer: 'public',
                    opacity: 0,
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
                    layer: 'flood',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'red-fern',
            alignment: 'right',
            hidden: false,
            title: 'Case 01: Redfern Houses and Traditional Public Housing Appearance',
            description: "Redfern Houses, located in Far Rockaway, Queens, is a public housing development managed by the New York City Housing Authority (NYCHA). Established in 1959, the complex comprises nine buildings, each standing six to seven stories tall, and spans approximately 18.78 acres. In the aftermath of Hurricane Sandy, Redfern Houses sustained significant damage, prompting NYCHA to initiate a $123 million recovery and resilience project in 2017. This comprehensive effort included replacing roofs, installing security cameras, renovating playgrounds and lighting, and constructing a new community center housing a childcare facility and backup emergency power generators. These enhancements aim to bolster the development's infrastructure and improve the quality of life for its nearly 1,500 residents.",
            location: {
                center: [-73.75178, 40.61036],
                zoom: 18.23,
                pitch: 60.00,
                bearing: -11.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            image: './images/redfern_exterior.png',
            onChapterEnter: [
                {
                    layer: 'flood',
                    opacity: 0,
                    duration: 1000
                }

            ],
            onChapterExit: [
                {
                    layer: 'flood',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        
        {
            id: 'youth-seniors',
            alignment: 'right',
            hidden: false,
            title: 'Case 02: Hammel Houses and Age-specific Programs',
            description: "The New York City Housing Authority (NYCHA) offers a variety of programs to support its youth and senior residents. For young people aged 14 to 24, the Summer Youth Employment Program (SYEP) provides career exploration and paid work experiences during the summer. Additionally, Cornerstone Programs, located in 99 NYCHA community centers citywide, offer free enrichment activities such as academic support, life skills development, and creative arts. For seniors, NYCHA's Senior Resident Advisor and Service Coordinator Program delivers on-site services to prevent social isolation and promote independence, connecting residents with community-based services and daily living support. The Elderly Safe-at-Home initiative further ensures safety by providing crime prevention and assistance with daily activities, enabling seniors to age in place securely. Collectively, these programs enhance the well-being and quality of life for NYCHA's diverse resident population.",
            location: {
                center: [-73.70381, 40.58825],
                zoom: 16.00,
                pitch: 60.00,
                bearing: -11.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            image: './images/senior_youth.png',
            onChapterEnter: [
                {
                    layer: 'flood',
                    opacity: 0,
                    duration: 1000
                }

            ],
            onChapterExit: [
                {
                    layer: 'flood',
                    opacity: 0,
                    duration: 1000
                }
            ]
        },
        {
            id: 'flood-risk',
            alignment: 'left',
            hidden: false,
            title: 'B. Flood Risk of Public Housing',
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
                {
                    layer: 'flood',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
            ]
        },
        {
            id: 'red-hook',
            alignment: 'right',
            hidden: false,
            title: 'Case 03: Red Hook Houses and its Flooding Risk',
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
            image: './images/redhook.webp',
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
            id: 'red-hook2',
            alignment: 'right',
            hidden: false,
            title: 'Case 04: Red Hook Houses After 12 Years:Residents Still Living in a Construction Zone',
            description: 'These are “massive, complex projects that take years to design and years to build,” the Department of Environmental Protection’s commissioner, Rohit Aggarwala, said in April. While he promised that “several” of these will be delivered “within two to three years,” he admitted that “none are complete and fully functional” yet.',
            location: {

                center: [-74.00740, 40.67630],
                zoom: 17.09,
                pitch: 71.00,
                bearing: -41.26
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            image: './images/redhook2.jpg',
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
            title: 'C. Public Housing Is Making Its Residents Sick',
            description: 'Nearly half of NYCHA developments, specifically 43%, are situated in neighborhoods across New York City that experience the highest rates of asthma-related hospitalizations, highlighting the critical environmental and health challenges faced by residents in these areas.',
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
            title: 'Case 05: Melrose House and Asthma Issues',
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
            id: 'jackson-houses',
            alignment: 'right',
            hidden: false,
            title: 'Case 06: Jackson House and Mold Issues',
            description: 'Shakisha, 27 years old, has been diagnosed with mold inside her body. Her house has infiltration problems in the bathroom and in the living room. Jackson Houses, Bronx, NY, 2012.',
            location: {

center: [-73.91810, 40.82237],
zoom: 18.29,
pitch: 58.00,
bearing: -23.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            image: './images/jackson.jpeg',
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
            title: 'D. Public Housing with their Multiple Maintainence Problems',
            description: "The New York City Housing Authority (NYCHA) faces significant challenges, including deteriorating infrastructure, health hazards, and financial mismanagement. Residents often contend with issues such as mold infestations, lead paint exposure, and unreliable heating systems, all of which pose serious health risks. A 2024 audit by the NYC Comptroller revealed potential misuse of $36.6 million allocated for small repair contracts, highlighting systemic inefficiencies. Additionally, a federal monitor's report criticized NYCHA's culture of mismanagement, which hampers effective governance and accountability. These persistent problems underscore the urgent need for comprehensive reforms to ensure safe and healthy living conditions for NYCHA residents",
            location: {
                center: [-73.99764, 40.71701],
                zoom: 10,
                pitch: 0.00,
                bearing: 17.53
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            image: './images/buidling_deficiencies.webp',
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
        {
            id: 'polo-ground-tower',
            alignment: 'right',
            hidden: false,
            title: 'Case 07: Polo Ground Tower and Building Deficiencies',
            description: 'Nearly every manager I spoke with stressed the crucial importance of daily custodial functions in maintaining the livability of NYCHA developments, no matter the location. Significant daily vandalism and littering could, within just a few days, make development grounds entirely unlivable.',
            location: {
                center: [-73.93753, 40.83020],
                zoom: 15.80,
                pitch: 45.00,
                bearing: -40.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            image: './images/worker.webp',
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
            id: 'resident-problems',
            alignment: 'right',
            hidden: false,
            title: "Case 08: Redfern House: Maintainence Efficiency and Resident's Life",
            description: "The survey sought residents’ experiences with NYCHA management’s responses to these, and other, concerns. 41 percent of residents had problems with NYCHA management. It is also noteworthy that this question had the highest rate of ​“no response” of any of the survey questions, indicating a possible reluctance on the part of residents to identify problems they may have had with management.",
            location: {
                center: [-73.75178, 40.61036],
                zoom: 18.23,
                pitch: 60.00,
                bearing: -11.05
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            image: './images/problem_resident.png',
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



    ]
};
