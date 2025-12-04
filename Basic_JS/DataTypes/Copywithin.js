
/**
 * Is used to copy the elements of the same array within the same array.
 * it ecxpects three params.
 * target index => included
 * start index => included
 * end number(number of elements to copy from the Start Index.)
 */

let arr=['A','B','C','D','E','F'];
       // 0,  1 , 2 , 3 , 4,  5
     //2,0,2
     //A,B,A,B,E,F
       arr.copyWithin(2,0,3);
       //A,B,A,B,C,F
       console.log(arr);
       