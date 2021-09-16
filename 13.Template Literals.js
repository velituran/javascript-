
const fullName = 'Veli Turan';
const city = 'Ankara'
const yearOfBirth = 1994;

let val;

val = 'my name is '+fullName+
      'I\'m '+(2021-yearOfBirth)+' years old'+
      'and I live in '+city;

     
// ternary operator
 val = `my name is ${fullName}
  I'm ${(2021-yearOfBirth>=18)? 'over18': 'under18'} years old and
  I live in ${city}`;  



console.log(val);