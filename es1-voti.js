"use strict";

const myScores = [18, 30, 25, 28, 24, 30, 27];

//COPIA
//const modifiedScores = array.from(myScores);
const modifiedScores = [...myScores];

//Eliminare i due voti più bassi
modifiedScores.sort();
modifiedScores.shift();
modifiedScores.shift();

//Trovare la media e inserirla due volte
// a fine array

let avg = 0;

//for (let i=0; i<modifiedScores.length; i++)
for (const val of modifiedScores)   
    avg += val; 

avg = avg / modifiedScores.length;
modifiedScores.push(avg, avg);

//debugger;

console.log(myScores);
console.log(modifiedScores);

debugger;

