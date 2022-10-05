let str = "titanic";

//here we have the ? which says the [a-z] is optional so its lazy match
//so it will only match "ti" as result

let regex = /t[a-z]*?i/;

//but here its not optional so will find the caracters until the i
// let regex = /t[a-z]*i/;

str.match(regex);

let text = "<h1>winter is coming</h1>";

//here it will only match "<h1>"
let myReg = /<.*?>/;

//same here it will match  "<h1>winter is coming</h1>"
// let myReg = /<.*>/;
let result = text.match(myReg);

console.log(result);
