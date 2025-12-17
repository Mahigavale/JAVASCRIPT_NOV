
/**
 * /\d/ => all digits.
 * /\d+/ => considers the whole string as a Single digit.
 * /[1-9]/ => between 1-9
 * /[^1-9]/ =>not between 1-9.
 * 
 * str.replace(/\(/g,"@")); =>\ escape character for the (
 * str.replace(/[()]/) ;=> will replace both the ()
 * 
 * 
 */

/**
 * match()
 * matchall()
 * replace()
 * replaceAll() =>
 * Search()=>
 */

let str="123456(())789";

   
console.log(str.replace(/\(/g,"@"));

    

 
