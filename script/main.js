// Il computer deve generare 16 numeri casuali tra 1 e 100 (numeri vietati).
// In seguito deve chiedere all’utente di inserire un numero alla volta, sempre compreso tra 1 e 100. L’utente non può inserire più volte lo stesso numero.
// Se il numero è presente nella lista dei numeri generati (numeri vietati), la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
// BONUS:
// All’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2=> tra 1 e 50

var computerNumber = [];
var computerLen = 16;
var userNumber = 0;
var gameExit = false;
var checkDigit = false;
var userNumberList = [];
var difficulty = '';
var toBonus = 0;

// Insert the difficulty
difficulty = parseInt( prompt('Inserisci la Difficolta tra 0 (easy) 1 (medium) 2 (hard)') );

switch (difficulty) {
  case 0:
    toBonus = 100;
    break;
  case 1:
    toBonus = 80;
    break;
  case 2:
    toBonus = 50;
    break;
  // DEBUG
  case 99:
    toBonus = 20;
    break;
  

}

console.log('Difficolta:',difficulty,'range fino a:',toBonus);

computerNumber = randomNumber(computerNumber,computerLen);
console.log('Ecco la lista delle bombe', computerNumber);

// This function gets the computer's random numbers
function randomNumber (number,list){
  number = [];
  for (var i = 0; i < list; i++){
    random = ( Math.floor( (Math.random() * toBonus) + 1 ) ) ;
    
    if (number.includes(random) == false) {
      number.push(random);
    } else {
      i--;
    }

  }
  return number;
}

/* User Cicle */
while (gameExit == false) {

  /* Begin Check on User Number */
  while (checkDigit == false){
    userNumber = parseInt(prompt('Inserisci un numero da 1 a ' + toBonus));
    console.log('Hai scelto il numero', userNumber);
    
    // Begin User Number Validation
    if ( (userNumber < 1) || (userNumber > toBonus) ){
      alert('Attenzione, il numero non rispetta gli intervalli previsti, si prega di digitarlo dinuovo');
    }

    else if ( isNaN(userNumber) ) {
      alert('Ma lo stai facendo di proposito...? Non hai inserito un numero.');
    }

    else if ( userNumberList.includes(userNumber) == true ){
      alert('Volevi ehhh? Il numero è stato già inserito, si prega di digitarlo dinuovo');
    } 

    else if ( userNumberList.includes(userNumber) == false ){
      userNumberList.push(userNumber);
      console.log("Storico Inserimenti",userNumberList);
      checkDigit = true;
    }
    /* End User Number Validation */
    
  }
  /* End Check on User Number */

  
  /* Begin Check User Number with Computer Number */

  // You Lose Condiction
  if (computerNumber.includes(userNumber) == true){
    console.log('*** YOU LOSE *** \n Hai totalizzato: ' + ((userNumberList.length) - 1) + ' punti');
    gameExit = true;
  } 
    // You win Condiction
    else{
      if(userNumberList.length == (toBonus - computerNumber.length)){
        console.log('*** YOU WIN ***');    
        alert('Complimenti, hai totalizzato il massimo dei punti,  vai a festeggiare che stasera si scope \n (termine tecnico non pensare a male!)')
        gameExit = true;
      }
        // Go Ahed Condiction
        else{
          alert('Mancano altri ' + (( (toBonus - computerNumber.length) - userNumberList.length)) + ' numeri per vincere, coraggio!')
          checkDigit = false;
        }
    }

  /* End Check User Number with Computer Number */
  }

