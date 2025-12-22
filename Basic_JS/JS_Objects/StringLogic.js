
let names=["dada","dad","anna","nana","naan","maam","mama","madam"];


console.log(Object.groupBy(names,Cehck));





function Cehck(v)
{
    let str=new String(v);

      let str2="";

      for(v=str.length-1;v>=0;v--)
      {
         str2+=str.charAt(v);
      }

   
      if(str2==str)
      {
        return new String (" Palindrome");
      }
      else
      {
        return "not palindrome";
      }
      
}

