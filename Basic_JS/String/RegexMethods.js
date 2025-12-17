
/**
 * Search()
 * match()
 * matchAll()
 * replace()
 * replaceAll()
 */
/**
 * RegExp => Regular Expression.
 * used to perfrom the complex searching Operations Efficiently.
 */


//  /am/i
let Str="womwlm12243 fl3e232134[ 4lmrl3232[2[";


// console.log(Str.search(/\/@/i));


// console.log(Str.match(/me/ig));

console.log(Str.match(/\d+/g));
// /\d/ => search for the digits. 
// /\d+/g => serch for the numbers as whole.


// /a/i => case insenstive
// /a/ig => case insensitive + global (multiple Occurences).