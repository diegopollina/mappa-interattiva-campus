// Funzione invocata al cambio del menu a tendina
function evidenziaEdificioDaMenu() {
    rimuoviSelezionePrecedente();
    const selectMenu = document.getElementById("select-edificio");
    const idSelezionato = selectMenu.value;
    if (idSelezionato) {
        // sfruttiamo getElementById per trovare l'elemento SVG nel DOM
        const elementoEdificio = document.getElementById(idSelezionato);
        if (elementoEdificio) {
            elementoEdificio.classList.add("attivo");
        }
    }
}

// Funzione invocata cliccando direttamente un edificio sulla mappa SVG
function selezionaDaMappa (idEdificio) {
    const selectMenu = document.getElementById("select-edificio");
    selectMenu.value = idEdificio;
    evidenziaEdificioDaMenu();
}

// Funzione di servizio per pulire la selezione precedente
function rimuoviSelezionePrecedente() {
    const edificioAttivo = document.querySelector(".attivo");
    if (edificioAttivo) {
        edificioAttivo.classList.remove("attivo");
    }
}