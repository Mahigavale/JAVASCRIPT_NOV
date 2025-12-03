
let arr=[10,10,123,23,212,12,32,13,13,43,43,67,67,78,78,68,68,58,58,58];
//[10,23,212,32,12,43,67]


let arr2=[];

for(v=0;v<arr.length;v++)
{
  
    let num=arr[v];
    let counter=0;

    for(w=0;w<arr.length;w++)
    {
        if(arr[w]==num)
        {
        counter++;
        }
    }
    
    if(counter>=2)
    {
   
      arr2[v]=arr[v];
      
        
    }
}

//console.log(arr2);




let arr3=arr2.filter((i)=>{return i !=undefined}
)





for(let v=0;v<arr3.length;v++)
{
    arr3.splice(v,1);
}



console.log("Original Array:",arr);



console.log("duplicates:",arr3);
