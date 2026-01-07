
/**
 * Shadowing in JS.
 */


/**
 * Lexical Scope the inner function will have access to the variable.
 */



var name="car";

if(true)
{
    
   let  name="truck";

    console.log("2",name);
    
}
console.log("3",name);
