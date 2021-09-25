// 27 Demo :Functions

var hesapA={
    ad:'Sena Turan',
    hesapNo:'12345678',
    bakiye:2000,
    ekHesap:1000
}

var hesapB ={
    ad:'Emel Turan',
    hesapNo:'123456789',
    bakiye:3000,
    ekHesap:2000
}


function paraCek(hesap,miktar){
    console.log(`Merhaba ${hesap.ad}`)

    if(hesap.bakiye>=miktar){
        hesap.bakiye=hesap.bakiye-miktar;

        console.log('Paranızı Alabilirsiniz.')
    }else{
        var toplam = hesap.bakiye+hesap.ekHesap;
        if(toplam>=miktar){
            if(confirm('ek hesabınızı kullanmak ister misinz.')){
                console.log('Paranızı Alabilirsiniz.')

                var bakiye = hesap.bakiye;
                var ekhesap = miktar-bakiye;
                hesap.bakiye=0;
                hesap.ekhesap=hesap.ekhesap-ekhesap;

            }else{
                console.log(`${hesap.hesapNo}nolu hesabınızda ${miktar} bulunmamaktadır.`)
            }
        }else{
            console.log('Üzgünüz bakiye yetersiz.')
        }
    }


}

paraCek(hesapA,2000)
paraCek(hesapA,1000)