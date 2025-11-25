
// 1-100
// 21,37,13

//7=>2,3,4,5,6

// console.log(7%2);
// console.log(7%3);
// console.log(7%4);
// console.log(7%5);
// console.log(7%6);

let num=41;

let flag=false;


for(v=2;v<num/2;v++)
{
   if(num%v==0)
   {
    flag=true;
    
   }
    
}


if(flag)
{
    console.log("Not Prime");
    
}
else
{
    console.log("Prime");
    
}