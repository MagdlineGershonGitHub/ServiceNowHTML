'use strict'
let darthVader = new Object();
darthVader["allegiance"]="Empire";
darthVader["weapon"]="lightsabre";
darthVader["sith"]="true";
darthVader["Jedi"]="false";
console.log(darthVader);

console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon is to the ${darthVader.weapon}`);
console.log(`Darth Vader's sith is to the ${darthVader.sith}`);
console.log(`Darth Vader's Jedi is to the ${darthVader.Jedi}`);

let myArray=["hello","everyone"];
    console.log(myArray.length);
console.log(myArray.push("welcome"));
console.log(myArray.length);
console.log(myArray);
console.log(myArray.shift());
console.log(myArray);
for(let x of myArray){
    console.log(x);
}