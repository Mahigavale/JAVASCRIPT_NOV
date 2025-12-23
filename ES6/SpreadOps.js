
/**
 * "..."
 */

let arr=[10,20,30];
let arr2=[40,50,60];


let arr3=["ABC",...arr,...arr2];
console.log(arr3);


let person={
    name:"abc",
    email:"abc@gmail.com"
};

let person2={
    city:"Pune",
    pin:"121212"
}

let employee={...person,state:"maharashtra",...person2,arr4:[...arr2,...arr3]};
console.log(employee);
