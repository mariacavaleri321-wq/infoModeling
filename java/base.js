/* ============================================================
   GENERAL CAMBIO STILE (sempre attivo)
   ============================================================ */

(function () {

    // Trova il CSS principale della pagina
    const cssLink =
        document.getElementById('theme-style') ||
        document.querySelector('link[rel="stylesheet"]');

    // Se c'è uno stile salvato, lo applica
    const savedStyle = localStorage.getItem("userStyle");

    if (savedStyle && cssLink) {
        cssLink.setAttribute("href", savedStyle);
    }


    function initBarEvents() {

        const barLinks =
            document.querySelectorAll(".bar-style .bar-item a");

        barLinks.forEach(function (link) {

            link.addEventListener("click", function (e) {

                e.preventDefault();

                const newStyle =
                    this.getAttribute("href");

                if (cssLink && newStyle) {

                    cssLink.setAttribute(
                        "href",
                        newStyle
                    );

                    localStorage.setItem(
                        "userStyle",
                        newStyle
                    );
                }

            });

        });

    }


    if (document.readyState === "loading") {

        document.addEventListener(
            "DOMContentLoaded",
            initBarEvents
        );

    } else {

        initBarEvents();

    }

})();


/* ============================================================
   BOTTONE RESTA PREMUTO QUANDO IN FUNZIONE
   ============================================================ */

document.addEventListener('click', function (e) {

    const clickedButton =
        e.target.closest('[onclick]');

    if (!clickedButton) return;


    const container =
        clickedButton.parentElement;

    if (!container) return;


    Array.from(container.children).forEach(
        function (sibling) {

            if (sibling.hasAttribute('onclick')) {

                sibling.classList.remove('active');

            }

        }
    );


    clickedButton.classList.add('active');

});


/* ============================================================
   NARRATIVE
   ============================================================ */

