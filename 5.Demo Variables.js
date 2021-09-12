//#5 Demo: Variables


//** Bir müşterinin aşağıdaki bilgileri için değişken oluşturunuz

//** Müşteri adı
var CustomerName="Veli";
//** Müşteri soyadı
var customerLastName="Turan";
//** Müşteri tc kimlik
var musteriId="123456789";
//** Müşteri sipariş toplamı
var total=205.6;
//** Müşteri cinsiyet
var gender=(false) // erkek true,kadın false
//** Müşteri adres bilgisi
var address={
    city:'Ankara',
    district:'Cankaya',
    body:'Beytepe Mah'
}
//** Müşteri hobiler
var hobbies=["Sinema","Kitap","Spor"];

//** Aşağıdaki Siparişlerin Toplamını Hesaplayınız

var order1=Number('100');
var order2=Number('150');

var totralOrder=order1+order2

console.log(totralOrder);

//** Aşağıdaki Siparişlerin Toplamını Hesaplayınız

var order3=Number('100.2');
var order4=Number('150.5');

var totalOrder2=order3+order4

console.log(totalOrder2);

//** Aşağıdaki Siparişlerin Toplamını tam sayı olarak Hesaplayınız

var order4=parseInt('100.2');
var order5=parseInt('150.5');

var totralOrder3 = order4+order5

console.log(totralOrder3);

//**Aşağıdaki Verilen Doğum Yılına göre yaş hesaplayınız 

var yearOfBirth=1986;

console.log(new Date().getFullYear()-yearOfBirth);

//** Aşağıdaki ifadenin karakter satısını bulunuz

var kurs="Modern JavaScript Kursu";

console.log(kurs.length);