


function* demo(n)
{
     for(v=1;v<=n;v++)
     {
        yield v;
     }
}
let obj=demo(5);


console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.next());
console.log(obj.return("finished"));














  