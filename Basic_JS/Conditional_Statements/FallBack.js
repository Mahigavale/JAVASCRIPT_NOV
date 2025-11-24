
/**
 * Falsey value fallback.
 * 
 * Nullish Coealscion.
 * 
 * Default values (ES2020)
 */

//0, "", false, undefined, null

let isUserLoggdin=true;

let congratulations =  isUserLoggdin || "you are not logged!";

console.log(congratulations);



//nullish Coleascon => null, undefined.

console.log("*****************************************************");



let marks;

let result=marks ?? "Invalid";
console.log(result);
