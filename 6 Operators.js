//#6 OPERATORS

let val;
const a=10;
const b=5;
const c=5;
let   d=3;


// 1- Arithmetic operators

val = a+b;
val = a-b;
val = a*b;
val = a/b;
val = a%b;
val = d++;
val = ++d;
val = --d;
val = d--;


// 2- Assignment operators

val = a;
val +=a; // val = val + a;
val -=a; // val = val - a;
val *=a; // val = val * a;
val /=a; // val = val / a;
val %a;  // val = val % a;


// 3- Comparison operators

val = a==b;
val = b==c;
val = b===c; // değer ve type kontorlü
val = 5=== '5';
val = a!=b;
val = a!==b;
val = a>b;
val = b<a;
val = a>=b;
val = 5>=5;
val = a<=b;

// 4- Logical operators

// && (And)
 // true && true => true
 // true && false => false
 // false && false => false


 val = (a>b) && (a>c)
 

// || (Or)

val = (a>b) || (a>c)

// ! (Not)
 
// !true=>false
// false=>true

val = !(a>b)


console.log(val);
console.log(typeof val);

