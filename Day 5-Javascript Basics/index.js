var fname = "Raj Gurung";
let add = "Balaju";
const bloodGroup = "A+";

console.log(fname);
console.log(add);
console.log(bloodGroup);

// datatypes
let name = "Raj G";
let age = 20;
let isstudent = true;
let hobbies = ['coding','travelling','cooking'];

console.log(hobbies[0]);

let user = {
    name: 'Raj',
    age: 20,
    isstudent: true,
    hobbies: ['coding','travelling','cooking']
};

console.log(user['name']);

function greet(name){
    console.log('hello', name);
}
greet("Raj");

// DOM
const headingElementById = document.getElementById('head');
console.log(headingElementById);

const headingElementByIdQuery = document.querySelector('#head');
console.log(headingElementByIdQuery);

const paragraphElement = document.querySelector('.para');
paragraphElement.textContent = "This is updated message";
paragraphElement.style.color = "blue";


const buttonElement=document.querySelector('.btn');
buttonElement.addEventListener('click',function(){
    alert('Buttom Clicker');
    console.log("Button Clicked")
})