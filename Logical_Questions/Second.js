
/**
 *  112,111,121,131,444
 */


function isPalindrome(v)
{
    let str=""+v;
    let str_r="";
    for(v=str.length-1;v>=0;v--)
    {
        str_r=str_r+str.charAt(v);
    }
    console.log(str);
    console.log(str_r);
    console.log(str==str_r);
}
 
isPalindrome(121);
