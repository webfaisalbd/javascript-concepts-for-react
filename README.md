# Javascript Concepts For React


###  Fundamentals

```javascript

// 1. how to declare a variable using let and const
const fatherName = 'S Ahmed';
let season = 'rainy';
season = 'winter';



// 2. basic conditions: >, <, ==, ===, <=, >=,
// multiple conditions: &&, || 

if(fatherName === 'S Ahmed' || season === 'rainy'){

}
else {

}



// 3. array 
// declare
// index 
// length 
// push 
// pop 

const numbers = [20,30,40,10];
numbers[0] = 21;




// 4. loop 
// for loop
for(let i=0; i<numbers.length;i++){
    const number = numbers[i];
    console.log(number);

}



// 5. function 

function mul(num1,num2){
    const result = num1* num2;
    return result;
}

const output = mul(10,20);
console.log(output);



// 6. Object
// Three ways to access property by name  

const student = {
    name: 'Faisal',
    age: 26,
    skill: ['react','node','express','mongodb']
}

const myAge = 'age';

console.log(student.age);     // direct by property
console.log(student['age']);  // access via property name string
console.log(student[myAge]);  // access via property name in a variable




```



### ES6

```javascript
//1. template string 

const numbers = [40,30,20,70];

const student = {
    name: 'Faisal',
    age: 26,
    skills: ['react','node', 'express', 'mongodb']
}

const about = `My name is ${student.name} and age of ${student.age} and my marks is ${numbers[2]} and has skills on ${student.skills[0]} `;
console.log('Template string:',about);



// 2. arrow function 
const getFifty = () => 55;
console.log(getFifty());

const sixtyFive = num => num + getFifty();
console.log(sixtyFive(10));

const isEven = x => x%2 == 0;
console.log(isEven(4));

const addThree = (x,y,z) => x+y+z;
console.log('add Three',addThree(3,4,3));

// for multiline 
const doMath = (num1,num2) => {
    const sum = num1+num2;
    return sum;
}
console.log('do Math',doMath(10,20));




// 3. spread operator (cope an array)
// array reference type er 
// 

const newNumbers = numbers;  // problem without spread operator
numbers.push(99);
console.log(numbers);  // change both numbers and newNumbers
console.log(newNumbers);  // // change both numbers and newNumbers


const myNewNumbers = [...numbers];
numbers.push(100);
console.log(numbers);
console.log(myNewNumbers);


// create a new number from an older array and add an element
const olderNumber = [10,20,30,40];
const anotherNewNumber = [...olderNumber, 55];
console.log('olderNumber',olderNumber);
console.log('another new Number',anotherNewNumber);
```