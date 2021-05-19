'use strict';

// Closure
function greeter(name) {
    const myname = name;
    const hello = function () {
        return "Hello " + myname;
    }
    return hello;
}

const helloTom = greeter("Tom");
const helloJerry = greeter("Jerry");
console.log(helloTom());
console.log(helloJerry());

// le due funzioni ricordano la loro closure,
// hanno lo stesso codice ma riferimenti a variabili
// diverse