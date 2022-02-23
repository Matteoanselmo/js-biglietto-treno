
/*CHIEDO ALL'UTENTE GLI ANNI E STAMPO SU CONSOLE E SUL ID */ 
const userAge = parseInt(prompt('Quanti anni hai?'));
console.log(userAge);
document.getElementById('my-age').innerHTML += `${userAge} anni`;
/*CHIEDO ALL'UTENTE I KM E STAMPO SU CONSOLE E SUL ID */ 
const userKm = parseFloat(prompt('Quanti km vuoi percorrere?'));
console.log(userKm);
document.getElementById('my-km').innerHTML += `${userKm} km`;

/*INIZIO CICLO COSTO BIGLIETTO */

let ticketPrice = ((userKm * 0.21).toFixed(2));
let priceDifference;

if (userAge < 18){
    priceDifference = ((ticketPrice * 20) / 100).toFixed(2);
    document.getElementById('my-ticket-total-price').innerHTML += `${ticketPrice} €`;
    ticketPrice = (ticketPrice - priceDifference).toFixed(2);
    console.log(ticketPrice);
    document.getElementById('my-ticket-price').innerHTML += `${ticketPrice} €`;
    document.getElementById('my-discount').innerHTML = `Sei piccolo quindi hai ${priceDifference}€ di sconto`;
} else if (userAge >= 65){
    priceDifference = ((ticketPrice * 40) / 100).toFixed(2);
    document.getElementById('my-ticket-total-price').innerHTML += `${ticketPrice} €`;
    ticketPrice = (ticketPrice - priceDifference).toFixed(2);
    console.log(ticketPrice);
    document.getElementById('my-ticket-price').innerHTML += `${ticketPrice} €`;
    document.getElementById('my-discount').innerHTML = `Hai quasi un piede nella fossa quindi hai  ${priceDifference}€ di sconto`;
} else {
    console.log(ticketPrice);
    document.getElementById('my-ticket-total-price').innerHTML += `${ticketPrice} €`;
    document.getElementById('my-ticket-price').innerHTML += `${ticketPrice} €`;
    document.getElementById('my-discount').innerHTML = `Stai a posto nessuno sconto!`;
}