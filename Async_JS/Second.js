



function Print(name)
{
    console.log("hiiii from interval...."+name);

  

    
}

console.log("hii");
console.log("hello");



  let id=setInterval(Print,1500,"DEMO");
  
  console.log("Id:::::"+id);

  
  function clear()
  {
     clearInterval(id);
  }

  setTimeout(clear,6100);



  function DEMO()
  {
    while(true){
      console.log("hiiiiiiiiiiiiiiiiiiii------------+++++");
      
    }
  }
  // DEMO();
