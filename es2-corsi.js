"use strict";

//per gli a capo usi template literals

const courseNames = `Web Applications I, 
Computer Architectures, 
Data Science and Database Technology, 
Computer network technologies and services, 
Information systems security, 
Software engineering, 
System and device programming`;

const modif = courseNames.replace(/\n/g, '');
const courses = modif.split(',');

/*
const c = [];
for (let val of courses){
    val = val.trim();
    c.push(val);
}
console.log(c);
*/
// Se devi modificare ti serve l'indice, il for...of fa una copia di val
for (let i=0; i<courses.length;i++)
    courses[i] = courses[i].trim();

console.log(courses);

// Acronimi

const acronyms = [];
for (const course of courses){
    let s = course[0].toUpperCase();
    for (let i=1; i<course.length; i++){
        if (course[i-1]===' ')
            s += course[i].toUpperCase();
    }
    acronyms.push(s);
}
console.log(acronyms);

debugger;