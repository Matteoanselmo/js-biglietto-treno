
/*CHIEDO ALL'UTENTE GLI ANNI E LI STAMPO SU CONSOLE E SUL ID */ 
const userAge = prompt('Quanti anni hai?');
console.log(userAge);
document.getElementById('my-age').innerHTML = userAge;
/*CHIEDO ALL'UTENTE I KM E LI STAMPO SU CONSOLE E SUL ID */ 
const userKm = prompt('Quanti km vuoi percorrere?');
console.log(userKm);
document.getElementById('my-km').innerHTML = userKm;

/*INIZIO CICLO COSTO BIGLIETTO */

let ticketPrice = ( userKm * 0.21);
let priceDifference

if (userAge < 18){
    priceDifference = ((ticketPrice * 20) / 100);
    ticketPrice = ticketPrice - priceDifference;
    console.log(ticketPrice);
    document.getElementById('my-ticket-price').innerHTML = ticketPrice;
} else if (userAge > 65){
    priceDifference = ((ticketPrice * 40) / 100);
    ticketPrice = ticketPrice - priceDifference;
    console.log(ticketPrice);
    document.getElementById('my-ticket-price').innerHTML = ticketPrice;
} else {
    console.log(ticketPrice);
    document.getElementById('my-ticket-price').innerHTML = ticketPrice;
}