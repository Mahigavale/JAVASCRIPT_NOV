


  const Prom=Promise.resolve("sucsess");


  const prom2=Promise.reject("bad entry");


  Prom.then((v)=>{console.log(v);
  }).catch((e)=>{console.log(e);
  }).finally(()=>{
    console.log("promise executed");
    
  })


  
  prom2.then((v)=>{console.log(v);
  }).catch((e)=>{console.log(e);
  }).finally(()=>{
    console.log("promise executed");
    
  })
