//# 8 Date & Times

// Date Object

let d = new Date();

let birthday = new Date(1990,1,5);



// Set Methods

d.setDate(14);
d.setFullYear(2022);
d.setHours(21);
d.setMonth(9);
d.setMinutes(44);
d.setSeconds(20);

// Get Methods

console.log(d.getDate());
console.log(d.getDay());
console.log(d.getFullYear());
console.log(d.getHours());
console.log(d.getMonth());
console.log(d.getMinutes());
console.log(d.getSeconds());


console.log(d.getFullYear()-birthday.getFullYear());
console.log(d.getMonth()- birthday.getMonth());
console.log(d.getDate() - birthday.getDate());





console.log(d);
console.log(typeof d);