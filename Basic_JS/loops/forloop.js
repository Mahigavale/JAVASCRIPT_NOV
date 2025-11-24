
/**
 * Don't use the const in For Loop to avoid assignment to the constant variable.
 * 
 * 
 * let => scope => block level.
 * 
 * 
 */
for(var i=0; i<=10;i++)
{
    console.log(i);
    
}

console.log("logging outside..");
console.log(i);

