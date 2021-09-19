//19 Demo Conditonal Statements


// 20/04/2017 Tarihinde trafiğe çıkan bir aracın servis bakım süreleri aşağıda verilmiştir.Bu bilgilere göre servis uyarısı veriniz

// 1.Bakım : 1 Yıl
// 2.Bakım : 2 Yıl
// 3.Bakım : 3 Yıl


//1

var  trafigeCikis = new Date('04/20/2016');
trafigeCikis.setHours(0,0,0,0);

var  trafiktekiMs = Date.now() - trafigeCikis.getTime();
var trafiktekiGun=Math.floor(trafiktekiMs/(1000*60*60*24));


if (trafiktekiGun<=365){
    console.log('1.servis bakım gününüz gelmiştir.');


}else if (trafiktekiGun>365 && trafiktekiGun <=365*2){
    console.log('2.servis bakım gününüz gelmiştir');

}else if (trafiktekiGun>365*2 && trafiktekiGun<=365*3){
    console.log('3. servis bakım gününz gelmiştir');
}else{
    console.log('bilinmeyen hata')
}
    

console.log(trafiktekiGun)


//2

var result = prompt("Who's there ?");

if ( result == 'cancel'){
    console.log('Canceled')
}
else if ( result == 'admin'){
    console.log('Welcome Admin')

var password = prompt('enter you password');

if ( password == 'cancel'){
    console.log('Cancelled')
}else if(password == '1234'){
    console.log('Welcome Admin')
}else{
    console.log('wrong password')
}


}else{
    console.log('I dont know you')
}