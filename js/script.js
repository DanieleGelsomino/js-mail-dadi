// console check
console.log("JS OK!");

/*  consegna:
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.         
*/

// Mail 
const buttonLogin = document.querySelector(".login > button");
buttonLogin.addEventListener("click", function () {
  const listEmail = [
    "danny.gelso@gmail.com",
    "daniele.gelsomino@gmail.com, daniele.gelso@icloud.com",
  ];
  console.log('lista email valide: ' + listEmail);

  const imputLogin = document.querySelector(".login .email");

  const emailValue = imputLogin.value;

  for (let i = 0; i < listEmail.length; i++) {
    if (emailValue === listEmail[i]) {
      alert("Accesso eseguito!");
      console.log('email inserita: ' + emailValue)
      break;
    } else {
      alert(
        "Accesso negato! Questo indirizzo email non è associato ad un utente registrato perciò non è valido. Inserisci un indirizzo email corretto"
      );
      console.log('email inserita: ' + emailValue)
      break;
    }
  }
});

// Gioco dei dadi

let player = Math.floor((Math.random() * 6) + 1);
console.log(player);

const containerNumber = document.querySelector(".game");

const element = `<div id="playerone" class="game">${player}</div>`;
containerNumber.innerHTML += element;

let com = Math.floor((Math.random() * 6) + 1);
console.log(com);





