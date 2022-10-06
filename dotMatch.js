//when we put . or multiple dots will replace any caracter number or symbole
let rickyAndCal = "<>>>Cal";

//we can put equal less dots foreach caracter to replace
//for example we replace <>> with three dots ... or less like .. or even .
//but we cant put more than three dots
let calRegex = /...>Cal/;
console.log(calRegex.test(rickyAndCal));
