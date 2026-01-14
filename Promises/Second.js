
/**
 * Promise based on the Array.Contains() => 10=> resolve ? reject
 */

let arr=[13,12,14,100,9];


function check(resolve,reject)
{

    function demo()
    {
         if(arr.includes(10))
    {
        return resolve("passed");
    }
    return reject("no values found")
    }
     setTimeout(demo,3000);
   
}


function yes(v)
{
    console.log(v+"***********");
    
}
function no(v)
{
    console.log(v+"%%%%%%%%%%%%%%%%");
    
}




const prom=new Promise(check);

console.log(prom);
prom.then(yes).catch(no);

setTimeout(()=>{
    console.log(prom);
    
},4000)