let rickyAndCal = "hellow 4.00$  how are you doing in 2022";

//the backslach + d will match only all digits and putting /g will match all digit occurences

let calRegex = /\d/g;
console.log(rickyAndCal.match(calRegex).length);

//if we want to match anything that is not number we put Capital D
//it will match spaces and dots or other symboles
let regex = /\D/g;
console.log(rickyAndCal.match(regex).length);
