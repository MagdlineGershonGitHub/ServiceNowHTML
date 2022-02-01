let strictA =true;
let strictB =1;
console.log(strictA ==strictB);
console.log(strictA === strictB);

console.log(strictA != strictB);
console.log(strictA !== strictB)

let age = 10;
if(age>=18 && age<=65){
    console.log("Age is in range");
} else if(age<18){
    console.log("Underage");
}else {
    console.log("Other ")
}
let age1=60
let result=age1>=50?"50 or over":"Under 50";
console.log(result);