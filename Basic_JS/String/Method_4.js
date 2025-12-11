
// let Str="acd8efn8cmdc  "
// //ACDEFNCMDC
// let arr=Str.split(8);

// console.log(arr.join('').toUpperCase().trimEnd());

   
   /**
    * "Welcome To Pune Hello Are UUIj"
    *  'e'=>"E"
    * 'a'=>"A"
    * 'A'=>'a'
    * "WElcOmE TO pUnE HEllO arE uuij"
    * "W*lc*m*  T* p*n* H*ll* ar* ***j"
    */



   /**
    *  Anil Kapoor Bombay Pune
    * 
    * anil kapoor bombay pune
    * 
    */


   let str="AnIL KapOOR BomBAY PuNE";
   let counter=0;
   let arr4=[];
   let str2=""
   let ar=str.split(" ");
   console.log(ar);
    ar.forEach((i)=>
    {
        let ar3=i.split("");
         let ch=ar3[0];
         ar3[0]=ch.toLowerCase();
         console.log(ar3.join(""));
         str2=str2+ar3.join("");
         arr4[counter]=ar3.join("");
         counter++;
    })
    console.log(str);
    
    console.log(arr4.join(" "));
    
       /**
    * "Welcome To Pune Hello Are UUIj"
    *  'e'=>"E"
    * 'a'=>"A"
    * 'A'=>'a'
    * "WElcOmE TO pUnE HEllO arE uuij"
    * "W*lc*m*  T* p*n* H*ll* ar* ***j"
    */