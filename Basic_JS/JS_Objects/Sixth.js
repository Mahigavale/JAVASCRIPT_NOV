
let Order={
 price:89.65,
 Item:"Book",
 pincode:"112233",
 getinfo:function ()
 {
    return this.price+" "+this.Item+" "+this.pincode;
 }
};


//   console.log(Order.getinfo());

 console.log(Object.values(Order));
 //Array Of Values.

  console.log(
   Object.entries(Order));

   //Array of key value pairs

  console.log(
    Object.keys(Order).includes("Item"));
    //Array Of Keys

 
    

    delete Order['Item'];

    

    console.log(Order);
    
  