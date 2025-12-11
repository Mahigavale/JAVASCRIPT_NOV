
let num2="153";


let arr=num2.split("");
console.log(arr);
let sum=0;
 arr.forEach((i)=>{
    sum=(i**3)+sum;
    console.log(sum);
 })
console.log(sum==num2);


