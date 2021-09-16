//14 DEMO : strings

var sentence = "    Template Literals or template strings is teh ability Have multi-line without any funny business.    ";

var url = "http://sadikturan.com/Modern Javascript KURSU sıfırdan ileri seviye";


// cümle kaç karakterlidir?

console.log(sentence.length);

// kaç kelimeden oluşur ?

console.log(sentence.trim().split());

// Tüm cümleyi kücük harfe çevirin

console.log(sentence.toLowerCase())

// Tüm cümleyi büyük harfe çevirin

console.log(sentence.toUpperCase());

// Cümlenin başındaki ve sonundaki boşlukları silin 

console.log(sentence.trim());

// '-' karakterini silin 

console.log(sentence.replace('-',''));


// url'nin içinden str kısmını çıkarınız

var  str = 'http://';

console.log(url.substr(str.length));
console.log(url.slice(str.length));

// url hangi protocol'u kullanmaktadır ? (hhtp,https)

console.log(url.startsWith('http'));
console.log(url.startsWith('https'));

// url '.com' ifadesini içeriyor mu ?

console.log(url.indexOf('.com'));
console.log(url.includes('.com'));

// url string ifadesini geçerli bir url olarak düzenleyiniz.

console.log ( url.toLowerCase()
                 .replace(/ /g,'-')
                 .replace(/ı/g,'i')
                 .replace(/ü/g,'u')
                 .replace(/ö/g,'o')
                 .replace(/ş/g,'s')
                 .replace(/ç/g,'c')


);
