
let obj={
    city:"Latur",
    div:"Konkan",
    population:12443
}


console.log(

Object.hasOwn(obj,"city1"));


  

let arr=[100,23,78,99,111,123,321,567,36,78,65,43];


console.log(Object.groupBy(arr,checkhigher));


let obj1=Object.groupBy(arr,checkhigher);
function checkhigher(i)
{
    if(i%2==0)
    {
        return "even";
    }
    return "odd";
}

console.log(obj1);

console.log(obj1.odd);



  