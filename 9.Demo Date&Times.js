// 9 Demo: Dates & Times

//** Şimdiki tarihin gün ay ve yıl bilgisini yazdırınız.

var dt = new Date();

console.log(dt);
console.log(dt.getFullYear());
console.log(dt.getMonth()+1);
console.log(dt.getDate());


//** Tarih ve saat bilgisini içeren bir Date objesi oluşturunuz.

var dtA = new Date('10/15/2022  22:20:15');
console.log(dtA);

var dtB = new Date(2023,8,25,23,00,14);
console.log(dtB);


// 1/1/1990 tarihinden bir gün öncesini gösteriniz
var dtC = new Date('1/1/1990');
var dayofMonth = dtC.getDate();
dtC.setDate(dayofMonth-1);
console.log(dtC);


// iki tarih arasındaki geçen zamanı bulunuz.

var start = new Date('1/1/1990');
var end = new Date('1/1/1991');

var milisecond = end - start;

var saniye = milisecond / 1000;
var dakika = saniye / 60;
var saat = dakika / 60;
var gün = saat / 24;

console.log('Saniye:'+saniye);
console.log('Dakika:'+dakika);
console.log('Saat:'+saat);
console.log('Gün:'+gün);


//** Yaş hesaplama nasıl yapılır.

var birthday = new Date('8/1/1985');

var ageDifMs = Date.now() - birthday.getTime();

var ageDate = new Date(ageDifMs);

console.log(ageDate.getUTCFullYear()-1970);


//console.log(birthday.getTime());
//console.log(Date.now();)


/* Her yıl mayıs ayının 2. haftası pazar günü kutlanan anneler günü 2022 yılında 
ne zaman kutlanacaktır.*/

var annelerGunu = new Date();

annelerGunu.setHours(0,0,0,0);
annelerGunu.setFullYear(2022);
annelerGunu.setDate(1);
annelerGunu.setMonth(4);

console.log(annelerGunu.getDay());

while (annelerGunu.getDay()!=0){
    annelerGunu.setDate(annelerGunu.getDate()+1);

}
annelerGunu.setDate(annelerGunu.getDate()+7)

console.log(annelerGunu);




