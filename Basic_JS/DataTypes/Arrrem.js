
let arr=[12,27,54,23,17];

//copywithin , keys, with , join, reduce, reduceright.


let arr2=arr.keys();  //Iterable of the keys of the given Array. for-of 
for(v of arr2)
{
    console.log(v);
}

//c,d,e
let arr3=['a','b','c','d','e'];
//a,b,a,b,e
// start index => target
//=> where to start included
//=> where to stop => excluded.
arr3.copyWithin(2,0,2)

console.log(arr3);



  