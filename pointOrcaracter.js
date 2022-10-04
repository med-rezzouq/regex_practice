let myWord = "word monsieur word word";
let regx = /..rd/;
let reg = /.ord/;
// let fullregx = /w[osdf]rd/g; // need to find only one caracter inside this brackets
let fullregx = /w[ordf]rd/g;
let allregx = /[ordf]/g; // this will search each caracter inside this bracket and put it inside the array result
console.log(myWord.match(regx));
console.log(myWord.match(reg));
console.log(myWord.match(fullregx));
console.log(myWord.match(allregx));
//this is also the same thing using new RegExp()
// console.log(myWord.match(new RegExp(fullregx)));
