let spaces = "hellow> how are you doing";

//to match all spaces we do \s/g

let calRegex = /\s/g;
console.log(spaces.match(calRegex).length);

//if we want to match anything but not the spaces we do capital \S/g

let regex = /\S/g;
console.log(spaces.match(regex).length);
