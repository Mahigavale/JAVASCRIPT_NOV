

/**
 * IsWellFormed()
 */
 
/**
 * match()
 * matchall()
 * normalize()
 * replace()
 * replaceAll() =>
 * Search()=>
 */

// let str="b";


//  console.log(
//     str.localeCompare("a"));

    /**
     * +1 if the first string is greater than the second String.
     * -1 if the first String is less than the second String.
     * 0 if both the Strings are equal.
     */


    
    // let Str="aa";
    // let Str2="aa";

    // console.logb(Str2.localeCompare(Str));






    let Str="abc";

    /**
     * Adds the given String at the end of the current String 
     * to match the total given length of the String.
     */
    console.log(Str.padEnd(10,"*"));


    /**
     * Adds the given String at the Start of the String to
     * match the given length number. 
     */
    console.log(Str.padStart(10,"#"));


    /**
     * Repeats the current String with the given times of number 
     * including the First one too.
     */
   console.log(
    Str.repeat(2));
    
    

    let Str4="abcdde"
    
    
    console.log("SLICE :::");
    
    console.log(Str4.slice(0,5));


     let Str5="a c-d- de-r h-fe j-dn"
    console.log(Str5.split('*'));
    
    

   console.log(
    Str5.startsWith('-d',4));
   

 
    let Str6="abcdefghijkl";

    console.log(Str6.endsWith('e',5));
    /**
     *  5 number postion must end with 'de'
     */




    let String7="ABCDEFGHIJK";

     console.log(String7.substring(0,4));
    
     /**a
      * Including 0 
      * excluding 4
      * 
      */
    console.log(String7);
    
 
    /**
     * Tolocalelowercase() vs toLowerCase()
     * 
     * ToLocaleUpperCase() vs toUpperCase()
     */
    

    console.log("********************************************!!!!!!!!!!!!!!!!!!!!!!!!!*************************");
    

    let String8="     abc    ";

    console.log(String8.trim()+"A");
    console.log(String8.trimStart()+"A");
    console.log(String8.trimEnd()+'A');
    
    
    


    let Str9=new String("dada");
    console.log(Str9);
    
    console.log(Str9.valueOf());
    

    


    console.log("*&*&&*(*&*(*&*()_)(*&^%$#$%^&*()_)(*&^%$");
    

    let Str10="cdefghijkl";

    console.log(Str10.substring(1)); //d
    console.log(Str10.substr(1));
    
    



    