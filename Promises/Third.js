
/**
 *  Arrow (fat arrow function)
 */



// setTimeout(()=>{
//     console.log("hii");
    
// },4000);





// setTimeout(()=>{
//     let arr=[10,20,30,40];
//     console.log(arr);
    
// },10000)




/**
 * Promise 1)Creating a Promise.
 * Promise 2) Consuming a Promise.
 * .then()=>Success
 * .catch()=>Reject
 */



let prom=new Promise((reslove,reject)=>{
    let age=34;
    setTimeout(()=>{

        if(age>30)
        {
            return reslove(age)
        }
        return reject("Ineligible...")
    },4000)
})


prom.then((v)=>{ return v;
}).then((v)=>{ return v;
}).then((v)=>{ return v;
}).then((v)=>{
    console.log(v+1);
    
})
.catch((e)=>{console.log(e);
})


console.log("hiiiiiiiiiiiiiii");
console.log(prom);



setTimeout(()=>{
    console.log(prom);
    
},3000)