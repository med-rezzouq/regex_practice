let myWord = "word monsieur word word";
let regx = /..rd/;
let reg = /.ord/;
let fullregx = /w[osdf]rd/g;
console.log(myWord.match(regx));
console.log(myWord.match(reg));
console.log(myWord.match(fullregx));
//this is also the same thing using new RegExp()
console.log(myWord.match(new RegExp(fullregx)));
