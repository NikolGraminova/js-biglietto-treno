/*Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero (con i prompt() in questo caso).
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo e questo richiederà un minimo di ricerca.).
Il risultato andrà visualizzato prima in console e poi possibilmente in un apposito elemento <p> del mio codice HTML.
BONUS:
Il programma dovrà mostrare una form da compilare con cui chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
Il recap dei dati e l'output del prezzo finale va stampato in pagina.*/




function submitForm(event) {

    event.preventDefault();


    let userInfo = document.getElementById("inputInfo").value;
    let userKilometers = Math.floor(document.getElementById("inputKilometers").value);
    let userAge = Math.floor(document.getElementById("userAge").value);
    let price = userKilometers * 0.21;

    if (userAge >= 65) {
        price = price * 60 / 100;
    } else if (userAge < 18) {
        price = price * 80 / 100;
    }

    document.getElementById("divForm").classList.add("d-none");
    document.getElementById("divTicket").classList.remove("d-none");

    document.getElementById("userInfo").innerHTML = userInfo;
    document.getElementById("finalPrice").innerHTML = price;
}