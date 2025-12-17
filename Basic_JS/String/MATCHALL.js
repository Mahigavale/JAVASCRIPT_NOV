
let str="1124883 392302@@@048234 58584647@@####8430 202@3-2-2y492-233@@48u340";


// console.log(str.match(/delhi/ig));
// console.log(str.match(/\d+/g));
// console.log(str.match(/\d[5-7]+/g));  //[5-7] => including 5,6,7


console.log(str.match(/\@#/g));
//[^1-4] => excluding 1-4. and all the occurences.globally.



let str2="I abceim I am I An jciwbcdepM i Acdeicm i Abcbeikm I AM amam";

 console.log(str2.matchAll(/am/ig));

  for(m of str2.matchAll(/[^a-c]+/ig))
  {
    console.log(m);
    
  }

  //matchALL(/pattern/g) => Iterator => for-of use for getting the Objects from the Iterator. 
 