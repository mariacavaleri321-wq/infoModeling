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
        womenOrder: 1
    },

    {   id: 'piazza-di-spagna',
        name: 'Piazza di Spagna',
        films: ['Rome, Open City'],
        lat: 41.905697,
        lng: 12.482326,
        narratives: ['historical'],
        historicalOrder: 2,
        womenOrder: null
    },

    {   id: 'cinecitta',
        name: 'Cinecittà',
        films: ['Bellissima'],
        lat: 41.854231746356014,
        lng: 12.575623206438049,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 2
    },

    {   id: 'trevi-fountain',
        name: 'Trevi Fountain',
        films: ['The Great Beauty'],
        lat: 41.90108118402971,
        lng: 12.483326590557075,
        narratives: ['historical'],
        historicalOrder: 3,
        womenOrder: null
    },

    {   id: 'santa-maria-in-cappella',
        name: 'Santa Maria in Cappella',
        films: ["There's Still Tomorrow"],
        lat: 41.88753776584853, 
        lng: 12.478169040556464,
        narratives: ['historical'],
        historicalOrder: 4,
        womenOrder: null
    },

    {   id: 'piazza-testaccio',
        name: 'Piazza Testaccio',
        films: ["There's Still Tomorrow"],
        lat: 41.8794439702218, 
        lng: 12.47679868288506,
        narratives: ['historical', 'women'],
        historicalOrder: 5,
        womenOrder: 4
    },

    {   id: 'basilica-san-paolo',
        name: 'Basilica of Saint Paul Outside the Walls',
        films: ['Bellissima'],
        lat: 41.85896873224367, 
        lng: 12.4768353963776,
        narratives: ['historical'],
        historicalOrder: 6,
        womenOrder: null
    },
    
    // modifica
    {   id: 'knights-of-malta-keyhole',
        name: 'Knights of Malta Keyhole',
        films: ['The Great Beauty'],
        lat: 41.88311813353989, 
        lng: 12.478553476507402,
        narratives: ['historical'],
        historicalOrder: 7,
        womenOrder: null

},

    {   id: 'fontana-acqua-paola',
        name: "Fontana dell'Acqua Paola",
        films: ['The Great Beauty'],
        lat: 41.88894600205214, 
        lng: 12.46411612151793,
        narratives: ['historical', 'women'],
        historicalOrder: 8,
        womenOrder: 8
    },

    {   id: 'via-bodoni',
        name: 'Via Bodoni',
        films: ["There's Still Tomorrow"],
        lat: 41.87910068856054, 
        lng: 12.474543440555983,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 3
    },

    {   id: 'mercato-testaccio',
        name: 'Testaccio Market',
        films: ["There's Still Tomorrow"],
        lat: 41.877797166638786, 
        lng: 12.473857416337614,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 4
    },

    {   id: 'lungotevere-testaccio',
        name: 'Lungotevere Testaccio',
        films: ["There's Still Tomorrow"],
        lat: 41.87783710848807, 
        lng: 12.470692409872179,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 5
    },

    {   id: 'porta-portese',
        name: 'Porta Portese',
        films: ['Mamma Roma'],
        lat: 41.88430971101998, 
        lng: 12.474364586261354,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 6
    },

    {   id: 'piazza-dei-mercanti',
        name: 'Piazza dei Mercanti',
        films: ['Mamma Roma'],
        lat: 41.8869263395924, 
        lng: 12.477011979188777,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 6
    },

    {   id: 'san-pietro-in-montorio',
        name: 'San Pietro in Montorio',
        films: ['Mamma Roma', 'The Great Beauty'],
        lat: 41.888777824418995, 
        lng: 12.46669379822742,
        narratives: ['women'],
        historicalOrder: null,
        womenOrder: 7
    }

];

// creo array vuoto per salvare i marker creati
var markers = [];

// inserimento automatico marker, scorro tutte le locations
for (var i = 0; i < locations.length; i++) {
    var currentLocation = locations[i];
    // creazione automatica del marker: per ogni location creato marker e aggiunto pop up
    var marker = L.marker([currentLocation.lat, currentLocation.lng]).addTo(map)
        .bindPopup(currentLocation.name);
    // salvo il marker nell'array
    markers.push(marker);
}




// LINEA PERCORSO HISTORICAL 

// Creo un array vuoto per salvare le coordinate dell'itinerario storico
var historicalRoute = [];
// Scorro tutte le location
for (var i = 0; i < locations.length; i++) {
    // Controllo se la location appartiene all'itinerario storico
    if (locations[i].historicalOrder !== null) {
        // Salvo coordinate e ordine della tappa
        historicalRoute.push({
            lat: locations[i].lat,
            lng: locations[i].lng,
            order: locations[i].historicalOrder
        });
    }
}
// Ordino le tappe in base al valore di historicalOrder
historicalRoute.sort(function(a, b) {
    return a.order - b.order;
});
// Creo la linea che collega le tappe dell'itinerario storico + colore blu
var historicalLine = L.polyline(historicalRoute, {
    color: 'blue'}).addTo(map);





// LINEA PERCORSO WOMEN

// Creo un array vuoto per salvare le coordinate dell'itinerario 
var womenRoute = [];
// Scorro tutte le location
for (var i = 0; i < locations.length; i++) {
    // Controllo se la location appartiene all'itinerario women
    if (locations[i].womenOrder !== null) {
        // Salvo coordinate e ordine della tappa
        womenRoute.push({
            lat: locations[i].lat,
            lng: locations[i].lng,
            order: locations[i].womenOrder
        });
    }
}
// Ordino le tappe in base al valore di womenOrder
womenRoute.sort(function(a, b) {
    return a.order - b.order;
});
// Creo la linea che collega le tappe dell'itinerario women + colore rosso
var womenLine = L.polyline(womenRoute, {
    color: 'red'}).addTo(map);




