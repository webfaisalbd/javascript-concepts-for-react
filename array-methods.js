// 1. map 
// map return kore array er moddhe dise.

const products = [
    {name:'laptop',price:32000, brand: 'lenovo',color:'silver'},
    {name:'phone',price:7000, brand: 'iphone',color:'golden'},
    {name:'watch',price:3000, brand: 'casio',color:'yellow'},
    {name:'sunglass',price:300, brand: 'raybay',color:'black'},
    {name:'camera',price:9000, brand: 'canon',color:'gray'}
    
]

const brands = products.map(product => product.brand );
console.log(brands);

const prices = products.map(product => product.price);
console.log(prices);




// 2. forEach 
// return kora na lagle, forEach use korte hobe. 
// Jehetu return kore na, tai forEach er age kono variable rakhao lage na.


products.forEach(product => console.log(product));
products.forEach(product => console.log(product.color));

products.forEach(product => {

})

// map vs forEach 
// map = return kore 
// forEach = kono kisu return kore na




//3. filter 
// filter ekta array return kore.

const cheap = products.filter(product => product.price <= 5000);
console.log(cheap);

// j sob  product er namer moddhe 'n' ase, tader show koro.
const specificName = products.filter(product => product.name.includes('n'));
console.log(specificName);



// 4.find 
const special = products.find(product => product.name.includes('n'));
console.log(special);



// filter vs find 

// filter = condition er moddhe jara jara meet kore, filter tader sobai k dibe.
//  Jehetu sobai k dey, tai filter array return kore.

// find = condition er moddhe jeta first e meet kore, find shudu seta k dibe. 
// Jehetu ekta dey, tai find array return kore na.


