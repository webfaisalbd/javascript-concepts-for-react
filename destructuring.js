// 1. array destructuring
const numbers = [42,55];
// const x = numbers[0];
// const y = numbers[1];

const [x,y] = [42,55];
// const [x,y] = numbers;

console.log('x: ' +x , ' y: ', +y);


function boxify (num1, num2) {
    const nums = [num1,num2];
    return nums;
}
console.log(boxify(90,34));



// const [first,second] = [90,34];
const [first,second] = boxify(90,34);
console.log(first,second);



const student = {
    name: 'Faisal',
    age: 26,
    skills: ['react','node']
}

const [firstSkill,secondSkill] = student.skills;




// 1. object destructuring
const {name, age} = {name: 'Faisal', age: 26}
console.log(name,age);

// object er khetre serial matter kore na.
// kintu array er khetre serial matter kore.

const {mySalary, myAge} = {name: 'Faisal',mySalary:35000, myAge: 26}
console.log(mySalary,myAge);




const employee = {
    yourName: 'Shajib',
    age: 26,
    machine: 'asus',
    language: ['javascript', 'c', 'python'],
    specification: {
        height: 65,
        weight: 55,
        address: 'Ontaria',
        drink: 'water'
    }
}

const {yourName, machine} = employee;
const {weight, address} = employee?.specification;
const [firstLang, secondLang, thirdLang] = employee.language;

console.log(yourName, machine, weight, firstLang);