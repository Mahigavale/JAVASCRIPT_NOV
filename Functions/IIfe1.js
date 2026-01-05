
(function(v)
{
    console.log("hello"+v);

    (function(){
       console.log("hyyy"+v);
       

       (function()
       {
        console.log("bye:"+v);
        
       })();

    })();

    console.log("I am done");
    
})(5);