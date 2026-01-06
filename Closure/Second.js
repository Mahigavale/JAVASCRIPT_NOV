
/**
 * Closures:
 */



function outer()
{
  
    function inner()
    {
        console.log(count++);
        
    }
      let count=1;


    return inner;
}
    let demo=outer();     //outer()=>

        demo();
        demo();
        demo();