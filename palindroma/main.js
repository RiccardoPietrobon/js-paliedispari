//Palindroma
//Chiedere all'utente di inserire una parola
//Creare una funzione per capire se la parola inserita è palindroma

//funzione bottone
const mybutton = document.getElementById("push");

//costante per l'esito della parola
const esito = document.getElementById("result");

//bottone
mybutton.addEventListener("click", function () {

    //inserisci parola
    let parola = document.getElementById("inserisci").value;
    console.log(parola);

    //applico la funzione
    parolaInversa = invertiParola(parola);

    //confronto
    if (parola == parolaInversa) {
        esito.innerHTML = 'la parola è palindroma';
    } else {
        esito.innerHTML = 'la parola non è palindroma';
    }

    //funzione per invertire la parola
    function invertiParola(word) {
        let parolaInversa = '';

        let i = word.length - 1;

        while (i >= 0) {
            parolaInversa += word[i];
            i--;
        }

        return parolaInversa;
    }

})
