

let Str="I am in 5678 the P8(()9ne Pune P((23E punE";

console.log(Str.replace(/[7-9]/ig,"#"));

console.log(Str.replaceAll(/[^1-4]+/ig,"@"));
console.log(Str.replaceAll(/\d+/g,"^"));
console.log(Str.replaceAll(/[()]/g,"*"));

//[] =>range
//[^]=> not in the range.
