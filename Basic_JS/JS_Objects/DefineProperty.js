

let Obj=
{
    name:"Bradd Pitt"
}


/**
 * Configurable => To delete or not to delete.
 * 
 * Writable=> can you change the Values.
 */

 Object.defineProperty(Obj,"age",{
    configurable:false,
    writable:false,
    enumerable:false,
    value:45
 })

 console.log(Obj);
 
 Obj.age=67;
delete Obj.age;

console.log(Obj);

console.log(Obj.age);

// for( v of Object.keys(Obj))
// {
//     console.log(v);
    
// }