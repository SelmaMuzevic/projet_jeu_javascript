 "use strict";

 let pocahontas = {
     amour: 200,
     bonheur: 100,
     coeur: 50,
     sante: 300
 };

 let john = {
     amour: 200,
     bonheur: 100,
     coeur: 50,
     sante: 300
 }


 document.body.querySelector("#attack").addEventListener("click", function(e) {
     attack();
     affichage();
     gameOver();
 });


 document.body.querySelector("#embrouille").addEventListener("click", function(e) {
     embrouille();
     affichage();
     gameOver();
 });
 document.body.querySelector("#bisous").addEventListener("click", function(e) {
     bisous();
     affichage();
     gameOver();
 });

 affichage()

 function gameOver() {
     if (john.sante <= 0) {
         alert("GAME OVER !");
     }
     if (pocahontas.sante <= 0) {
         alert("GAME OVER !");
     }
 }




 function affichage() {
     document.querySelector(".PocaStats .amour").textContent = pocahontas.amour;
     document.querySelector(".PocaStats .bonheur").textContent = pocahontas.bonheur;
     document.querySelector(".PocaStats .coeur").textContent = pocahontas.coeur;
     document.querySelector(".PocaStats .sante").textContent = pocahontas.sante;

     document.querySelector(".JohnStats .amour").textContent = john.amour;
     document.querySelector(".JohnStats .bonheur").textContent = john.bonheur;
     document.querySelector(".JohnStats .coeur").textContent = john.coeur;
     document.querySelector(".JohnStats .sante").textContent = john.sante;
 }

 function attack() {
     pocahontas.amour -= 20;
     pocahontas.bonheur -= 50;
     pocahontas.coeur -= 25;
     pocahontas.sante -= 50;

     john.amour -= 20;
     john.bonheur -= 50;
     john.coeur -= 25;
     john.sante -= 50;
 }

 function embrouille() {
     pocahontas.amour -= 20;
     pocahontas.bonheur -= 50;
     pocahontas.coeur -= 25;
     pocahontas.sante -= 30;


     john.amour -= 20;
     john.bonheur -= 50;
     john.coeur -= 25;
     john.sante -= 50;
 }

 function bisous() {
     pocahontas.amour += 20;
     pocahontas.bonheur += 50;
     pocahontas.coeur += 25;
     pocahontas.sante = 100;

     john.amour += 20;
     john.bonheur += 50;
     john.coeur += 25;
     john.sante = 100;
 }