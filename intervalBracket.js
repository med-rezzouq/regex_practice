let myWord = "word monsieur 3.6298774 word word";

let fullregx = /[a-z]/g; //this will search each caracter between a-z and put it inside array result
let allregx = /[2-6]/g; // this will search each number between 2- 6 and put it inside array result
let regx = /[2-6a-z]/g; // this will search each number between 2- 6 and each caracter between a-z and put it inside array result and put it inside array result

console.log(myWord.match(fullregx));
console.log(myWord.match(allregx));
console.log(myWord.match(regx));
//this is also the same thing using new RegExp()
// console.log(myWord.match(new RegExp(fullregx)));
