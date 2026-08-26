/*PULSANTI CHE TELL ME LESS, MORE, DID YOU KNOW 
    buttonElement: rappresenta esattamente il bottone su cui si clicca.
    .closest('.story-content'): guarda alla struttura HTML a partire dal bottone per trovare il box che contiene tutto il testo di quella specifica scena (evitando di modificare per errore i testi delle altre scene).
    querySelector(...): Cerca un elemento specifico all'interno di quel box e ne modifica la proprietà CSS (style.display) per renderlo visibile (block) o nasconderlo (none). */

function getActiveLevel(parentBox) {
    // Trova quale dei tre livelli ha display 'block' in questo momento
    if (parentBox.querySelector('.level-normal').style.display !== 'none') {
        return parentBox.querySelector('.level-normal');
    } else if (parentBox.querySelector('.level-child').style.display !== 'none') {
        return parentBox.querySelector('.level-child');
    } else {
        return parentBox.querySelector('.level-scholar');
    }
}

function showLess(buttonElement) {
    const parentBox = buttonElement.closest('.story-content');
    const activeLevel = getActiveLevel(parentBox); // Prende il livello visibile

    activeLevel.querySelector('.text-less').style.display = 'block';
    activeLevel.querySelector('.text-more').style.display = 'none';
    activeLevel.querySelector('.text-didyouknow').style.display = 'none';
}

function showMore(buttonElement) {
    const parentBox = buttonElement.closest('.story-content');
    const activeLevel = getActiveLevel(parentBox);

    activeLevel.querySelector('.text-less').style.display = 'none';
    activeLevel.querySelector('.text-more').style.display = 'block';
    activeLevel.querySelector('.text-didyouknow').style.display = 'none';
}

function showDidYouKnow(buttonElement) {
    const parentBox = buttonElement.closest('.story-content');
    const activeLevel = getActiveLevel(parentBox);

    activeLevel.querySelector('.text-less').style.display = 'none';
    activeLevel.querySelector('.text-more').style.display = 'none';
    activeLevel.querySelector('.text-didyouknow').style.display = 'block';
}

/*FRECCE PER ANDARE AVANTI E INDIETRO
    i = numero d'ordine 
    current_scene = scena corrente che si aggiorna ogni volta che si va avanti o indietro */

let current_scene = 0;

function update_scene() {   //prende tutti gli elementi che hanno la classe '.area-immagini' e li mette in una lista 'scene' 
    const scene = document.querySelectorAll('.area-immagini');
    scene.forEach((scena, i) => {   //ciclo foreach che guarda ogni scena 

        scena.style.display = (i === current_scene) ? 'flex' : 'none';     //il "i===current_scene" crea un confronto, che se risulta vero (se l'indice della scena che sto guardando è uguale alla scena corrente imposra il display flex (la mostra), altrimenti none(la nasconde))
    });
}

function next_scene() {
    const scene = document.querySelectorAll('.area-immagini');
    current_scene++; //crea un elenco di tutte le scene presenti nella paginaq
    if (current_scene >= scene.length) {
        current_scene = 0; // Se vuole andare avanti e si trova già all'ultima scena, si ricomincia 
    }
    update_scene();
}

function previous_scene() {
    const scene = document.querySelectorAll('.area-immagini'); // crea un elenco di tutte le scene presenti nella pagina 
    current_scene--; //diminuisce di 1 il numero della scena attuale tornando alla precedente
    if (current_scene < 0) {
        current_scene = scene.length - 1; // Se è alla prima scena, torna all'ultima
    }
    update_scene();
}

/* VISTE: STORY E METADATA */
function showStoryView(buttonElement) {
    const parentBox = buttonElement.closest('.description-container-right');
    parentBox.querySelector('.story-content').style.display = 'flex';
    parentBox.querySelector('.metadata-content').style.display = 'none';
}

function showMetadataView(buttonElement) {
    const parentBox = buttonElement.closest('.description-container-right');
    parentBox.querySelector('.story-content').style.display = 'none';
    parentBox.querySelector('.metadata-content').style.display = 'block';
}

/* DIFFICOLTÀ: NORMAL, CHILD, SCHOLAR */
function showNormal(buttonElement) {
    const parentBox = buttonElement.closest('.story-content');
    parentBox.querySelector('.level-normal').style.display = 'block';
    parentBox.querySelector('.level-child').style.display = 'none';
    parentBox.querySelector('.level-scholar').style.display = 'none';
}

function showChild(buttonElement) {
    const parentBox = buttonElement.closest('.story-content');
    parentBox.querySelector('.level-normal').style.display = 'none';
    parentBox.querySelector('.level-child').style.display = 'block';
    parentBox.querySelector('.level-scholar').style.display = 'none';
}

function showScholar(buttonElement) {
    const parentBox = buttonElement.closest('.story-content');
    parentBox.querySelector('.level-normal').style.display = 'none';
    parentBox.querySelector('.level-child').style.display = 'none';
    parentBox.querySelector('.level-scholar').style.display = 'block';
}

/* FUNZIONI PER APRIRE/CHIUDERE LE FINESTRE METADATI*/
function toggleModal(modalId) {     // dichiara la funzione per aprire o chiudere una finestra specifica per l'id scelto
    const modal = document.getElementById(modalId);    // recupera da HTML l'elemento della finestra corrispondente all'ID e lo memorizza in una costante
    if (modal.style.display === 'flex') {
        modal.style.display = 'none';    // se la finestra è aperta (display: flex) allora la chiude impostando none 
    } else {
        // altrimenti chiude eventuali altre modali aperte prima di aprire questa evitando sovrapposizioni 
        document.querySelectorAll('.modal-overlay').forEach(m => m.style.display = 'none');
        modal.style.display = 'flex';     // Apre la finestra specifica richiesta impostando il suo display su 'flex'
    }
}

/* FUNZIONE PER CHIUDERE LA FINESTRA CLICCANDO SULLO SFONDO */
function closeOnBackground(event, modalId) {
    if (event.target.id === modalId) {   // se il punto esatto in cui si è fatto clic (event.target) corrisponde esattamente all'ID dello sfondo 
        document.getElementById(modalId).style.display = 'none';   // se il click è appunto fuori, allora chiude la finestra impostando il display su none
    }
}