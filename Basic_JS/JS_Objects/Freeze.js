
/**
 * Freeze()
 * no properties addition.
 * no deletion.
 * no modification.
 * 
 * Freeze() > Seal()
 */

let User={
    name:"alan joe",
    email:"alanjoe@gmail.com",
    password:"abc@123",
    city:"San Fransico"
}

(Object.freeze(User));



console.log(Object.isFrozen(User));


console.log(User);

User.Car="Mustang";

User.city="Mumbai";
console.log(User);
