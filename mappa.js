// Creo la mappa, la centro sulle coordinate di Roma e imposto lo zoom iniziale a 12
var map = L.map('map').setView([41.9028, 12.4964], 12);


// Aggiungo alla mappa la cartografia di base fornita da OpenStreetMap, codice preso da sito LeafLet
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//Location Film
var locations = [

    {    id: 'palazzo-federici',
        name: 'Palazzo Federici',
        films: ['A Special Day'],
        lat: 41.91957694587996,
        lng: 12.520102236861284, 
        narratives: ['historical', 'women'],
        historicalOrder: 1,
        womenOrder: 1,
        description: 'The apartment complex at the centre of A Special Day.',
        historicalLink: 'tourStorico.html#palazzo-federici',
        womenLink: 'narrativa_femminista.html#palazzo-federici',
    },

    {   id: 'piazza-di-spagna',
        name: 'Piazza di Spagna',
        films: ['Rome, Open City'],
        lat: 41.905697,
        lng: 12.482326,
        narratives: ['historical'],
        historicalOrder: 2,
        womenOrder: null,
        description: 'An iconic Roman square appearing in the opening sequences of Rome, Open City.',
        historicalLink: 'tourStorico.html#piazza-di-spagna',
        womenLink: null,
    },

    {   id: 'cinecitta',
        name: 'Cinecittà',
        films: ['Bellissima'],
        lat: 41.854231746356014,
        lng: 12.575623206438049,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 2,
        description: 'The legendary film studios where Maddalena brings her daughter to audition in Bellissima.',
        historicalLink: null,
        womenLink: 'narrativa_femminista.html#cinecitta',
    },

    {   id: 'piazza-navona',
        name: 'Piazza Navona',
        films: ['The Great Beauty'],
        lat: 41.8992246355397,
        lng: 12.473737346685144,
        narratives: ['historical'],
        historicalOrder: 3,
        womenOrder: null,
        description: 'One of Rome’s monumental spaces featured in the visual journey of The Great Beauty.',
        historicalLink: 'tourStorico.html#piazza-navona',
        womenLink: null,
    },

    {   id: 'santa-maria-in-cappella',
        name: 'Santa Maria in Cappella',
        films: ["There's Still Tomorrow"],
        lat: 41.88753776584853, 
        lng: 12.478169040556464,
        narratives: ['historical'],
        historicalOrder: 4,
        womenOrder: null,
        description: 'A historic corner of Trastevere connected to the Rome explored through There’s Still Tomorrow.',
        historicalLink: 'tourStorico.html#santa-maria-in-cappella',
        womenLink: null,
    },

    {   id: 'piazza-testaccio',
        name: 'Piazza Testaccio',
        films: ["There's Still Tomorrow"],
        lat: 41.8794439702218, 
        lng: 12.47679868288506,
        narratives: ['historical', 'women'],
        historicalOrder: 5,
        womenOrder: 4,
        description: 'The heart of Testaccio, representing the neighbourhood and communal life surrounding Delia.',
        historicalLink: 'tourStorico.html#piazza-testaccio',
        womenLink: 'narrativa_femminista.html#piazza-testaccio',
    },

    {   id: 'basilica-san-paolo',
        name: 'Basilica of Saint Paul Outside the Walls',
        films: ['Bellissima'],
        lat: 41.85896873224367, 
        lng: 12.4768353963776,
        narratives: ['historical'],
        historicalOrder: 6,
        womenOrder: null,
        description: 'The monumental basilica that appears during Maddalena and Maria’s journey in Bellissima.',
        historicalLink: 'tourStorico.html#basilica-san-paolo',
        womenLink: null,
    },
    
    // modifica
    {   id: 'knights-of-malta-keyhole',
        name: 'Knights of Malta Keyhole',
        films: ['The Great Beauty'],
        lat: 41.88311813353989, 
        lng: 12.478553476507402,
        narratives: ['historical'],
        historicalOrder: 7,
        womenOrder: null,
        description: 'A symbolic viewpoint over Rome, evoking the spectacular city portrayed in The Great Beauty.',
        historicalLink: 'tourStorico.html#knights-of-malta-keyhole',
        womenLink: null,

    },

    {   id: 'fontana-acqua-paola',
        name: "Fontana dell'Acqua Paola",
        films: ['The Great Beauty'],
        lat: 41.88894600205214, 
        lng: 12.46411612151793,
        narratives: ['historical', 'women'],
        historicalOrder: 8,
        womenOrder: 8,
        description: 'The monumental fountain that provides the setting for the memorable opening of The Great Beauty.',
        historicalLink: 'tourStorico.html#fontana-acqua-paola',
        womenLink: 'narrativa_femminista.html#fontana-acqua-paola',
    },

    {   id: 'via-bodoni',
        name: 'Via Bodoni 98',
        films: ["There's Still Tomorrow"],
        lat: 41.87910068856054, 
        lng: 12.474543440555983,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 3,
        description: 'The Testaccio street where the exterior of Delia’s home in There’s Still Tomorrow was filmed.',
        historicalLink: null,
        womenLink: 'narrativa_femminista.html#via-bodoni'
    },

    {   id: 'mercato-testaccio',
        name: 'Testaccio Market',
        films: ["There's Still Tomorrow"],
        lat: 41.877797166638786, 
        lng: 12.473857416337614,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 4,
        description: 'The neighbourhood market associated with everyday work and community life in There’s Still Tomorrow.',
        historicalLink: null,
        womenLink: 'narrativa_femminista.html#mercato-testaccio',
    },

    {   id: 'lungotevere-testaccio',
        name: 'Lungotevere Testaccio',
        films: ["There's Still Tomorrow"],
        lat: 41.87783710848807, 
        lng: 12.470692409872179,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 5,
        description: 'A transition from the enclosed neighbourhood towards a wider experience of the city.',
        historicalLink: null,
        womenLink: 'narrativa_femminista.html#lungotevere-testaccio',
    },

    {   id: 'porta-portese',
        name: 'Porta Portese',
        films: ['Mamma Roma'],
        lat: 41.88430971101998, 
        lng: 12.474364586261354,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 6,
        description: 'A popular Roman setting connected to Mamma Roma and her struggle for a different life.',
        historicalLink: null,
        womenLink: 'narrativa_femminista.html#porta-portese',
    },

    {   id: 'piazza-dei-mercanti',
        name: 'Piazza dei Mercanti',
        films: ['Mamma Roma'],
        lat: 41.8869263395924, 
        lng: 12.477011979188777,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 6,
        description: 'A Trastevere square used as a filming location in Mamma Roma.',
        historicalLink: null,
        womenLink: 'narrativa_femminista.html#piazza-dei-mercanti',
    },

    {   id: 'san-pietro-in-montorio',
        name: 'San Pietro in Montorio',
        films: ['The Great Beauty'],
        lat: 41.888777824418995, 
        lng: 12.46669379822742,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 7,
        description: 'A Renaissance landmark appearing among the hidden and monumental spaces of The Great Beauty.',
        historicalLink: null,
        womenLink: 'narrativa_femminista.html#san-pietro-in-montorio',
    }

];

