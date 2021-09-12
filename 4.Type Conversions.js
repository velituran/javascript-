//#4 Type Conversions

let val;

//-Number to string

val = String(10);

//-bool to string

val = String(true);

//-date to string

val = String (new Date());

//-array to string

val = String([1,2,3,4]);

//-toString()

val = (10).toString();
val =(false).toString();


//-String to Number

val = Number("10");
val = Number(true);
val = Number(false);
val = Number(null);
val = Number("a");
val = Number([1,2,3,4]);

//-ParseInt
//-ParseFloat

val = parseInt("10");
val = parseInt("10.5");
val = parseFloat("10.5");


console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));
