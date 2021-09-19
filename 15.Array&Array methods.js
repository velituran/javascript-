// 15 Array&Array methods

// Arrays 

let names = ['çınar','sena','ada','yiğit'];

let years = [2017,1999,2012,2010];

let mix = ['sadık','turan',1983,null,undefined,'sinema','kitap'];


// get array item

console.log(names[0]);
console.log(names[3]);

// set array item

names [names.length]='emel';


// add item

years.push(1986);
years.unshift(1986);


// remove item

years.pop();
years.shift();

// indexof

let index = names.indexOf('ada');
console.log('index:'+index);

// reverse

names.reverse();

// sort

years.sort();


// concat

let val = years.concat(names);

console.log(val);


// splice

names.splice(2,0,'seda');



function over18(year){

    let age = 2018-year
    return age>=18;

}


// find

let val = years.find(over18);


// filter


let val = years.filter(over18);

console.log (val);



console.log(names.length);
console.log(names);
console.log(typeof names);
