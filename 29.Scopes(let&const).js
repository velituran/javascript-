// 29 Scopes

//** Global Scopes

var name = 'Çınar'



function logName(){
    var name ='Ada'
    var age = '12'
    
    console.log('function scope',name,age)

}


if (true){

    var age = 30
   
    console.log('block scope',name,age);
}

logName();
console.log(name);



//** Local Scopes


console.log("************************");

if (true){
    var model = 'Opel'
    let year = 2016
    const color = 'White'

    console.log('block scope',model,year,color);


}


var i =1;

for (let i=0; i<10; i++){
    console.log('i',i)
}

console.log(i)




// fonsiyonlar kendi scope'larını oluşturur.
// blocklar yeni scope oluşturmaz.
// ES6 ile gelen let ve const block scope oluşturur
