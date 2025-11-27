
//Collection data types, dynamic => 

    /**
     * []=> Array Literal
     * 
     * new Array(1,2,3,4);
     * new Array(2);
     */


    // let numbers=[1,2,3,4,5];   //Array Literal
    // console.log( typeof numbers);


    let numbers2=new Array(10,"Mahesh",30.89,'a',50); //Using Array Constructor to create the Array Object.
 
    
    
    numbers2[5]=60;
    console.log("numbers2:",numbers2);

    let arr=["a","b","c","d"];
    console.log(arr);
    
    

    /**
     * You initialize the size first and then assign the values.
     */

    class doj {
        names;
        city;

         method()  {
            console.log("hii re");
            
        }

        constructor(p) {
         console.log(p);
            
        }
    }

   let  d=new doj();
   d.names="Mahesh";
   d.city="Pune";
   

   console.log("names:"+d.names);
console.log("City:"+d.city);
   


     let numbers3=new Array(3);

     numbers3[0];
     numbers3[1]=24;
     numbers3[2]=36;
     numbers3[3]=45;
     numbers3[4]=48;
     numbers3[5]=60;
     console.log(numbers3.length);
     
    

     var car="def";


     console.log(car);
     
    if(true)
     {
          car="abc";
     }
    console.log(car);
    


     