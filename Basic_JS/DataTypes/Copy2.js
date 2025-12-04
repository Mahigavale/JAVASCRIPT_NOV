
let arr=['mango','apple','jackfruit','pune','methi','bhopla'];
       //   0,     1  ,     2      ,   3   , 4    ,   5
       //target
       //start
       //end index => excluded (2,1,3)=>
       arr.copyWithin(2,1,3)
//mango,apple,apple,jackfruit,methi,bhopla
       console.log(arr);
       