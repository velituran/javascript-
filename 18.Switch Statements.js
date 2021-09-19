//18 Switch Statements



let category ='beyaz eşya';

switch(category){
    case 'telefon':
      console.log('telefon kategorisi');
    break;
    case'bilgisayar':
      console.log('bilgisayar kategorisi');
    break;

    default:
        console.log('yanlış kategori');

}

//1

let day;

switch (new Date().getDay()) {
    case 0:
        day = 'pazar'
        break;
    case 1:
        day = 'pazartesi'
        break;
    case 2:
        day = 'salı'
        break;
    case 3:
        day = 'çarşamba'
        break;
    case 4:
        day = 'perşembe'
        break;
    case 5:
        day = 'cuma'
        break;
    case 6:
        day = 'cumartesi'
        break;


}

console.log(` bugün günlerden ${day}`);

//2

let day;

switch (new Date().getDay()){
    case 0:
    case 6:    
        day = 'Hafta Sonu'
        break;
    
    
    case 1:
    case 2:  
    case 3: 
    case 4:
    case 5:    
        day = 'Hafta İçi'
        break;
   
      

}

console.log(` Bugün  ${day}`);


//3
 
const age = 19;
const firstName = 'Sena';

switch(true){
    case age >=0 && age <=12:
       console.log(`${firstName} is a child`);
    break;
    case age>=13 && age <=19:
        console.log(`${firstName} is a teenager`);
    break;   
    default:
    console.log(`${firstName} is an adult`)


}