// creo array vuoto per salvare i marker creati
var markers = [];

// inserimento automatico marker, scorro tutte le locations
for (var i = 0; i < locations.length; i++) {
    var currentLocation = locations[i];
    // creazione automatica del marker: per ogni location creato marker e aggiunto pop up
    var marker = L.marker([currentLocation.lat, currentLocation.lng]).addTo(map)
    .bindPopup(
        '<strong>' + currentLocation.name + '</strong><br>' +
        '<em>' + currentLocation.films.join(', ') + '</em><br><br>' +
        currentLocation.description
    );
    // salvo il marker nell'array
    markers.push(marker);
}




// Variabili per salvare le linee dei due percorsi
var historicalLine;
var womenLine;

// Narrativa inizialmente selezionata
var currentNarrative = 'all';





// Funzione che aggiorna marker e percorsi
// in base alla narrativa selezionata

function updateMap() {

    var visibleHistoricalRoute = [];
    var visibleWomenRoute = [];

    // Scorro tutte le location
    for (var i = 0; i < locations.length; i++) {

        var currentLocation = locations[i];

        // Controllo se la location appartiene alla narrativa selezionata
        var matchesNarrative =
            currentNarrative === 'all' ||
            currentLocation.narratives.includes(currentNarrative);

        if (matchesNarrative) {

            // Mostro il marker
            markers[i].addTo(map);

            // Aggiungo la tappa al percorso Historical
            if (currentLocation.historicalOrder !== null) {
                visibleHistoricalRoute.push({
                    lat: currentLocation.lat,
                    lng: currentLocation.lng,
                    order: currentLocation.historicalOrder
                });
            }

            // Aggiungo la tappa al percorso Women
            if (currentLocation.womenOrder !== null) {
                visibleWomenRoute.push({
                    lat: currentLocation.lat,
                    lng: currentLocation.lng,
                    order: currentLocation.womenOrder
                });
            }

        } else {

            // Nascondo il marker
            map.removeLayer(markers[i]);

        }
    }

    

    // Ordino le tappe
    visibleHistoricalRoute.sort(function(a, b) {
        return a.order - b.order;
    });

    visibleWomenRoute.sort(function(a, b) {
        return a.order - b.order;
    });


    // Rimuovo le linee precedenti, se esistono
    if (historicalLine) {
        map.removeLayer(historicalLine);
    }

    if (womenLine) {
     map.removeLayer(womenLine);
    }


    // Creo le nuove linee
    historicalLine = L.polyline(visibleHistoricalRoute, {
        color: 'blue'
    });

    womenLine = L.polyline(visibleWomenRoute, {
        color: 'red'
    });


    // Mostro la linea corretta
    if (currentNarrative === 'historical') {

        historicalLine.addTo(map);

    } else if (currentNarrative === 'women') {

        womenLine.addTo(map);

    } else {

        historicalLine.addTo(map);
        womenLine.addTo(map);

    }

    // Aggiorno anche l'elenco sotto la mappa

updateLocationsList();
}


