

let arr=[3,2,4,5,6];

console.log(arr.reduceRight(minus));

//Reduce => APPLIES CALLBACK FUNCTION AS IT IS IN THE SAME ORDER.
//reduceRight()=> Applies the callback function in the descenfing order.
  
//10-20=>-10-30=>-40-40=>-80
//2*3*4=>24
function minus(i,j)
{
    return i*j;
}


