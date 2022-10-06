let str = "regex regex";

//the \1 will replace an occurence of the previous group
let calRegex = /(\w+)\s\1/g;

console.log(str.match(calRegex));

//the \1 will replace an occurence of the previous group
let dg = "777777 77";

//if we want to match anything that is not number we put Capital D
//it will match spaces and dots or other symboles

//here even we have \2 but we need match 3 times including the first rgex
let regex = /(\d{2})\1\1\s\1/g;

console.log(dg.match(regex));
