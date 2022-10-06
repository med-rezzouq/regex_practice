let str = "qjack";

//will only returna q if we have jack word concatened with it
let Regex = /q(?=jack)/;
console.log(str.match(Regex));

//will only returna q if we dont have jack word concatened with it
let Regx = /q(?!jack)/;
console.log(str.match(Regx));
