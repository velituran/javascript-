//23 Loop in Arrays & Objects



let cars =['Bmw','Mercedes','Toyota'];

let people =[
    {firstName:'Ada',lastName:'Bilgi'},
    {firstName:'Yiğit',lastName:'Bilgi'},
    {firstName:'Çınar',lastName:'Turan'}
];




//ARRAYS

// for(let i=0; i<cars.length;i++){
//     console.log(cars[i])
      
// }

//objects

// for (let i=0; i<people.length;i++){
//     console.log(people[i].firstName)
// }




// for-in

//ARRAYS

// for(let i in cars){
//     console.log(`index:${i} value: ${cars[i]}`);
// }

// OBJECTS

// for(let i in people){
//     console.log(`index: ${i} value: ${people[i].firstName}`);
// }



//foreach

// cars.forEach(function(item){
//     console.log(item)

// });


// people.forEach(function(item){
//     console.log(itm.firstName);
// })



// map : returns an array


// let val= people.map(function(item){
//     return item.firstName +' '+lastName;

// })
// console.log(val)


let numbers = [1,5,6,8,10]

let num = numbers.map(function(n){
    return n*n;

})
console.log(num)