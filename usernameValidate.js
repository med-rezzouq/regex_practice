let username = "JackOfAllTrades56";

//we will match that usernames starts with caracters and at least 2 letters and it can ends with digits as optional
//{2,} means 2 letters as minimum to infinite occurence as maximum
let regex = /^[A-Za-z]{2,}\d*$/g;

//we can also put this [0-9] instead of \d
// let regex = /^[A-Za-z]{2,}[0-9]*$/g;

console.log(regex.test(username));
