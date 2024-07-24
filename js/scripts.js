// funzioni

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}
let randomNmb = [];
// visualizzare in pagina 5 numeri casuali
let i = 1
while (i <= 5){ // ciclo indefinito per la generazione di numeri diversi tra loro
    let num = getRndInteger(1 , 50);
    if (!randomNmb.includes(num)){
        randomNmb.push (num); // pusho i numeri nell'array solo se sono diversi tra loro
        i++;
    } 
}

document.getElementById('rndNmb').innerHTML += randomNmb; // stampo i numeri in html
console.log('i 5 numeri casuali sono:', randomNmb);

const clock = setInterval (function(){
    document.getElementById('rndNmb').innerHTML = ' ';
}, 5000)





