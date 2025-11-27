

let Arr=[10,20,30,40,50];

console.log(Arr.length);
//.length() => Property gives me the total length of the Array.

//Array Iterable => ,,,,,

// For => for of , for in

//Elements of the Array . for of gives me the elements of the Array.
for( v of Arr)
{
    /**
     * For of is used to iterate over the elements.
     */
    console.log(v+"of");
    
}


for(v in Arr)
{
    /**
     * For in is used to iterate over the indices.
     */
    console.log(v+"in");
    
}
