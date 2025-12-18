
/**
 *  Freeze vs Seal.
 */

let User=
{
 name:"john",
 email:"johnp@gmail.com",
 isSubscribed:true
}

/**
 * Seal An  Object Addition of new Properties NOt Possible.
 * deletion of Existing properties =>Not Possible.
 * modification of existing properties =>Possible.
 */

Object.seal(User);


console.log(Object.isSealed(User));


 User.email=123;
console.log(User);




