

/**
 * Reusable code block.
 * 
 * function => function()
 */


/**
 *There is no return type in the JS Function => Implicit return. 
 *
 */


 Add();

function Add(v,v1,v2)
{
    console.log(v+v1+v2);
    
}
 Add(10,20,30);


 /**
  * When you declare a function with the variable it won't be hoisted.
  */



 


 // arrow function.

//    function Sub(a,b)
//    {
//     console.log(a-b);
    
//    }

  let sub=(a,b)=>{console.log(a-b);};

  sub(10,23);
  




/**
 *  Higher Order Component.
 * @param {*} a 
 * @param {*} b 
 * @param {*} operation 
 * @returns 
 */
  function hoc(a, b, operation)
  {
    return operation(a,b);
  }

function add(a,b){ return a+b;} 
   console.log( hoc(10,20, ));
   