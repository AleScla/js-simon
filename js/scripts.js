// funzioni

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let randomNmb = [];
let userArray = [];
let userNmb
let contatore = 5
let i = 1
let k = 1
// visualizzare in pagina 5 numeri casuali

while (i <= 5){ // ciclo indefinito per la generazione di numeri diversi tra loro
    let num = getRndInteger(1 , 50);
    if (!randomNmb.includes(num)){
        randomNmb.push (num); // pusho i numeri nell'array solo se sono diversi tra loro
        i++;
    } 
}

document.getElementById('rndNmb').innerHTML += randomNmb; // stampo i numeri in html
console.log('i 5 numeri casuali sono:', randomNmb);
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, 
// i numeri che ha visto precedentemente, tramite il prompt().


let clock = setInterval (function(){
    document.getElementById('rndNmb').innerHTML = ' ';
    if (contatore == 0){
        clearInterval(clock);
        clock = null;
    }
    else{
        contatore--;
    }
}, 5000);


// creato un timeout soltanto perchè il prompt spuntava prima di tutto e tutti, mannaggia a lui
setTimeout(function(){
    while (k <= 5){
        userNmb = parseInt(prompt('Inserisci un numero tra 1 e 50'))
        if(isNaN(userNmb) || userArray.includes(userNmb)){
            alert('Valore già inserito o errato! Inserisci un numero tra 1 e 50')
        }
        else if (!userArray.includes(userNmb)){
            userArray.push (userNmb);
            k++
        }
    }
    console.log('userArray è:', userArray);
    let correctNumbers = 0
    for (let j = 0; j < randomNmb.length; j++){ // questo ciclo paragona il valore dell'indice di userArray con quello di RandomNmb
        console.log('j è;', j)
        if (randomNmb.includes(userArray[j])){
           document.getElementById('correct').innerHTML += userArray[j] + ' ';
           correctNumbers++; // variabile contatore che stabilisce QUANTI num hai indovinato
        }
    }
    if(correctNumbers != 0){
        document.getElementById('correct-numbers').innerHTML = 'Hai indovinato: ' + correctNumbers + 'Numeri'
        setTimeout(function(){
            location.reload();
        }, 5000); // refresha la pagina dopo 5 secondi dal risultato
    }
    else {
        document.getElementById('correct-numbers').innerHTML = 'Non hai indovinato proprio niente, sei proprio un R.F.' 
        setTimeout(function(){
            location.reload();
        }, 5000); // refresha la pagina dopo 5 secondi dal risultato
    }
}, 5100);

// FRANCESCO VAI VIA




