
let obj={
    name:"abc",
    city:"pune",
    state:"Karanataka",
      population:"10crores"

};

let obj2={
    population:"120crores",
    district:"Haveli"
}

let obj3=
{
    pinocde:"112233",
    district:"Konkan"
}

    console.log(
     Object.assign(obj,obj3,obj2,{state:"Maharashtra"}));  //target(Modified!),Source

     console.log(obj);
     


     let obj4={};

     console.log(Object.assign(obj4,obj));
     console.log(obj4);
     
     