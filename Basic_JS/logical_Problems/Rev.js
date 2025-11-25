

/**
 * 123=> 321
 * 
 * 345=>543
 */




// 0,1,1,2,3,5,8,13,21,34,55,89



let num1=0;
let num2=1;

let sum=0;
let prev=0;
for(v=1;v<=10;v++)
{
    console.log(num1); 
     let sum=num1+num2;
     num1=num2;
     num2=sum;   
    
}


