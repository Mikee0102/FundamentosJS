// Hi! I'm Maik and I'm from Chaloztoz

const name = "Maik";
const city = "Chaloztoz";

console.log("Hi! I'm " + name + "\n I'm from " + city);

console.log('Hi! I\'m ' + name + '\n I\'m from ' + city);

//Template literals
console.log(`Hi! I'm ${ name}
    I'm from ${ city}`);

const message = `Hi! I'm ${ name} I'm from ${ city}`

console.log(message.length);
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.includes('from'));
console.log(message.startsWith('Hi!'));
console.log(message.indexOf("Maik"));
console.log(message.split(' '));
console.log("(￣y▽￣)╭ Ohohoho..... ".repeat(5));