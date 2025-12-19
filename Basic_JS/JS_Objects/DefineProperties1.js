
let User={
   name:"Angelina Jolly"
};

//Object.defineProperty(User,"age",{})


console.log(User);



 Object.defineProperties(User,{
    "age":{
        enumerable:false,
        writable:true,
        configurable:true,
        value:22
    },
    "City":{
        writable:true,
        enumerable:false,
        configurable:true,
        value:"LAS VEGAS"
    }
 });

 User.City="Mumbai";

 console.log(User);
 

  console.log(
    Object.getOwnPropertyDescriptor(User,"City"));


    console.log("***********************************");
    
  console.log(
     Object.getOwnPropertyDescriptors(User));