//1. JSON (stringify, parse)

const student = {
    name: 'Faisal',
    age: 26,
    skills: ["react", 'node', 'express', 'mongodb']
}

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObject = JSON.parse(studentJSON);
console.log(studentObject);



// 2. fetch 

// *** fetch example, ei 3 line comment na korle error asbe.
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));



//3. keys , values 
const keys = Object.keys(student);
const values = Object.values(student);





// 4. Array loop 
// array te loop calanor jonno forEach use korbo, jodi amra kono kisu return na kori,
const numbers = [20, 35, 55, 65, 25];
numbers.forEach(number => console.log(number));

// return pete caile map korbo 
numbers.map(num=> num*2);


// array like object - arguments, getElementById , querySelectorAll, ..........
// tokhn (for of) use korbo





// 5. Object loop 
// R object er jonno  (for in) use korbo


// add or remove from an array
const products = [
    {name:'laptop',price:32000, brand: 'lenovo',color:'silver'},
    {name:'phone',price:7000, brand: 'iphone',color:'golden'},
    {name:'watch',price:3000, brand: 'casio',color:'yellow'},
    {name:'sunglass',price:300, brand: 'raybay',color:'black'},
    {name:'camera',price:9000, brand: 'canon',color:'gray'}
    
]   // eita ekta array of objects 

const newProduct = {name: 'webcame', price: 700, brand: 'canon' };


// copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);


// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(product => product.name !== 'phone');
console.log("remaining array without phone: ",remaining);








