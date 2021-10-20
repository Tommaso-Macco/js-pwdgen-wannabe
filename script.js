let nome;

nome = prompt("inserisci il tuo nome");

cognome = prompt("inserisci il tuo cognome");

colorepreferito = prompt("inserisci il tuo colore preferito");

let password = nome + cognome + colorepreferito

document.getElementById("myid").innerHTML ="la tua password è " + password + 21;