function updateLocationsList() {

    var list = document.getElementById('locations-list');

    // Svuoto la lista precedente
    list.innerHTML = '';

    // Creo una copia delle location
    var visibleLocations = [];

    for (var i = 0; i < locations.length; i++) {

        // All = tutte le location
        if (currentNarrative === 'all') {
            visibleLocations.push(locations[i]);
        }

        // Historical = solo location historical
        else if (
            currentNarrative === 'historical' &&
            locations[i].narratives.includes('historical')
        ) {
            visibleLocations.push(locations[i]);
        }

        // Women = solo location women
        else if (
            currentNarrative === 'women' &&
            locations[i].narratives.includes('women')
        ) {
            visibleLocations.push(locations[i]);
        }
    }


    // Se sono dentro un itinerario, ordino le tappe
    if (currentNarrative === 'historical') {

        visibleLocations.sort(function(a, b) {
            return a.historicalOrder - b.historicalOrder;
        });

    }

    else if (currentNarrative === 'women') {

        visibleLocations.sort(function(a, b) {
            return a.womenOrder - b.womenOrder;
        });

    }


    // Creo una card per ogni location
    for (var i = 0; i < visibleLocations.length; i++) {

        var location = visibleLocations[i];

        var card = document.createElement('div');
        card.className = 'location-card';

        var content = '';

        // Numero della tappa
        if (currentNarrative === 'historical') {
            content += '<p class="location-order"> ' +
                location.historicalOrder +
                '</p>';
        }

        else if (currentNarrative === 'women') {
            content += '<p class="location-order"> ' +
                location.womenOrder +
                '</p>';
        }


        // Nome
        content += '<h3>' + location.name + '</h3>';

        // Film
        content += '<p><em>' +
            location.films.join(', ') +
            '</em></p>';

        // Descrizione
        content += '<p>' +
            location.description +
            '</p>';


        // ALL LOCATIONS:
        // mostro solamente i link agli itinerari
        if (currentNarrative === 'all') {

            if (location.historicalLink) {
                content +=
                    '<a href="' +
                    location.historicalLink +
                    '">Explore in the Historical Journey</a>';
            }

            if (location.womenLink) {
                content +=
                    '<a href="' +
                    location.womenLink +
                    '">Explore in Women & Urban Space</a>';
            }
        }


        // HISTORICAL
        if (currentNarrative === 'historical') {

            if (location.historicalDirections) {

                content +=
                    '<div class="directions">' +
                    '<strong>How to get there</strong>' +
                    '<p>' +
                    location.historicalDirections +
                    '</p>' +
                    '</div>';
            }

            if (location.historicalLink) {

                content +=
                    '<a href="' +
                    location.historicalLink +
                    '">Discover this stop →</a>';
            }
        }


        // WOMEN
        if (currentNarrative === 'women') {

            if (location.womenDirections) {

                content +=
                    '<div class="directions">' +
                    '<strong>How to get there</strong>' +
                    '<p>' +
                    location.womenDirections +
                    '</p>' +
                    '</div>';
            }

            if (location.womenLink) {

                content +=
                    '<a href="' +
                    location.womenLink +
                    '">Discover this stop →</a>';
            }
        }


        card.innerHTML = content;

        list.appendChild(card);
    }
}


// FILTRO HISTORICAL

var historicalButton = document.getElementById('show-historical');

historicalButton.addEventListener('click', function() {

    currentNarrative = 'historical';

    updateMap();

});


// FILTRO WOMEN

var womenButton = document.getElementById('show-women');

womenButton.addEventListener('click', function() {

    currentNarrative = 'women';

    updateMap();

});


// FILTRO ALL

var allButton = document.getElementById('show-all');

allButton.addEventListener('click', function() {

    currentNarrative = 'all';

    updateMap();

});

// Mostro inizialmente tutte le location e i due percorsi
updateMap();