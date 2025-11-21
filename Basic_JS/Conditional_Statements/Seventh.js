
/**
 * Scopes : Global, Local, Block Level Scope.
 * let,const=> GLobal,Block,Function level.
 * var=> Global,Function.
 */


console.log(name3);

if(true)
{      
 /**
  * BLOCK LEVEL SCOPE.
  */
    let name="ABC";
    const name2="DEF";
    var name3="MY CAR";
    console.log(name2, name);
    

}
console.log(name3);




