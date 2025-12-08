
let arr2=[64,101,121,151,216,513,729,1000,512,3375];





function checkcube(num)
{
    
    
    let cube;

    for(v=0;v<num;v++)
    {
      cube =v*v*v;
      
       if(cube==num)
    {
       return num;
    }   
      
    }
   
}
let arr3=arr2.filter(checkcube);
console.log(arr3);
