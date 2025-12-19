
//Prototype
let str="anbc";


str.__proto__.demo=function()
{
    console.log("hello");
    
}


console.log(str.charAt(0));
 

str.demo();

