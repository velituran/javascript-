//25 Functions


function yasHesapla(dogumYili){
    return 2018-dogumYili;
}

let val = yasHesapla(1983);

console.log(val)

let ageAda = yasHesapla(2012)
let ageYigit = yasHesapla(2010)
let ageÇınar = yasHesapla(2017)

console.log(ageAda)
console.log(ageYigit)
console.log(ageÇınar)


function EmekliligeKacYilKaldi(dogumYili,isim){
    let yas = yasHesapla(dogumYili);
    let emeklilik = 65-yas;

   if (emeklilik>0){
       console.log(`${isim} emekli olmana ${emeklilik} yıl kaldı.`)
    }else{
        console.log('Zaten emekli oldunuz')
    }

}


EmekliligeKacYilKaldi(2012,'Ada')
EmekliligeKacYilKaldi(2010,'Yigit')
EmekliligeKacYilKaldi(2017,'Çınar')

