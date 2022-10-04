let myWord = "word word word";
let regword = /word/;
let fullregx = /word/g;
console.log(myWord.match(regword));
console.log(myWord.match((fullregx));
//this is also the same thing using new RegExp()
console.log(myWord.match(new RegExp(fullregx)));
