// 12 Strings & Strings Methods

// Strings

const firstName = 'Veli';
const lastName =  "Turan";
let hobbies = 'kitap,sinema,spor';
const age = 26;

let val;


// string concatenation

val = firstName + " " +  lastName;

val = 'Veli ';
val += 'Turan';

val = "Benim Adım "+firstName+' '+lastName+" ve yaşım "+age+" Ankara'da yaşıyorum";

// string concat

val = firstName.concat(" ",lastName);

// string length

val = val.length;

// string uppercase -string lowercase

val = val.toUpperCase();
val = val.toLowerCase();

// substring

val = val.substring(3,8);

// slice

val = val.slice(6);

// replace

val = val.replace('Veli','Sadık');

// split

val = hobbies.split(',');


console.log(val);
console.log(typeof val);
