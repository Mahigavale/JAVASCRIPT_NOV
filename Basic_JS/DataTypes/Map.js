
/**
 * Rrturning method => Returns an Array.
 * Map iterative Method.
 * Works at the element level.
 * it will keep the array length as it is.
 * condition failed -> Undefined ELement.
 */


let arr=[34,56,78,86,43,21,34,67,99];

          let arr2=arr.map(check50);

function check50(i)
{
   if(i>50)
   {
    return i;
   }
}

console.log(arr2.length);
console.log(arr.length);

