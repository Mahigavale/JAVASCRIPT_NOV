
 let str="AnIL KapOOR BomBAY PuNE";


 let arr=str.split(" ");

    function changecase(v)
              {
                    let lower=v.charAt(0).toLowerCase();
                     let remaining=v.slice(1);
                     return lower+remaining;
              }

 console.log(arr);

       let arr2= arr.map(changecase)
 
       console.log(arr2);
       




           