// Variabile che tiene traccia della narrativa attualmente selezionata
var currentNarrative = 'all';




// CHECKBOX

// Funzione che restituisce l'elenco dei film selezionati nelle checkbox
function getSelectedFilms() {
    // Seleziono tutte le checkbox presenti dentro il contenitore film-filters
    var checkboxes = document.querySelectorAll('#film-filters input[type="checkbox"]');
    // Creo un array vuoto in cui salvare i film selezionati
    var selectedFilms = [];
    // Scorro tutte le checkbox
    for (var i = 0; i < checkboxes.length; i++) {
        // Controllo se la checkbox corrente è selezionata
        if (checkboxes[i].checked) {
            // Se è selezionata, aggiungo il suo valore all'array
            selectedFilms.push(checkboxes[i].value);
        }
    }
    // Restituisco l'elenco dei film selezionati
    return selectedFilms;
}

// Funzione che seleziona nuovamente tutte le checkbox dei film
function selectAllFilms() {
    var checkboxes = document.querySelectorAll('#film-filters input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = true;
    }
}




// MODIFICARE LINEE PERCORSI

// Funzione che aggiorna marker e percorsi
// in base alla narrativa selezionata e ai film selezionati
function updateMap() {
    // Recupero i film selezionati
    var selectedFilms = getSelectedFilms();
    // Creo due array temporanei per le coordinate
    // delle location attualmente visibili
    var visibleHistoricalRoute = [];
    var visibleWomenRoute = [];
    // Scorro tutte le location
    for (var i = 0; i < locations.length; i++) {
        var currentLocation = locations[i];
        // Controllo se la location appartiene alla narrativa selezionata
        var matchesNarrative =
            currentNarrative === 'all' ||
            currentLocation.narratives.includes(currentNarrative);
        // Controllo se almeno uno dei film della location
        // è tra quelli selezionati
        var matchesFilm = false;
        for (var j = 0; j < currentLocation.films.length; j++) {

            if (selectedFilms.includes(currentLocation.films[j])) {
                matchesFilm = true;
            }
        }
        // Se la location rispetta entrambi i filtri
        if (matchesNarrative && matchesFilm) {
            // Mostro il marker
            markers[i].addTo(map);
            // Se appartiene al percorso Historical,
            // salvo le coordinate
            if (currentLocation.historicalOrder !== null) {

                visibleHistoricalRoute.push({
                    lat: currentLocation.lat,
                    lng: currentLocation.lng,
                    order: currentLocation.historicalOrder
                });
            }
            // Se appartiene al percorso Women,
            // salvo le coordinate
            if (currentLocation.womenOrder !== null) {
                visibleWomenRoute.push({
                    lat: currentLocation.lat,
                    lng: currentLocation.lng,
                    order: currentLocation.womenOrder
                });
            }
        } else {
            // Se non rispetta i filtri, nascondo il marker
            map.removeLayer(markers[i]);
        }
    }
    // Ordino le coordinate secondo l'ordine narrativo
    visibleHistoricalRoute.sort(function(a, b) {
        return a.order - b.order;
    });
    visibleWomenRoute.sort(function(a, b) {
        return a.order - b.order;
    });
    // Tolgo le vecchie linee dalla mappa
    map.removeLayer(historicalLine);
    map.removeLayer(womenLine);
    // Ricreo le linee usando solo le location visibili
    historicalLine = L.polyline(visibleHistoricalRoute, {
        color: 'blue'
    });
    womenLine = L.polyline(visibleWomenRoute, {
        color: 'red'
    });
    // Decido quali linee mostrare
    if (currentNarrative === 'historical') {
        historicalLine.addTo(map);
    } else if (currentNarrative === 'women') {
        womenLine.addTo(map);
    } else {
        // In "All" mostro entrambe
        historicalLine.addTo(map);
        womenLine.addTo(map);
    }
}



// PER FAR FUNZIONARE checkbox
// Seleziono tutte le checkbox dei film
var filmCheckboxes = document.querySelectorAll('#film-filters input[type="checkbox"]');
// Scorro tutte le checkbox
for (var i = 0; i < filmCheckboxes.length; i++) {
    // Quando cambia lo stato di una checkbox
    filmCheckboxes[i].addEventListener('change', function() {
        // Aggiorno la mappa in base ai filtri attivi
        updateMap();
    });
}




//FILTRO X HISTORICAL

var historicalButton = document.getElementById('show-historical');
historicalButton.addEventListener('click', function() {
    // Imposto la narrativa Historical
    currentNarrative = 'historical';
    // Riseleziono tutti i film
    selectAllFilms();
    // Aggiorno marker e linea
    updateMap();
});




// FILTRO X WOMEN
var womenButton = document.getElementById('show-women');
womenButton.addEventListener('click', function() {
    // Imposto la narrativa Women
    currentNarrative = 'women';
    // Riseleziono tutti i film
    selectAllFilms();
    // Aggiorno marker e linea
    updateMap();
});



// FILTRO X TUTTI I PERCORSI

var allButton = document.getElementById('show-all');
allButton.addEventListener('click', function() {
    // Torno alla visualizzazione generale
    currentNarrative = 'all';
    // Riseleziono tutti i film
    selectAllFilms();
    // Aggiorno marker e mostra entrambe le linee
    updateMap();
});