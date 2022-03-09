// console check
console.log('JS OK!')

/*  consegna:
    Mail
    Chiedi all’utente la sua email,
    controlla che sia nella lista di chi può accedere,
    stampa un messaggio appropriato sull’esito del controllo.
    Gioco dei dadi
    Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
    Stabilire il vincitore, in base a chi fa il punteggio più alto.         
*/

const buttonLogin = document.querySelector('.login > button');
buttonLogin.addEventListener('click', function(){

    const listEmail = ["danny.gelso@gmail.com", "daniele.gelsomino@gmail.com, daniele.gelso@icloud.com"];

    const imputLogin = document.querySelector(".login .email");

    const emailValue = imputLogin.value;

    for (let i = 0; i < listEmail.length; i++) {

        if (emailValue === listEmail[i]) {
            alert("Accesso eseguito!");
            break;
            
        } else {
            alert("Accesso negato! questo indirizzo email non è associato ad alcun utente perciò non è valido. Inserisci un indirizzo email corretto");
            break;
            
        }
    }

})
