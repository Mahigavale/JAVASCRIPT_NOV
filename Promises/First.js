
//1)Created the Promise.
let prom=new Promise(Pr);

//2)Consuming the Promise.

   

prom.then(success).catch(wrong)


function success(v)
{
    console.log(v);
    
}

function wrong(v)
{
    console.log("error:"+v);
    
}

function Pr(mahesh,mana)
{
    let age=13;
    if(age>20)
    {
        return  mahesh("age sucess");
    }
    else{
        return mana("underage");
    }
}


function PrintPromise()
{
    console.log(prom);
    
}

setTimeout(PrintPromise,4000)