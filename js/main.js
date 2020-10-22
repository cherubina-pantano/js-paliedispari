/*
Pari e Dispari
L'utente sceglie pari o dispari
L'utente inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto in base alla scelta pari o dispari fatta all'inizio dall'utente.
*/

// Dati inseriti dall'utente
var userPariDispari = prompt('Scegli: pari o dispari?');
console.log(userPariDispari);
var userNum = parseInt( prompt('Inserisci un numero da 1 a 5') );
console.log('Numero scelto dal giocatore: ' + userNum);

// Invocazione funzione
var computerNum = computerNumber(1, 5);
console.log('Numero scelto dal computer: ' + computerNum);

// Generazione numero random per computer
function computerNumber(min, max) {
  var random = Math.floor( Math.random() * max - min + 1) + min;

  return random;
}

// Somma
var somma = userNum + computerNum;
console.log('La somma è: '+ somma);

var sommaPariDispari = checkEven(somma);
console.log(sommaPariDispari);

// Somma: è pari o dispari?
function checkEven(number) {
  
  if (number % 2 == 0) {
    return 'La somma è: pari' //true;
  }

  return 'La somma è: dispari' //false;

}




/*******************************************************************************************************************************/
/*
Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per invertire i caratteri di una stringa.
Capire se la parola inserita è palindroma
*/

// Dati inseriti dall'utente
// var userWord = prompt('Inserisci una parola');
// console.log(userWord);
//
// // Invocazione della funzione creata
// var reverse =  wordReverse(userWord);
// console.log(reverse);
//
// // Condizione per verificare se la parola è palindroma o meno
// if (reverse === userWord) {
//   console.log('La parola è palindroma');
// }
// else {
//   console.log('la parola non è palindroma');
// }

// Creazione funzione per invertire i caratteri della stringa
// function wordReverse(word) {
//   /* methods:
//   "split" -  prende i caratteri stringa e li trasforma in array
//   "reverse" - inverte i caratteri array
//   "join" - trasforma array di nuovo in stringa
//   */
//
//   var inverti = word.split('').reverse().join('');
//
//
//   // var inverti = '';
//   //
//   // for (var i = word.length - 1; i >= 0; i--) {
//   //   inverti += word[i];
//   // }
//
//   return inverti;
// }
