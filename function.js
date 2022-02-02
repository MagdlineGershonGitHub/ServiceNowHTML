'use strict'
//Function for subtracting two numbers
function sub(num1,num2)
{
    return num1-num2;
}
console.log(sub(45,23));

//Function expression for the printing the name, age and gender

let welcome=function(name,age,gender){
    return console.log(`My name is ${name},i am ${age} years old and of gender ${gender}`);

}
welcome("Felix Cited",20,"Male");

//Arrow function using powerup

powerup = (n1,n2) => Math.pow(n1,n2);

console.log(powerup(2,3));
console.log(powerup(3,3));