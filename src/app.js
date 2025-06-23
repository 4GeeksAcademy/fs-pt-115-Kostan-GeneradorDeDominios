import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
 let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];

  let extensiones = ['.com', '.net', '.org', '.io'];

  let domainHacks= extensiones.map(ext => {
    return pronoun.map(pr => {
      return adj.map(ad => {
        return noun.map(n => {
          return pr + ad + n + ext;
        });
      });
    });
  }).flat(3);

  for (let i = 0; i < pronoun.length; i++) {
    for (let o = 0; o < adj.length; o++) {
      for (let p = 0; p < noun.length; p++) {
       let element = pronoun[i] + adj[o] + noun[p] + extensiones[Math.floor(Math.random() * extensiones.length)];
        console.log(element);
      }
    } 
  }