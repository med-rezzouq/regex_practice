let myWord = "word monsieur 3.6298774 word worrrrrd";

let fullregx = /[^2-6w-z]/g; //this will search each caracter that is not between 2-6 and w-z and put it inside array result

let reg = /[r+]/g; //this will search each caracter or manyoccurence of it

let rem = /[oerf+]/g; //this will search each caracter or manyoccurence of it
let ref = /[oerf*]/g; //this will search each caracter o 0 or many

console.log(myWord.match(fullregx));
console.log(myWord.match(reg));
console.log(myWord.match(ref));

//this is also the same thing using new RegExp()
// console.log(myWord.match(new RegExp(fullregx)));
