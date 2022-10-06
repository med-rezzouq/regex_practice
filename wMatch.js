let rickyAndCal = "hellow> how are you doing";

//the backslach + w will match only all leters and all numbers an underscore
//if we put /g it will match all occurence in the string
let calRegex = /\w/g;
console.log(rickyAndCal.match(calRegex).length);

//if we want to match anything that is not caracter number or underscore we put capital W
//it will match spaces and dots or other symboles
let regex = /\W/g;
console.log(rickyAndCal.match(regex).length);
