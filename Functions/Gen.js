
/**
 * Yield keyword => used to stop the function for the controlled execution.
 */

function *demo()
{
     yield "hello";   //{}

     yield "I am ";

     yield "the best!";
}

   
let obj=demo();

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());



   