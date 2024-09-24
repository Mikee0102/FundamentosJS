// if else if else

let age = 18;
if (age >= 18) {
    console.log("Es mayor de edad");
} else if (age >15) {
    console.log("");
} else {
    console.log("");
}

//Truthy and Falsy
// myNum = 0 --> false
//myNum > 0 --> true
//myStr = '' --> false
//myStr = 'Hi' --> true

// Asignar Usuario por defecto
let username = '';
let defaulname;

if (username) {
    defaulname = username;
} else {
    defaulname = 'Invitado';
}

if (username) {
    defaulname = username;
} else {
    defaulname = 'Invitado';
}

defaulname = username || 'Invitado';

(age >=18)
        ? console.log('Es mayor de edad')
        : console.log('No es mayor de edad');


/**
 * expr? true : false;
 */
defaulname = username ? username : 'Invitado';
console.log(defaulname);

//swich case
const day = Math.floor(Math.random() * 7);
switch (day) {
    case 0:
        console.log('Es Domingo');
        break;
    case 1:
        console.log('Es Lunes');
        break;
    case 2:
        console.log('Es martes');
        break;
    case 3:
        console.log('Es Miércoles');
        break;
    case 4:
        console.log('Es Jueves');
        break;
    case 5:
        console.log('Es Viernes');
        break;
    case 6:
        console.log('Es Sábado');
        break;
    default:
        console.log('Día no válido');
        break;
}