function initStoryPage() {

    if (!(
        document.querySelector('.story-content') ||
        document.querySelector('.area-immagini')
    )) {
        return;
    }


    /* ========================================================
       TELL ME LESS / MORE / DID YOU KNOW
       ======================================================== */

    function getActiveLevel(parentBox) {

        if (
            parentBox
                .querySelector('.level-normal')
                .style.display !== 'none'
        ) {

            return parentBox
                .querySelector('.level-normal');

        }

        else if (
            parentBox
                .querySelector('.level-child')
                .style.display !== 'none'
        ) {

            return parentBox
                .querySelector('.level-child');

        }

        else {

            return parentBox
                .querySelector('.level-scholar');

        }
    }


    window.showLess = function (buttonElement) {

        const parentBox =
            buttonElement.closest('.story-content');

        const activeLevel =
            getActiveLevel(parentBox);


        activeLevel
            .querySelector('.text-less')
            .style.display = 'block';

        activeLevel
            .querySelector('.text-standard')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-more')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-didyouknow')
            .style.display = 'none';

    };


    window.showMore = function (buttonElement) {

        const parentBox =
            buttonElement.closest('.story-content');

        const activeLevel =
            getActiveLevel(parentBox);


        activeLevel
            .querySelector('.text-less')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-standard')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-more')
            .style.display = 'block';

        activeLevel
            .querySelector('.text-didyouknow')
            .style.display = 'none';

    };


    window.showDidYouKnow = function (buttonElement) {

        const parentBox =
            buttonElement.closest('.story-content');

        const activeLevel =
            getActiveLevel(parentBox);


        activeLevel
            .querySelector('.text-less')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-standard')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-more')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-didyouknow')
            .style.display = 'block';

    };


    /* ========================================================
       FRECCE SCENE
       ======================================================== */

    let current_scene = 0;


    function update_scene() {

        const scene =
            document.querySelectorAll('.area-immagini');


        scene.forEach(function (scena, i) {

            scena.style.display =
                (i === current_scene)
                    ? 'flex'
                    : 'none';

        });

    }


    window.next_scene = function () {

        const scene =
            document.querySelectorAll('.area-immagini');


        current_scene++;


        if (current_scene >= scene.length) {

            current_scene = 0;

        }


        update_scene();

    };


    window.previous_scene = function () {

        const scene =
            document.querySelectorAll('.area-immagini');


        current_scene--;


        if (current_scene < 0) {

            current_scene =
                scene.length - 1;

        }


        update_scene();

    };


    /* ========================================================
       METADATA
       ======================================================== */

    window.showMetadataView =
        function (buttonElement) {

            const parentBox =
                buttonElement.closest(
                    '.description-container-right'
                );


            parentBox
                .querySelector('.story-content')
                .style.display = 'none';

            parentBox
                .querySelector('.qr-content')
                .style.display = 'none';

            parentBox
                .querySelector('.metadata-content')
                .style.display = 'block';

        };


    /* ========================================================
       STORY
       ======================================================== */

    window.showStoryView =
        function (buttonElement) {

            const parentBox =
                buttonElement.closest(
                    '.description-container-right'
                );


            parentBox
                .querySelector('.story-content')
                .style.display = 'block';

            parentBox
                .querySelector('.metadata-content')
                .style.display = 'none';

            parentBox
                .querySelector('.qr-content')
                .style.display = 'none';

        };


    /* ========================================================
       QR
       ======================================================== */

    window.showQRView =
        function (buttonElement) {

            const parentBox =
                buttonElement.closest(
                    '.description-container-right'
                );


            parentBox
                .querySelector('.story-content')
                .style.display = 'none';

            parentBox
                .querySelector('.metadata-content')
                .style.display = 'none';

            parentBox
                .querySelector('.qr-content')
                .style.display = 'block';

        };


    /* ========================================================
       DIFFICOLTÀ
       ======================================================== */

    window.showNormal =
        function (buttonElement) {

            const parentBox =
                buttonElement.closest('.story-content');


            parentBox
                .querySelector('.level-normal')
                .style.display = 'block';

            parentBox
                .querySelector('.level-child')
                .style.display = 'none';

            parentBox
                .querySelector('.level-scholar')
                .style.display = 'none';


            resetToStandard(parentBox);

        };


    window.showChild =
        function (buttonElement) {

            const parentBox =
                buttonElement.closest('.story-content');


            parentBox
                .querySelector('.level-normal')
                .style.display = 'none';

            parentBox
                .querySelector('.level-child')
                .style.display = 'block';

            parentBox
                .querySelector('.level-scholar')
                .style.display = 'none';


            resetToStandard(parentBox);

        };


    window.showScholar =
        function (buttonElement) {

            const parentBox =
                buttonElement.closest('.story-content');


            parentBox
                .querySelector('.level-normal')
                .style.display = 'none';

            parentBox
                .querySelector('.level-child')
                .style.display = 'none';

            parentBox
                .querySelector('.level-scholar')
                .style.display = 'block';


            resetToStandard(parentBox);

        };


    function resetToStandard(parentBox) {

        const activeLevel =
            getActiveLevel(parentBox);


        activeLevel
            .querySelector('.text-less')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-standard')
            .style.display = 'block';

        activeLevel
            .querySelector('.text-more')
            .style.display = 'none';

        activeLevel
            .querySelector('.text-didyouknow')
            .style.display = 'none';

    }


    /* ========================================================
       MODAL
       ======================================================== */

    window.toggleModal =
        function (modalId) {

            const modal =
                document.getElementById(modalId);


            if (modal.style.display === 'flex') {

                modal.style.display = 'none';

            }

            else {

                document
                    .querySelectorAll('.modal-overlay')
                    .forEach(function (m) {

                        m.style.display = 'none';

                    });


                modal.style.display = 'flex';

            }

        };


    window.closeOnBackground =
        function (event, modalId) {

            if (event.target.id === modalId) {

                document
                    .getElementById(modalId)
                    .style.display = 'none';

            }

        };


    /* ========================================================
       LINK DIRETTO ALLA SCENA
       ======================================================== */

    const hash =
        window.location.hash;


    if (hash) {

        const targetScene =
            document.querySelector(hash);


        if (targetScene) {

            const scenes =
                Array.from(
                    document.querySelectorAll(
                        '.area-immagini'
                    )
                );


            current_scene =
                scenes.indexOf(targetScene);


            if (current_scene === -1) {

                current_scene = 0;

            }

        }

    }


    update_scene();

}


