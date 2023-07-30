const credits = 23580
const price = 3000
let totalNumber = prompt("Введіть число телевізорів, які ви хочете придбати:")
let totalPrice = totalNumber * price
let remainingPrice = credits - totalPrice

if(totalNumber === null){
    alert ( "Операцію скасовано!");
} else{
    console.log(totalPrice);
}

if(totalPrice > credits){
    console.log('Недостатньо коштів на рахунку!');
} else{
    console.log(`Ви купили ${totalNumber} телевізорів, на рахунку залишилось ${remainingPrice} кредитів.`)
}