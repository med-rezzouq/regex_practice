let myWord = "word word word";
let regx = /word/;
let fullregx = /word/g;
console.log(myWord.match(regx));
console.log(myWord.match((fullregx));
//this is also the same thing using new RegExp()
console.log(myWord.match(new RegExp(fullregx)));
