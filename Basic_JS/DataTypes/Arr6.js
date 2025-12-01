
let arr=[11,22,33,45,67,65,34,21,22,54,65,23];

 let sorted=arr.toSorted(descen);




/**
 * 
 * This is called as the Comparing function.
 * which is used to sort the elements.
 */
function descen(a,b)
{
     if(a>b)
     {
        return -1;
     }
     else if(a<b)

        {
            return 1;
        }
        else
        {
            return 0;
        }
}


console.log(arr);
console.log(sorted);




