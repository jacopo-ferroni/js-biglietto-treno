/* 
chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero
calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65. 
*/

// età del passeggero
const age = parseInt(prompt(`Quanti anni ha il passeggero?`))
console.log(age);

document.getElementById(`age`).innerHTML = (`Il passeggero ha ` + age + ` anni!`);

// chiedere all’utente il numero di chilometri che vuole percorrere
const distance = parseInt(prompt(`Quanti chilometri vuole percorrere?`));
console.log(distance);

document.getElementById(`distance`).innerHTML = (`Il passeggero vuole percorrere ` + distance + ` Km!`);

// prezzo normale se non ci fossero sconti
let normal_price = distance * 0.21;
console.log(normal_price);

document.getElementById(`normal-price1`).innerHTML = (`Il prezzo normale senza sconti è ` + normal_price + ` €.`);

if ((age >= 0) && (age <= 17)) {
    const scount20 = ((normal_price * 20) / 100);
    console.log(scount20);
    document.getElementById(`scount1`).innerHTML = (`Poichè minorenne lo sconto è di ` + scount20.toFixed(2) + ` €.`);
    normal_price = normal_price - scount20;
    console.log(normal_price);
    document.getElementById(`normal-price2`).innerHTML = (`Il prezzo totale da pagare è di ` + normal_price.toFixed(2) + ` €.`);
}

else if (age >= 65) {
    const scount40 = ((normal_price * 40) / 100);
    console.log(scount40);
    document.getElementById(`scount2`).innerHTML = (`Poichè over 65 lo sconto è di ` + scount40.toFixed(2) + ` €.`);
    normal_price = normal_price - scount40;
    console.log(normal_price);
    document.getElementById(`normal-price3`).innerHTML = (`Il prezzo totale da pagare è di ` + normal_price.toFixed(2) + ` €.`);
}

else {
    document.getElementById(`normal-price4`).innerHTML = (`Il prezzo totale da pagare è di ` + normal_price.toFixed(2) + ` €.`);
}