/* ============================================================
   PAGINA MAPPA
   ============================================================ */

function initMapPage() {

    // Se questa pagina non contiene la mappa,
    // non eseguo nulla
    if (!document.getElementById('map')) {
        return;
    }


    /* ========================================================
       CREAZIONE MAPPA
       ======================================================== */

    var map =
        L.map('map')
            .setView(
                [41.9028, 12.4964],
                12
            );


    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
            attribution:
                '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }
    ).addTo(map);


    /* ========================================================
       LOCATION
       ======================================================== */

    var locations = [

        {
            id: 'palazzo-federici',
            name: 'Palazzo Federici',
            films: ['A Special Day'],
            lat: 41.91957694587996,
            lng: 12.520102236861284,
            narratives: ['historical', 'women'],
            historicalOrder: 1,
            womenOrder: 1,
            description:
                'The apartment complex at the centre of A Special Day.',
            historicalLink:
                'tourStorico.html#palazzo-federici',
            womenLink:
                'narrativa_femminista.html#palazzo-federici'
        },

        {
            id: 'piazza-di-spagna',
            name: 'Piazza di Spagna',
            films: ['Rome, Open City'],
            lat: 41.905697,
            lng: 12.482326,
            narratives: ['historical'],
            historicalOrder: 2,
            womenOrder: null,
            description:
                'An iconic Roman square appearing in the opening sequences of Rome, Open City.',
            historicalLink:
                'tourStorico.html#piazza-di-spagna',
            womenLink: null
        },

        {
            id: 'cinecitta',
            name: 'Cinecittà',
            films: ['Bellissima'],
            lat: 41.854231746356014,
            lng: 12.575623206438049,
            narratives: ['women'],
            historicalOrder: null,
            womenOrder: 2,
            description:
                'The legendary film studios where Maddalena brings her daughter to audition in Bellissima.',
            historicalLink: null,
            womenLink:
                'narrativa_femminista.html#cinecitta'
        },

        {
            id: 'piazza-navona',
            name: 'Piazza Navona',
            films: ['The Great Beauty'],
            lat: 41.8992246355397,
            lng: 12.473737346685144,
            narratives: ['historical'],
            historicalOrder: 3,
            womenOrder: null,
            description:
                'One of Rome’s monumental spaces featured in the visual journey of The Great Beauty.',
            historicalLink:
                'tourStorico.html#piazza-navona',
            womenLink: null
        },

        {
            id: 'santa-maria-in-cappella',
            name: 'Santa Maria in Cappella',
            films: ["There's Still Tomorrow"],
            lat: 41.88753776584853,
            lng: 12.478169040556464,
            narratives: ['historical'],
            historicalOrder: 4,
            womenOrder: null,
            description:
                'A historic corner of Trastevere connected to the Rome explored through There’s Still Tomorrow.',
            historicalLink:
                'tourStorico.html#santa-maria-in-cappella',
            womenLink: null
        },

        {
            id: 'piazza-testaccio',
            name: 'Piazza Testaccio',
            films: ["There's Still Tomorrow"],
            lat: 41.8794439702218,
            lng: 12.47679868288506,
            narratives: ['historical', 'women'],
            historicalOrder: 5,
            womenOrder: 4,
            description:
                'The heart of Testaccio, representing the neighbourhood and communal life surrounding Delia.',
            historicalLink:
                'tourStorico.html#piazza-testaccio',
            womenLink:
                'narrativa_femminista.html#piazza-testaccio'
        },

        {
            id: 'basilica-san-paolo',
            name:
                'Basilica of Saint Paul Outside the Walls',
            films: ['Bellissima'],
            lat: 41.85896873224367,
            lng: 12.4768353963776,
            narratives: ['historical'],
            historicalOrder: 6,
            womenOrder: null,
            description:
                'The monumental basilica that appears during Maddalena and Maria’s journey in Bellissima.',
            historicalLink:
                'tourStorico.html#basilica-san-paolo',
            womenLink: null
        },

        {
            id: 'knights-of-malta-keyhole',
            name: 'Knights of Malta Keyhole',
            films: ['The Great Beauty'],
            lat: 41.88311813353989,
            lng: 12.478553476507402,
            narratives: ['historical'],
            historicalOrder: 7,
            womenOrder: null,
            description:
                'A symbolic viewpoint over Rome, evoking the spectacular city portrayed in The Great Beauty.',
            historicalLink:
                'tourStorico.html#knights-of-malta-keyhole',
            womenLink: null
        },

        {
            id: 'fontana-acqua-paola',
            name: "Fontana dell'Acqua Paola",
            films: ['The Great Beauty'],
            lat: 41.88894600205214,
            lng: 12.46411612151793,
            narratives: ['historical', 'women'],
            historicalOrder: 8,
            womenOrder: 8,
            description:
                'The monumental fountain that provides the setting for the memorable opening of The Great Beauty.',
            historicalLink:
                'tourStorico.html#fontana-acqua-paola',
            womenLink:
                'narrativa_femminista.html#fontana-acqua-paola'
        },

        {
            id: 'via-bodoni',
            name: 'Via Bodoni 98',
            films: ["There's Still Tomorrow"],
            lat: 41.87910068856054,
            lng: 12.474543440555983,
            narratives: ['women'],
            historicalOrder: null,
            womenOrder: 3,
            description:
                'The Testaccio street where the exterior of Delia’s home in There’s Still Tomorrow was filmed.',
            historicalLink: null,
            womenLink:
                'narrativa_femminista.html#via-bodoni'
        },

        {
            id: 'mercato-testaccio',
            name: 'Testaccio Market',
            films: ["There's Still Tomorrow"],
            lat: 41.877797166638786,
            lng: 12.473857416337614,
            narratives: ['women'],
            historicalOrder: null,
            womenOrder: 4,
            description:
                'The neighbourhood market associated with everyday work and community life in There’s Still Tomorrow.',
            historicalLink: null,
            womenLink:
                'narrativa_femminista.html#mercato-testaccio'
        },

        {
            id: 'lungotevere-testaccio',
            name: 'Lungotevere Testaccio',
            films: ["There's Still Tomorrow"],
            lat: 41.87783710848807,
            lng: 12.470692409872179,
            narratives: ['women'],
            historicalOrder: null,
            womenOrder: 5,
            description:
                'A transition from the enclosed neighbourhood towards a wider experience of the city.',
            historicalLink: null,
            womenLink:
                'narrativa_femminista.html#lungotevere-testaccio'
        },

        {
            id: 'porta-portese',
            name: 'Porta Portese',
            films: ['Mamma Roma'],
            lat: 41.88430971101998,
            lng: 12.474364586261354,
            narratives: ['women'],
            historicalOrder: null,
            womenOrder: 6,
            description:
                'A popular Roman setting connected to Mamma Roma and her struggle for a different life.',
            historicalLink: null,
            womenLink:
                'narrativa_femminista.html#porta-portese'
        },

        {
            id: 'piazza-dei-mercanti',
            name: 'Piazza dei Mercanti',
            films: ['Mamma Roma'],
            lat: 41.8869263395924,
            lng: 12.477011979188777,
            narratives: ['women'],
            historicalOrder: null,
            womenOrder: 6,
            description:
                'A Trastevere square used as a filming location in Mamma Roma.',
            historicalLink: null,
            womenLink:
                'narrativa_femminista.html#piazza-dei-mercanti'
        },

        {
            id: 'san-pietro-in-montorio',
            name: 'San Pietro in Montorio',
            films: ['The Great Beauty'],
            lat: 41.888777824418995,
            lng: 12.46669379822742,
            narratives: ['women'],
            historicalOrder: null,
            womenOrder: 7,
            description:
                'A Renaissance landmark appearing among the hidden and monumental spaces of The Great Beauty.',
            historicalLink: null,
            womenLink:
                'narrativa_femminista.html#san-pietro-in-montorio'
        }

    ];


    /* ========================================================
       SPOSTAMENTI - HISTORICAL JOURNEY
       ======================================================== */

    var historicalRoutes = [

        {
            fromOrder: 1,
            toOrder: 2,
            transport: 'Public transport',
            time: 'Approx. 30 min',
            distance: '',
            directions:
                'Travel from Palazzo Federici towards the historic centre and continue to Piazza di Spagna.'
        },

        {
            fromOrder: 2,
            toOrder: 3,
            transport: 'Walking',
            time: 'Approx. 20 min',
            distance: '1.6 km',
            directions:
                'Walk through the historic centre from Piazza di Spagna towards Piazza Navona.'
        },

        {
            fromOrder: 3,
            toOrder: 4,
            transport: 'Walking',
            time: 'Approx. 20 min',
            distance: '',
            directions:
                'Leave Piazza Navona towards the Tiber, cross into Trastevere and continue towards Santa Maria in Cappella.'
        },

        {
            fromOrder: 4,
            toOrder: 5,
            transport: 'Walking',
            time: 'Approx. 15 min',
            distance: '',
            directions:
                'Continue south from Trastevere, cross the Tiber and proceed towards Piazza Testaccio.'
        },

        {
            fromOrder: 5,
            toOrder: 6,
            transport:
                'Public transport / Walking',
            time: 'Approx. 20–30 min',
            distance: '',
            directions:
                'Continue south towards Via Ostiense and the Basilica of Saint Paul Outside the Walls.'
        },

        {
            fromOrder: 6,
            toOrder: 7,
            transport: 'Public transport',
            time: 'Approx. 25–30 min',
            distance: '',
            directions:
                'Travel towards the Aventine Hill and continue to Piazza dei Cavalieri di Malta.'
        },

        {
            fromOrder: 7,
            toOrder: 8,
            transport: 'Walking',
            time: 'Approx. 25 min',
            distance: '',
            directions:
                'Continue towards Trastevere and climb the Janiculum to reach Fontana dell’Acqua Paola.'
        }

    ];


    /* ========================================================
       SPOSTAMENTI - WOMEN & URBAN SPACE
       ======================================================== */

    var womenRoutes = [

        {
            fromOrder: 1,
            toOrder: 2,
            transport: 'Public transport',
            time: 'Approx. 35–40 min',
            distance: '',
            directions:
                'Travel from Palazzo Federici towards Metro Line A and continue to Cinecittà.'
        },

        {
            fromOrder: 2,
            toOrder: 3,
            transport:
                'Metro + public transport',
            time: 'Approx. 40–45 min',
            distance: '',
            directions:
                'Return towards the city centre and continue to the Testaccio neighbourhood and Via Bodoni.'
        },

        {
            fromOrder: 3,
            toOrder: 4,
            transport: 'Walking',
            time: 'Approx. 5 min',
            distance: '',
            directions:
                'Continue through Testaccio towards Piazza Testaccio and the Testaccio Market.'
        },

        {
            fromOrder: 4,
            toOrder: 5,
            transport: 'Walking',
            time: 'Approx. 5 min',
            distance: '',
            directions:
                'Leave the Piazza Testaccio and Market area and continue west towards Lungotevere Testaccio.'
        },

        {
            fromOrder: 5,
            toOrder: 6,
            transport: 'Walking',
            time: 'Approx. 10 min',
            distance: '',
            directions:
                'Follow the Tiber north towards Porta Portese and continue into the Piazza dei Mercanti area.'
        },

        {
            fromOrder: 6,
            toOrder: 7,
            transport: 'Walking',
            time: 'Approx. 15 min',
            distance: '',
            directions:
                'Continue through Trastevere and climb towards San Pietro in Montorio.'
        },

        {
            fromOrder: 7,
            toOrder: 8,
            transport: 'Walking',
            time: 'Approx. 5 min',
            distance: '',
            directions:
                'Continue uphill along the Janiculum to Fontana dell’Acqua Paola.'
        }

    ];


    /* ========================================================
       MARKER
       ======================================================== */

    var markers = [];


    for (var i = 0; i < locations.length; i++) {

        var currentLocation =
            locations[i];


        var marker =
            L.marker([
                currentLocation.lat,
                currentLocation.lng
            ])
            .addTo(map)
            .bindPopup(
                '<strong>' +
                currentLocation.name +
                '</strong><br>' +

                '<em>' +
                currentLocation.films.join(', ') +
                '</em><br><br>' +

                currentLocation.description
            );


        markers.push(marker);

    }


    /* ========================================================
       LINEE DEI PERCORSI
       ======================================================== */

    var historicalLine;
    var womenLine;

    var currentNarrative = 'all';


    function updateMap() {

        var visibleHistoricalRoute = [];
        var visibleWomenRoute = [];


        for (var i = 0; i < locations.length; i++) {

            var currentLocation =
                locations[i];


            var matchesNarrative =
                currentNarrative === 'all' ||
                currentLocation.narratives.includes(
                    currentNarrative
                );


            if (matchesNarrative) {

                markers[i].addTo(map);


                if (
                    currentLocation.historicalOrder !== null
                ) {

                    visibleHistoricalRoute.push({

                        lat: currentLocation.lat,
                        lng: currentLocation.lng,
                        order:
                            currentLocation.historicalOrder

                    });

                }


                if (
                    currentLocation.womenOrder !== null
                ) {

                    visibleWomenRoute.push({

                        lat: currentLocation.lat,
                        lng: currentLocation.lng,
                        order:
                            currentLocation.womenOrder

                    });

                }

            }

            else {

                map.removeLayer(markers[i]);

            }

        }


        visibleHistoricalRoute.sort(
            function (a, b) {

                return a.order - b.order;

            }
        );


        visibleWomenRoute.sort(
            function (a, b) {

                return a.order - b.order;

            }
        );


        if (historicalLine) {

            map.removeLayer(historicalLine);

        }


        if (womenLine) {

            map.removeLayer(womenLine);

        }


        historicalLine =
            L.polyline(
                visibleHistoricalRoute,
                {
                    color: 'blue'
                }
            );


        womenLine =
            L.polyline(
                visibleWomenRoute,
                {
                    color: 'red'
                }
            );


        if (
            currentNarrative === 'historical'
        ) {

            historicalLine.addTo(map);

        }

        else if (
            currentNarrative === 'women'
        ) {

            womenLine.addTo(map);

        }

        else {

            historicalLine.addTo(map);
            womenLine.addTo(map);

        }


        updateLocationsList();

    }


    /* ========================================================
       ELENCO LOCATION SOTTO LA MAPPA
       ======================================================== */

    function updateLocationsList() {

        var list =
            document.getElementById(
                'locations-list'
            );


        if (!list) {
            return;
        }


        list.innerHTML = '';


        /* ====================================================
           ALL LOCATIONS
           ==================================================== */

        if (currentNarrative === 'all') {

            for (
                var i = 0;
                i < locations.length;
                i++
            ) {

                var location =
                    locations[i];


                var card =
                    document.createElement('div');


                card.className =
                    'location-card';


                var content = '';


                content +=
                    '<div class="location-info">';


                content +=
                    '<h3>' +
                    location.name +
                    '</h3>';


                content +=
                    '<p><em>' +
                    location.films.join(', ') +
                    '</em></p>';


                content +=
                    '<p>' +
                    location.description +
                    '</p>';


                if (location.historicalLink) {

                    content +=
                        '<p><a href="' +
                        location.historicalLink +
                        '">' +
                        'Explore in the Historical Journey →' +
                        '</a></p>';

                }


                if (location.womenLink) {

                    content +=
                        '<p><a href="' +
                        location.womenLink +
                        '">' +
                        'Explore in Women & Urban Space →' +
                        '</a></p>';

                }


                content += '</div>';


                card.innerHTML = content;

                list.appendChild(card);

            }


            return;

        }


        /* ====================================================
           CREO LE TAPPE
           ==================================================== */

        var stops = [];


        for (
            var i = 0;
            i < locations.length;
            i++
        ) {

            var location =
                locations[i];


            if (
                !location.narratives.includes(
                    currentNarrative
                )
            ) {

                continue;

            }


            var order;


            if (
                currentNarrative === 'historical'
            ) {

                order =
                    location.historicalOrder;

            }

            else {

                order =
                    location.womenOrder;

            }


            var existingStop =
                stops.find(
                    function (stop) {

                        return stop.order === order;

                    }
                );


            if (!existingStop) {

                existingStop = {

                    order: order,
                    locations: []

                };


                stops.push(existingStop);

            }


            existingStop.locations.push(
                location
            );

        }


        stops.sort(
            function (a, b) {

                return a.order - b.order;

            }
        );


        /* ====================================================
           CREO LE CARD
           ==================================================== */

        for (
            var i = 0;
            i < stops.length;
            i++
        ) {

            var stop =
                stops[i];


            var card =
                document.createElement('div');


            card.className =
                'location-card';


            var content = '';


            content +=
                '<div class="location-number">' +
                String(stop.order).padStart(2, '0') +
                '</div>';


            content +=
                '<div class="location-info">';


            /* =================================================
               UNA O PIÙ LOCATION NELLA STESSA TAPPA
               ================================================= */

            for (
                var j = 0;
                j < stop.locations.length;
                j++
            ) {

                var location =
                    stop.locations[j];


                if (
                    stop.locations.length > 1
                ) {

                    content +=
                        '<div class="location-subitem">';

                }


                content +=
                    '<h3>' +
                    location.name +
                    '</h3>';


                content +=
                    '<p><em>' +
                    location.films.join(', ') +
                    '</em></p>';


                content +=
                    '<p>' +
                    location.description +
                    '</p>';


                if (
                    currentNarrative ===
                        'historical' &&
                    location.historicalLink
                ) {

                    content +=
                        '<a href="' +
                        location.historicalLink +
                        '">' +
                        'Discover this stop →' +
                        '</a>';

                }


                if (
                    currentNarrative === 'women' &&
                    location.womenLink
                ) {

                    content +=
                        '<a href="' +
                        location.womenLink +
                        '">' +
                        'Discover this location →' +
                        '</a>';

                }


                if (
                    stop.locations.length > 1
                ) {

                    content += '</div>';

                }

            }


            content += '</div>';


            card.innerHTML = content;

            list.appendChild(card);


            /* =================================================
               COLLEGAMENTO ALLA TAPPA SUCCESSIVA
               ================================================= */

            if (
                i < stops.length - 1
            ) {

                var nextStop =
                    stops[i + 1];


                var routes;


                if (
                    currentNarrative ===
                    'historical'
                ) {

                    routes =
                        historicalRoutes;

                }

                else {

                    routes =
                        womenRoutes;

                }


                var route =
                    routes.find(
                        function (route) {

                            return (
                                route.fromOrder ===
                                    stop.order &&
                                route.toOrder ===
                                    nextStop.order
                            );

                        }
                    );


                if (route) {

                    var routeBox =
                        document.createElement(
                            'div'
                        );


                    routeBox.className =
                        'route-connection';


                    var routeContent = '';


                    routeContent +=
                        '<div class="route-main-info">';


                    routeContent +=
                        '↓ &nbsp;' +
                        route.transport +
                        ' · ' +
                        route.time;


                    if (route.distance) {

                        routeContent +=
                            ' · ' +
                            route.distance;

                    }


                    routeContent += '</div>';


                    var nextNames =
                        nextStop.locations
                            .map(
                                function (location) {

                                    return location.name;

                                }
                            )
                            .join(' + ');


                    routeContent +=
                        '<p class="route-directions">' +

                        '<strong>Next stop: ' +
                        nextNames +
                        '</strong><br>' +

                        route.directions +

                        '</p>';


                    routeBox.innerHTML =
                        routeContent;


                    list.appendChild(
                        routeBox
                    );

                }

            }

        }

    }


    /* ========================================================
       FILTRI
       ======================================================== */

    var historicalButton =
        document.getElementById(
            'show-historical'
        );


    if (historicalButton) {

        historicalButton.addEventListener(
            'click',
            function () {

                currentNarrative =
                    'historical';

                updateMap();

            }
        );

    }


    var womenButton =
        document.getElementById(
            'show-women'
        );


    if (womenButton) {

        womenButton.addEventListener(
            'click',
            function () {

                currentNarrative =
                    'women';

                updateMap();

            }
        );

    }


    var allButton =
        document.getElementById(
            'show-all'
        );


    if (allButton) {

        allButton.addEventListener(
            'click',
            function () {

                currentNarrative = 'all';

                updateMap();

            }
        );

    }


    updateMap();

}


/* ============================================================
   AVVIO
   ============================================================ */

if (document.readyState === "loading") {

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            initStoryPage();
            initMapPage();

        }
    );

}

else {

    initStoryPage();
    initMapPage();

}