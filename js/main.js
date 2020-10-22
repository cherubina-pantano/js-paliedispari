/*
Palindroma
Chiedere all'utente di inserire una parola
Creare una funzione per invertire i caratteri di una stringa.
Capire se la parola inserita è palindroma
*/

// Dati inseriti dall'utente
var userWord = prompt('Inserisci una parola');
console.log(userWord);

// Invocazione della funzione creata
var reverse =  wordReverse(userWord);
console.log(reverse);

// Condizione per verificare se la parola è palindroma o meno
if (reverse === userWord) {
  console.log('La parola è palindroma');
}
else {
  console.log('la parola non è palindroma');
}

// Creazione funzione per invertire i caratteri della stringa
function wordReverse(word) {
  var inverti = '';

  for (var i = word.length - 1; i >= 0; i--) {
    inverti += word[i];
  }

  return inverti;
}
