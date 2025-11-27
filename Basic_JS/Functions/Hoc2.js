


function demo (a,b,c,operation)
{
    return operation(a,b,c);
}



// function demo2(a,b,c)
// {
//     return a+b+c+100;
// }

/**
 * Anonymous Arrow Function.
 */
 console.log(
   demo(12,12,12,(a,b,c)=>{return a+b+c+45}));