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

     affichage();
     gameOver();
 });
 document.body.querySelector("#frapper").addEventListener("click", function(e) {

     affichage();
     gameOver();
 });

 document.body.querySelector("#attack2").addEventListener("click", function(e) {
     attack();
     affichage();
     gameOver();
 });

 document.body.querySelector("#arrow").addEventListener("click", function(e) {

     affichage();
     gameOver();
 });
 document.body.querySelector("#gun").addEventListener("click", function(e) {

     affichage();
     gameOver();
 });

 affichage()

 function gameOver() {
     if (tombrider.sante <= 0) {
         alert("GAME OVER !");
     }
     if (monstre.sante <= 0) {
         alert("GAME OVER !");
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