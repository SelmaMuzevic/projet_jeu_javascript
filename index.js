 "use strict";

 let monstre = {
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

 document.body.querySelector("#arrow").addEventListener("click", function(e) {
     arrow();
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
         alert("GAME OVER, THE WINNER IS: MONSTRE !");

     }
     if (monstre.vies <= 0) {
         alert("GAME OVER, THE WINNER IS: TOMBRIDER !");
     }
 }

 function affichage() {
     document.querySelector(".MonstreStats .energie").textContent = monstre.energie;
     document.querySelector(".MonstreStats .vies").textContent = monstre.vies;
     document.querySelector(".MonstreStats .coeur").textContent = monstre.coeur;
     document.querySelector(".MonstreStats .sante").textContent = monstre.sante;

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

     monstre.energie -= 20;
     monstre.vies -= 50;
     monstre.coeur -= 25;
     monstre.sante -= 50;

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

 function arrow() {
     monstre.energie -= 25;
     monstre.vies -= 20;
     monstre.coeur -= 15;
     monstre.sante -= 40;
 }

 function gun() {
     monstre.energie -= 20;
     monstre.vies -= 5;
     monstre.coeur -= 25;
     monstre.sante -= 30;
 }