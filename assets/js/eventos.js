var nuevoTweet = document.getElementById('tweet');
var imprimirTweet = document.getElementById('imprimirTweet');
var enviadoPor = document.getElementById('tweetDe');
var contar = 0;
function enviarTweet(){
  var tweet = document.createElement('p');
  var de = document.createElement('p');
  var espacio = document.createElement('hr');
  tweet.innerHTML = nuevoTweet.value;
  imprimirTweet.appendChild(tweet);
  de.innerHTML = 'De: ' + enviadoPor.value;
  imprimirTweet.appendChild(de);
  imprimirTweet.appendChild(espacio);
}


function contarClicks(){
  contar += 1;
  var contador = getElementById('contador');
  contador.innerText= "contador de Clicks " + contar;

}
document.addEventListener('click', contador);
