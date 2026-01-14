const p1=new Promise((resolve,reject)=>{
  let age=20;
     setTimeout(()=>{

        if(age>25)
        {
            return resolve("the value is passed...");
        }
        else
        {
            return  reject("bad values ");
            
        }
     },1000)
})


const p2=new Promise((resolve,reject)=>{
  let age=20;
     setTimeout(()=>{

        if(age>15)
        {
            return resolve("the value is passed.. from the second Promise.");
        }
        else
        {
            return  reject("bad values 2");
            
        }
     },2500)
})


/**
 * Promise.ALL()=>if both the prmises resolve then only the promise.all() is
 * going to be working.
 * 
 * Promise.any()=>if any Promise is fullfilled will give the values
 * and if all the Promises are rejected then will give the 
 * aggregated error.
 * 
 * Promise.Allsettled()=>is going to settle the promises  either
 * Resolve or Reject.
 * 
 * Promise.RACE()=>
 */

  Promise.race([p1,p2])
  .then((v)=>{
    console.log(v);
    
  }).catch((e)=>{
    console.log(e);
    
  })
    



   async function geteven()
   {
    let r=await p2;

    console.log(":::::",r);
    
   }

   geteven();
