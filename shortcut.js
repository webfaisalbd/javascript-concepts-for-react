// truthy value:
// 'Faisal', 5, true, {} , []
// empty array and empty object are also truthy values

// falsy value: 5ta
// '' , 0, false, null , undefined


// check truthy
// let  myVar = 'Faisal'; 
// let  myVar = 5; 
// let  myVar = true; 
// let  myVar = {}; 
// let  myVar = []; 

let myVar = 5;
if(myVar){
    myVar = myVar;
}
else {
    myVar = 0;
}
console.log(myVar);


// check negative/ falsy value 
let myMoney = 50;
if(!myMoney){

}



// If else  
const money = 50;
let food;
if(money >100){
    food = 'biriyani';
}
else {
    food = 'cha-biscuit';
}


// ternary operator 
const myFood = money > 100 ? 'biriyani' : 'cha-biscuit';
console.log(myFood);


// ternary operator
let taka = 100;
let distanceKiloMeter = 10; 
let go = (taka > 50 && distanceKiloMeter < 20) ? 'shopping' : 'sleeping';
console.log(go);


 
// number to string conversion
let num1 = 52;
console.log(num1);
console.log(typeof num1);
let numString = num1 + '';
console.log(numString);
console.log(typeof numString);

//  string to number  conversion
const num2 = '55';
const inputNumber = +num2;
console.log(num2);
console.log(typeof num2);
console.log(inputNumber);
console.log(typeof inputNumber);


 

// ternary operator diye function o check kora jay 
let isActive =true;
const showUser = () => console.log('display the  User');
const hideUser = () => console.log('hide the User');


isActive ? showUser() : hideUser() ;


// use && if the left side is true then right side will be executed
isActive && showUser();



// toggle boolean
isActive = !isActive;
