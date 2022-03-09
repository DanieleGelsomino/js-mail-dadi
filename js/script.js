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
const containerNumber = document.querySelector(".game");

const player = Math.floor((Math.random() * 6) + 1);
console.log(player);

const com = Math.floor((Math.random() * 6) + 1);
console.log(com);

const buttonStart = document.getElementById('start-game');
buttonStart.addEventListener("click", function () {

if (player < com){
    console.log('Hai Perso!');
    const playerNumber = `<div id="player" class="game">${player}</div>`;
    containerNumber.innerHTML += playerNumber;
    const comNumber = `<div id="computer" class="game">${com}</div>`;
    containerNumber.innerHTML += comNumber;
    alert('Hai Perso!');
    
    
    
} else if (player === com) {
    console.log('Pareggio!');
    const playerNumber = `<div id="player" class="game">${player}</div>`;
    containerNumber.innerHTML += playerNumber;
    const comNumber = `<div id="computer" class="game">${com}</div>`;
    containerNumber.innerHTML += comNumber;
    alert('Pareggio!');
   

} else {
    console.log('Hai Vinto!');
    const playerNumber = `<div id="player" class="game">${player}</div>`;
    containerNumber.innerHTML += playerNumber;
    const comNumber = `<div id="computer" class="game">${com}</div>`;
    containerNumber.innerHTML += comNumber;
    alert('Hai Vinto!');    
    
} 

})