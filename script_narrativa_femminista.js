/*PULSANTI CHE TELL ME LESS, MORE, DID YOU KNOW 
    buttonElement: rappresenta esattamente il bottone su cui si clicca.
    .closest('.story-content'): guarda alla struttura HTML a partire dal bottone per trovare il box che contiene tutto il testo di quella specifica scena (evitando di modificare per errore i testi delle altre scene).
    querySelector(...): Cerca un elemento specifico all'interno di quel box e ne modifica la proprietà CSS (style.display) per renderlo visibile (block) o nasconderlo (none). */

function showLess(buttonElement) {
    const parentBox = buttonElement.closest('.story-content'); //trova lo story-content più vicino al button cliccato
    parentBox.querySelector('.text-less').style.display = 'block'; //rende visibile il text less impostando il display su block
    parentBox.querySelector('.text-more').style.display = 'none';  //nasconde il text more impostando il display su none
    parentBox.querySelector('.text-didyouknow').style.display = 'none'; //nasconde il text did you know impostando il display su none
}

function showMore(buttonElement) {
    const parentBox = buttonElement.closest('.story-content');
    parentBox.querySelector('.text-less').style.display = 'none';
    parentBox.querySelector('.text-more').style.display = 'block';
    parentBox.querySelector('.text-didyouknow').style.display = 'none';
}

function showDidYouKnow(buttonElement) {
    const parentBox = buttonElement.closest('.story-content');
    parentBox.querySelector('.text-less').style.display = 'none';
    parentBox.querySelector('.text-more').style.display = 'none';
    parentBox.querySelector('.text-didyouknow').style.display = 'block';
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

