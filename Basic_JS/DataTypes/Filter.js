
/**
 * Filter is used to filter out the elements.
 * Filter is used to filter out the Array Elements and get the new Array.
 * Returning method.
 * Iterative Method.
 */


let arr=[5,10,11,13,15,20,25];


    let arr2=arr.filter(check5);

function check5(i)
{  
    return (i%5==0);

}

//console.log(check5(10));


console.log(arr);
console.log("Filtered array:",arr2);


