 "use strict";

 let perso1 = {
     energie: 200,
     vies: 100,
     coeur: 50,
     sante: 300
 };

 let tombrider = {
     energie: 200,
     vies: 100,
     coeur: 50,
     sante: 300
 };


 document.body.querySelector("#attack").addEventListener("click", function(e) {
     attack();
     affichage();
     gameOver();
 });

 document.body.querySelector("#crier").addEventListener("click", function(e) {
     crier();
     affichage();
     gameOver();
 });
 document.body.querySelector("#frapper").addEventListener("click", function(e) {
     frapper();
     affichage();
     gameOver();
 });

 document.body.querySelector("#attack2").addEventListener("click", function(e) {
     attack2();
     affichage();
     gameOver();
 });

 document.body.querySelector("#kick").addEventListener("click", function(e) {
     kick();
     affichage();
     gameOver();
 });
 document.body.querySelector("#gun").addEventListener("click", function(e) {
     gun();
     affichage();
     gameOver();
 });

 affichage()

 function gameOver() {
     if (tombrider.sante <= 0) {
         alert("GAME OVER, THE WINNER IS: ASTERIX !");

     }
     if (perso1.vies <= 0) {
         alert("GAME OVER, THE WINNER IS: TOMBRIDER !");
     }
 }

 function affichage() {
     document.querySelector(".perso1Stats .energie").textContent = perso1.energie;
     document.querySelector(".perso1Stats .vies").textContent = perso1.vies;
     document.querySelector(".perso1Stats .coeur").textContent = perso1.coeur;
     document.querySelector(".perso1Stats .sante").textContent = perso1.sante;

     document.querySelector(".TombriderStats .energie").textContent = tombrider.energie;
     document.querySelector(".TombriderStats .vies").textContent = tombrider.vies;
     document.querySelector(".TombriderStats .coeur").textContent = tombrider.coeur;
     document.querySelector(".TombriderStats .sante").textContent = tombrider.sante;
 }

 function attack() {

     tombrider.energie -= 20;
     tombrider.vies -= 50;
     tombrider.coeur -= 25;
     tombrider.sante -= 50;
 }

 function attack2() {

     perso1.energie -= 20;
     perso1.vies -= 50;
     perso1.coeur -= 25;
     perso1.sante -= 50;

 }

 function crier() {
     tombrider.energie -= 15;
     tombrider.vies -= 10;
     tombrider.coeur -= 5;
     tombrider.sante -= 10;
 }

 function frapper() {
     tombrider.energie -= 20;
     tombrider.vies -= 10;
     tombrider.coeur -= 5;
     tombrider.sante -= 10;
 }

 function kick() {
     perso1.energie -= 25;
     perso1.vies -= 20;
     perso1.coeur -= 15;
     perso1.sante -= 40;
 }

 function gun() {
     perso1.energie -= 20;
     perso1.vies -= 5;
     perso1.coeur -= 25;
     perso1.sante -= 30;
 }